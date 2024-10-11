import React from 'react';
import './logo2.css';
import logoVideo from '../../assets/videos/armorwebcreations.mp4'; 

const Logo2 = () => {
    return (
        <div className="logo-container">
            <video className="logo-video" autoPlay muted>
                <source src={logoVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
            </video>
        </div>
    );
};

export default Logo2;
