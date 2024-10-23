import { useContext } from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
function CartWidget(){

    const [cart]  =  useContext(CartContext);

    return (
    <>
    
    <Link to={'/cart'}><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <span class="material-symbols-outlined">
    shopping_bag
    <p>{cart.length}</p>
    </span>
    </Link>
    </>
    )
}

export default CartWidget