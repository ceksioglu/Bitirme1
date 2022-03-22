import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            MARMARA <i className="fa-solid fa-book-journal-whills"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Anasayfa
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/admin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Yönetici
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/urunler'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Ürünler
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Kayıt Ol!
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>KAYIT OL!</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
