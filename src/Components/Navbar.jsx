import {  Link, Outlet } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/Fontawesome';

function Navbar() {
  return (
<>
<div className="navbar">
<div className="logo">Artisans <span>Alley</span></div>
<nav>
  <ul className="links">
  <li>
    <Link to='/'>Home</Link>
  </li>
  <li>
    <Link to='/shop'>Shop</Link>
  </li>
  <li>
    <Link to='/collection'>Collection</Link>
  </li>
  <li>
    <Link to='/artisans'>Artisans</Link>
  </li>
  <li>
    <Link to='/contact'>Contact</Link>
  </li>
  </ul>
</nav>
</div>
{/* <div className="navbar">
  <div className="logo">Artisan <span>Alley</span> </div>
<nav>
  <ul className="links">
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/shop">Shop</Link>
    </li>
    <li>
    <Link to="/collection">Collection</Link>
    </li>
    <li>
    <Link to="/artisans">Artisans</Link>
    </li>
    <li>
    <Link to="/contact">Contact</Link>
    </li>
  </ul>
</nav>
<div className="nav-icons">
<FontAwesomeIcon icon={['fas', 'search']} />
<Link to="/cart">
<FontAwesomeIcon icon={['fas', 'shopping-bag']}/>
</Link>
<FontAwesomeIcon icon={['fas', 'heart']} />

</div>
</div> */}
<Outlet/>
</>
  )
}

export default Navbar
