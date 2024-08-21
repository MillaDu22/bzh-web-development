import React from 'react';
import './header.css';
import Britain from '../../assets/images/britain-logo.webp';
import Navbar from '../Navbar/index';

function Header() {
    return(
        <div className = "container-header">
            <a className = "container-containers" href="./">
                <div className="container-title-france">
                    <h1 id="home" className="title-app">WEST WEB DEVELOPMENT</h1>
                    <div className="bleu-blanc-rouge">
                        <span className="bleu"></span>
                        <span className="blanc"></span>
                        <span className="rouge"></span>
                    </div>
                </div>
                <div className="container-logo-subtitle">
                    <img className ="britain" src = {Britain} alt="Britain-logo"/>
                    <h2 className = "subtitle-app">Ludmilla Marti</h2>
                </div>
            </a>
            <Navbar />
        </div>
    )
}
export default Header;