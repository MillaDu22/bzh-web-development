import Header from '../Header/index.jsx';
import BackgroundHero from '../../assets/images/backgroundHero.jpg';
import './heroHeader.css';


function HeroHeader () {
    return(
        <div className ="container-hero">
            <Header />
            <div className="container-back-txt">
                <div className="background-hero">
                    <img className="tof-back" src={BackgroundHero} alt=" datas" />
                </div>
                <div className ="container-txt">
                    <p className ="we-are">I'm web-developer</p>
                    <h2 className= "title-hero">AND I <i> LOVE </i>  MY JOB</h2>
                </div>
            </div>
        </div>
    )
}
export default HeroHeader;
