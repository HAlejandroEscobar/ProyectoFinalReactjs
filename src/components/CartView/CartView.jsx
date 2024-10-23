import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

function CartView() {
  const { cart, removeItem, addItem, totalPrice } = useContext(CartContext);

  const increaseQuantity = (item) => {
    addItem({ ...item, quantity: 1 });
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      addItem({ ...item, quantity: -1 });
    } else {
      removeItem(item.id);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
        marginBottom: '50px',
      }}>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={`cartView-${item.id}`}
              style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>
                  ${item.price} x {item.quantity}
                </p>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button
                    style={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      borderRadius: '5px',
                    }}
                    onClick={() => increaseQuantity(item)}>
                    +
                  </button>
                  <button
                    style={{
                      backgroundColor: '#f44336',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      borderRadius: '5px',
                    }}
                    onClick={() => decreaseQuantity(item)}>
                    -
                  </button>
                  <button
                    style={{
                      backgroundColor: '#ff9800',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      borderRadius: '5px',
                    }}
                    onClick={() => removeItem(item.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to='/CheckOut'>
        <button>Ir al pago</button>
      </Link>
    </div>
  );
}

export default CartView;
