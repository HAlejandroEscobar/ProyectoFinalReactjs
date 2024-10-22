import {Link} from 'react-router-dom'
function CartWidget(){
    return (
    <>
    
    <Link to={'/cart'}><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <span class="material-symbols-outlined">
    shopping_bag
    <p>0</p>
    </span>
    </Link>
    </>
    )
}

export default CartWidget