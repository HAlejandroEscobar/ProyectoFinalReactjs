import {Link} from 'react-router-dom'


function CartView () {
  return (
    <>
    <h1>Hola mundo</h1>
    <Link to='/CheckOut'>  <button>Ir al pago</button>  </Link>
   
    </>
  )
}

export default CartView