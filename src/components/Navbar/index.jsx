import React from 'react';
import './navbar.css';

function Navbar() {
    return(
        <div className = "container-navbar">
            <nav className="nav-header">
                <a className="nav_item1" href="#home">
                    <p className="nav_item_text1">Home</p>
                </a>
                <a className="nav_item2" href="#about">
                    <p className="nav_item_text2">About</p>
                </a>
                <a className="nav_item3" href="#services">
                    <p className="nav_item_text3">Services</p>
                </a>
                <a className="nav_item4" href="https://milladu22.github.io/ldla-mti-web-developer/" target="blank">
                    <p className="nav_item_text4">Portfolio</p>
                </a>
                <a className="nav_item5" href="#contact">
                    <p className="nav_item_text5">Contact</p>
                </a>
            </nav>
        </div>
    )
}
export default Navbar;