import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import LOGO from '../../img/LOGO.png'
import  './NavBar.css'
import {Link} from 'react-router-dom'

 function NavBar(){
    return (
    <>  
        <header class="header">

            <div class="logo">
            <Link to={'/'}><img src= {LOGO} alt="logo" /></Link>
            <li><Link to={'/'}>Tu Consola 🕹️</Link></li>
            </div>

            <nav>
                <ul class="navlinks">
                    <li><Link to={'category/play'}>PlayStation</Link></li>
                    <li><Link to={'category/xbox'}>Xbox</Link></li>
                    <li><Link to={'category/nintendo'}>Nintendo</Link></li>
                </ul>
            </nav>
            <CartWidget/>

        </header>
           
    </>
    )
}

export default NavBar