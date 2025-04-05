import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/Fontawesome';
import '../App.css';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
<div className=' main-header flex justify-between items-center py-2'>
<div className="logo text-2xl font-semibold"> Artisans <span className='text-purple-800 font-semibold'> Alley</span> </div>

<div className={`header-nav ${isMenuOpen ? 'show-menu' : ''} `}>
  <ul className='flex'>
    <li className='pl-5'>
<Link className='text-small li-links'  to="/">Home</Link>
    </li>
    <hr className='horizontal'></hr>
    <li className='pl-5'>
      <Link  className='text-small li-links'  to="/shop">Shop</Link>
    </li>
    <hr className='horizontal'></hr>

    <li className='pl-5'>
      <Link className='text-small li-links'   to="/artisans">Artisans</Link>
    </li>
    <hr className='horizontal'></hr>

    <li className='pl-5'>
      <Link  className='text-small li-links'  to="/collection">Collection</Link>
    </li>
    <hr className='horizontal'></hr>

    <li className='pl-5'>
      <Link  className='text-small li-links'  to="/contact">Contact</Link>
    </li>
    <hr className='horizontal'></hr>

  </ul>

</div>

<div className="menu-icons">
<div className="nav-icons flex justify-evenly">
  <Link className='pl-3 text-small'>
  <FontAwesomeIcon className='font-icon' icon={['fas', 'search']} />
  </Link>
<Link to="/favourite" className='pl-3 text-small'>
<FontAwesomeIcon className='font-icon' icon={['fas', 'heart']}/>
</Link>
<Link to="/cart"  className='pl-3 text-small'>
<FontAwesomeIcon className='font-icon' icon={['fas', 'shopping-bag']} />
</Link>

</div>
</div>

<div className="toggle-menu" onClick={handleToggle}>
<FontAwesomeIcon  className='text-4xl cursor-pointer' icon={['fas', 'bars']} />
</div> 

</div>
<Outlet/>

    </>
  )
}

export default Header
