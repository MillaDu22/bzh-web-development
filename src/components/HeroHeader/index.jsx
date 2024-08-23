import Header from '../Header/index.jsx';
import Screens from '../../assets/images/screens.png';
import './heroHeader.css';

function HeroHeader() {
    return (
        <div className="container-hero">
            <Header />
            <div className="box-hero">
                <div className="container-txt">
                    <p className="we-are">Je suis développeur web</p>
                    <h2 className="title-hero">ET J' <i>ADORE</i> MON METIER</h2>
                </div>
                <div className="container-screens">
                    <img className="asset-hero" src={Screens} alt="preview responsive websites" />
                </div>
            </div>
        </div>
    );
}

export default HeroHeader;
