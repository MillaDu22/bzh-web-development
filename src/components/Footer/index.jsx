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
                    <p className="copyright">©Armor-Web-Creations-2024, tous droits réservés</p>
                </div>
                <div className="container-social">
                    <a className="facebook" href="https://www.facebook.com/armorwebcreations" target="blank" aria-label="facebook" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                    <a className="linkedin" href="https://www.linkedin.com/in/ludmilla-marti-345313255/" target="blank" aria-label="linkedin" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a className="mail" href="mailto:armorwebcreations@gmail.com" target="blank" aria-label="gmail" rel="noopener noreferrer"><i className="fa-solid fa-envelope"></i></a>
                    <a className="insta" href="https://www.instagram.com/armor_web_creations/" target="blank" aria-label="insta" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="legal-notice" aria-label="Mentions légales">
                    <p className="buttons-mentions" onClick={() => handleLinkClick('policy')} aria-label="Voir la politique de confidentialité">Politique de confidentialité</p>
                    <p className="buttons-mentions" onClick={() => handleLinkClick('terms')} aria-label="Voir les conditions d'utilisation">Conditions d'utilisation</p>
                    <p className="buttons-mentions" onClick={() => handleLinkClick('mentions')} aria-label="Voir les mentions légales">Mentions légales</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
