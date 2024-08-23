import Mentions from '../Mentions/index.jsx';
import Policy from '../Policy/index.jsx';
import Terms from '../Terms/index.jsx';
import './footer.css';

function Footer() {
    return(
        <div className = "container-footer">
            <div className ="box-links-footer">
                <div className= "txt-footer">
                    <p className = "adress">22 200 Guingamp - Bretagne - FRANCE</p>
                    <p className = "copyright">©Ludmilla-Marti-2024</p> 
                </div>
                <div className ="container-social">
                    <a className="facebook" href="/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                    <a className="linkedin" href="/" target="blank"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a className="mail" href="mailto:marti.ludmilla@orange.fr" target="blank"><i className="fa-solid fa-envelope"></i></a>
                    <a className="insta" href="/" target="blank"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="legal-notice">
                    <p><a href="#privacy-policy">Politique de confidentialité</a></p>
                    <p><a href="#terms-of-service">Conditions d'utilisation</a></p>
                    <p><a href="#legal-notice">Mentions légales</a></p>
                </div>
            </div>
            <Mentions />
            <Policy />
            <Terms />
        </div>
    )
}
export default Footer;
