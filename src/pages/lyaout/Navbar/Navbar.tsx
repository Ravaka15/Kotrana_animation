import React from 'react';
import '../../../assets/styles/Navbar.css';
import logo from "../../../assets/img/favicon.gif";
const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="/" className="navbar-link">Accueil</a>
                </li>
                <li className="navbar-item">
                    <a href="/about" className="navbar-link">À propos</a>
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
