import Screens from '../../assets/images/screens.webp';
/*import Logo3Video from '../Logo3/index.jsx';*/
import Me from '../../assets/images/ludmilla-AWC.webp';
import RightIcon from '../../assets/images/—Pngtree—blue arrow abstract icon design_5951628.png';
import './header.css';

function Header() {
    return (
        <header className="container-hero">
            <div className="box-hero">
                <div className="container-txt">
                    <img src= {Me} alt ="Ludmilla de Armor Web Créations" className ="meawc" />
                    {/*<Logo3Video />*/}
                </div>
                <img src = {RightIcon} alt= "flèche de Ludmilla vers preview" className="right-icon" />
                <div className="container-screens">
                    <img className="asset-hero" src={Screens} alt="preview responsive websites" />
                </div>
            </div>
        </header>
    );
}

export default Header;