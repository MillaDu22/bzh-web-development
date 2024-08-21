import './about.css';
import BackAbout from '../../assets/images/backgroundAbout.jpg';

function About() {
    return(
        <div id="about" className ="container-about">
            <img className="back-about" src={BackAbout} alt="acrilic decoration" />
        </div>
    )
}
export default About;