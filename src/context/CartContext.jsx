import { createContext, useState } from "react"



export const CartContext = createContext();


export function CartContextProvider ({children}){
    
    const [cart, setCart] = useState([]);



   // agregar addtocart

   //agregar inthecart

   //agregar clearcart

   //agregar remove

   //agregar total price

    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
