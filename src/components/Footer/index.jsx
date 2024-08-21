import './footer.css';

function Footer() {
    return(
        <div className = "container-footer">
            <div className= "txt-footer">
                <p className = "adress">22 200 Guingamp - Bretagne - FRANCE</p>
                <p className = "copyright">©Ludmilla-Marti-2024</p> 
            </div>
            <div className ="container-social">
                <a className="facebook" href="/" tar><i class="fa-brands fa-facebook-f" target="blank"></i></a>
                <a className="linkedin" href="/"><i className="fa-brands fa-linkedin-in" target="blank"></i></a>
                <a className="mail" href="mailto:marti.ludmilla@orange.fr"><i class="fa-solid fa-envelope" target="blank"></i></a>
                <a className="insta" href="/"><i class="fa-brands fa-instagram" target="blank"></i></a>
            </div>
        </div>
    )
}
export default Footer;
