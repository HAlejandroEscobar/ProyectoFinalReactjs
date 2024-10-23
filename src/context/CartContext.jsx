import { createContext, useState } from "react"




export const CartContext = createContext();


export function CartProvider ({children}){
    
    const [cart, setCart] = useState([]);

    //agregar productos al carrito

    const addItem =  (item)  => {
        setCart([...cart, item])
 

    }

   //agregar IsInthecart




   

   //agregar clearCart

   //agregar remove

   //agregar total price

    return(
        <CartContext.Provider value ={[cart, setCart, addItem]}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
