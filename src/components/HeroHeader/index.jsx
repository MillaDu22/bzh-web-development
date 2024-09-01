import Header from '../Header/index.jsx';
import Screens from '../../assets/images/screens.webp';
import './heroHeader.css';

function HeroHeader() {
    return (
        <div className="container-hero">
            <Header />
            <div className="box-hero">
                <div className="container-txt">
                    <h3 className="we-are">Je suis développeur web</h3>
                    <h4 className="title-hero">ET J' AIME MON METIER</h4>
                    <p className="subtitle-hero">Créer des expériences web uniques</p>
                </div>
                <div className="container-screens">
                    <img className="asset-hero" src={Screens} alt="preview responsive websites" />
                </div>
            </div>
        </div>
    );
}

export default HeroHeader;
