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
                    <a className="facebook" href="https://milladu22.github.io/facebook/" target="blank" aria-label="facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a className="linkedin" href="https://www.linkedin.com/in/ludmilla-marti-345313255/" target="blank" aria-label="linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a className="mail" href="mailto:millamti22@gmail.com" target="blank" aria-label="gmail"><i className="fa-solid fa-envelope"></i></a>
                    <a className="insta" href="https://milladu22.github.io/insta/" target="blank" aria-label="insta"><i className="fa-brands fa-instagram"></i></a>
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
