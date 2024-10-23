import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar productos al carrito
  const addItem = (item) => {
    setCart((prevCart) => {
      console.log(prevCart, item);
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity;
        return updatedCart;
      } else {
        return [...prevCart, item];
      }
    });
  };

  // Verificar si un producto está en el carrito
  const isInTheCart = (itemId) => {
    return cart.some((item) => item.item === itemId);
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Remover un producto del carrito
  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Calcular el precio total
  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, isInTheCart, clearCart, removeItem, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
