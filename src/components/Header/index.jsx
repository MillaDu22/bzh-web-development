import Screens from '../../assets/images/screens.webp';
import './header.css';

function Header() {
    return (
        <div className="container-hero">
            <div className="box-hero">
                <div className="container-txt">
                    <h3 className="we-are">
                        <i className="fas fa-laptop-code" aria-hidden="true" style={{ marginRight: '10px', color: '#FFD700' }}></i>
                        Concepteur site web
                    </h3>
                    <h4 className="title-hero">
                    <i className="fas fa-code" aria-hidden="true" style={{ marginRight: '10px', color: '#B0B0B0' }}></i>
                        Et développeur logiciel
                    </h4>
                    <p className="subtitle-hero">
                    <i className="fas fa-lightbulb" aria-hidden="true" style={{ marginRight: '10px', color: '#FFD700' }}></i>
                        Solutions innovantes du digital
                    </p>
                </div>
                <div className="container-screens">
                    <img className="asset-hero" src={Screens} alt="preview responsive websites" />
                </div>
            </div>
        </div>
    );
}

export default Header;