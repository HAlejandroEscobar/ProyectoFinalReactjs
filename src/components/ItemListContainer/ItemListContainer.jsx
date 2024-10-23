import React, { useEffect, useState } from 'react';
import { getProducts } from '../firebase/firebase';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        if (category) {
          setProducts(res.filter((products) => products.category === category));
        } else {
          setProducts(res);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return (
    <>
      <section
        className='section-container'
        style={{ display: 'flex', gap: 50, margin: 20, padding: 5, border: ' solid, black, 10px' }}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => <Item key={product.id} product={product} />)
        )}
      </section>
    </>
  );
}

export default ItemListContainer;
