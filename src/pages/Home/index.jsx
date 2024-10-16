import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/index.jsx';
import Intro from '../../components/Intro/index.jsx';
import Timeline from '../../components/Timeline/index.jsx';
import CookiesConsent from '../../components/CookiesConsent/index.jsx';
import './home.css';

function Home() {

    // eslint-disable-next-line no-unused-vars
    const [cookiesAccepted, setCookiesAccepted] = useState(false);

    useEffect(() => {
    const consent = document.cookie
        .split('; ')
        .find(row => row.startsWith('cookieConsent='))
        ?.split('=')[1];
    
    if (consent === 'accepted') {
        setCookiesAccepted(true);
    
        // Vérifiez si le script GTM est déjà chargé
        if (!window.dataLayer) {
        // Création et insertion du script Google Tag Manager
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=GTM-K2D59TZV`;
        script.async = true;
        document.body.appendChild(script);
    
        script.onload = () => {
            // Initialisation de Google Analytics
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-K2D59TZV');
        };
        }
    }
    }, []);
    
    return(
        <div className="container-home">
                {/* Consentement aux cookies */}
                <CookiesConsent setCookiesAccepted={setCookiesAccepted} />
                <Header />
                <Intro />
                <Timeline />
        </div>
    )
}
export default Home;