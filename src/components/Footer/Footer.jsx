import "./Footer.css"
import { Link } from 'react-router-dom';
import LOGO from '../../img/LOGO.png'

function Footer () {
  return (
    <>  
        <article className="footer">
        <Link to={'/'}>
            <img src={LOGO} alt='logo' />
          </Link>
            <p>© 2024 Copyright</p>
        </article>
    </>
  )
}

export default Footer