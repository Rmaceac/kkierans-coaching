import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
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

  window.addEventListener('resize', showButton)
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container" onClick={handleClick}>
          <Link to="/" className="navbar-logo">
            KK <i className="fa-solid fa-lemon" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                Meet Kat
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/testimonials" className="nav-links" onClick={closeMobileMenu}>
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/uwc" className="nav-links" onClick={closeMobileMenu}>
                Unbound Women's Collective
              </Link>
            </li>
          </ul>
          <a 
            href="https://www.instagram.com/katkierans/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            >
            <i className="fa-brands fa-instagram"/>
          </a>
          {button && <Button 
            buttonStyle='btn--outline'
            link='sign-up'
            >
              Free Clarity Call
            </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
