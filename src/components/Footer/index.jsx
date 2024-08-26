import React, { useState } from 'react';
import Mentions from '../Mentions/index.jsx';
import Policy from '../Policy/index.jsx';
import Terms from '../Terms/index.jsx';
import './footer.css';

function Footer() {
    const [visibleComponent, setVisibleComponent] = useState(null);

    const handleLinkClick = (component) => {
        setVisibleComponent(visibleComponent === component ? null : component);
    };

    return (
        <div className="container-footer">
            {visibleComponent === 'mentions' && <Mentions />}
            {visibleComponent === 'policy' && <Policy />}
            {visibleComponent === 'terms' && <Terms />}
            <div className="box-links-footer">
                <div className="txt-footer">
                    <p className="adress">22 200 Guingamp - Bretagne - FRANCE</p>
                    <p className="copyright">©Ludmilla-Marti-2024, tous droits réservés</p>
                </div>
                <div className="container-social">
                    <a className="facebook" href="https://milladu22.github.io/ldla-mti-web-developer/" target="blank"><i className="fa-brands fa-facebook-f"></i></a>
                    <a className="linkedin" href="https://milladu22.github.io/ldla-mti-web-developer/" target="blank"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a className="mail" href="mailto:millamti22@gmail.com" target="blank"><i className="fa-solid fa-envelope"></i></a>
                    <a className="insta" href="https://milladu22.github.io/ldla-mti-web-developer/" target="blank"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="legal-notice">
                    <p><a href="#privacy-policy" onClick={() => handleLinkClick('policy')}>Politique de confidentialité</a></p>
                    <p><a href="#terms-of-service" onClick={() => handleLinkClick('terms')}>Conditions d'utilisation</a></p>
                    <p><a href="#legal-notice" onClick={() => handleLinkClick('mentions')}>Mentions légales</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
