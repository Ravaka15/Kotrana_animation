import React, { useEffect, useState } from 'react';
import '../../../assets/styles/Navbar.css';
import logo from "../../../assets/img/favicon.gif";

const Navbar: React.FC = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200;

      if (scrollPosition > threshold) {
        setIsNavbarTransparent(true);
      } else {
        setIsNavbarTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isNavbarTransparent ? 'transparent' : ''} ${isNavbarTransparent ? 'red-background' : ''}`}>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="/home" className="navbar-link">Accueil</a>
                </li>
                <li className="navbar-item">
                <a href="#movie" className="navbar-link">Movie</a>
                </li>
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <li className="navbar-item">
                    <a href="/contact" className="navbar-link">Contact</a>
                </li>
                <li className="navbar-item">
                    <a href="/work" className="navbar-link">Travail</a>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;
