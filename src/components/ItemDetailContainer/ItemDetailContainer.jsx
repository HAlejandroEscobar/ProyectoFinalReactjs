import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../firebase/firebase';
import CartContext from '../../context/CartContext';

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  const handleClick = () => {
    console.log({ ...product, quantity });
    addItem({ ...product, quantity });
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    getSingleProduct(id)
      .then((prod) => {
        if (prod) {
          setProduct(prod);
        } else {
          console.log('Producto no encontrado');
        }
      })
      .catch((error) => {
        console.error('Error al obtener el producto:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <article
          style={{ border: 'solid 5px orange', padding: 20, width: '800px', height: '600px' }}>
          <h1 style={{ height: '50px' }}>{product.title}</h1>
          <img style={{ height: '150px' }} src={product.image} alt={product.title} />
          <p style={{ height: '50px' }}>Descripcion: {product.description}</p>
          <p style={{ height: '50px' }}>Precio: {product.price}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={decreaseQuantity} style={{ width: '30px' }}>
              -
            </button>
            <input
              type='text'
              value={quantity}
              readOnly
              style={{ width: '40px', textAlign: 'center' }}
            />
            <button onClick={increaseQuantity} style={{ width: '30px' }}>
              +
            </button>
          </div>
          <button style={{ height: '50px', marginTop: '20px' }} onClick={handleClick}>
            Comprar
          </button>
        </article>
      )}
    </>
  );
}

export default ItemDetailContainer;
