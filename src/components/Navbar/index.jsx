import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className="container-navbar">
            <nav className="nav-header">
                <a className="nav-item" href="#home">
                    <p className="nav-item-text">Accueil</p>
                </a>
                <a className="nav-item" href="#about">
                    <p className="nav-item-text">AWC</p>
                </a>
                <a className="nav-item" href="#services">
                    <p className="nav-item-text">Packs</p>
                </a>
                <a className="nav-item" href="https://milladu22.github.io/ldla-mti-web-developer/" target="blank">
                    <p className="nav-item-text">Projets</p>
                </a>
                <a className="nav-item" href="#contact">
                    <p className="nav-item-text">Contact</p>
                </a>
            </nav>
        </div>
    );
}

export default Navbar;
