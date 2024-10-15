import './smoke.css';
import smokeVideo from '../../assets/videos/Black-screen-smoke-effect.mp4';

function Smoke() {
    return(
        <section className="section-smoke">
            <video className="video-smoke" src={smokeVideo} autoPlay muted></video>
            <h1 className="title-smoke">
                <span className="span-smoke">S</span>
                <span className="span-smoke">M</span>
                <span className="span-smoke">O</span>
                <span className="span-smoke">K</span>
                <span className="span-smoke">E</span>
            </h1>
        </section>
    )
}
export default Smoke;