import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo-link" onClick={closeMenu}>
          <h1 className="nav-logo">Tímový Projekt</h1>
        </Link>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>O nás</Link>
          </li>
          <li className="nav-item">
            <Link to="/memorandum" className="nav-link" onClick={closeMenu}>Zápisnice</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

