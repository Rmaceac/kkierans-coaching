import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            KK <FontAwesomeIcon icon="fa-solid fa-rocket" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
