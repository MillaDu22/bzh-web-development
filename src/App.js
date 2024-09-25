import React, {useEffect, useState, useRef} from 'react';
import { useReactToPrint } from 'react-to-print'; 
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CookiesConsent from '../src/components/CookiesConsent/index.jsx';
import HeroHeader from '../src/components/HeroHeader/index.jsx';
import About from '../src/components/About/index.jsx';
import Services from '../src/components/Services/index.jsx';
import Promo from '../src/components/Promo/index.jsx';
import Timeline from '../src/components/Timeline/index.jsx';
import Contact from '../src/components/Contact/index.jsx';
import Slider from '../src/components/Slider/index.jsx';
import Footer from '../src/components/Footer/index.jsx';
import './App.css';

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const pageRef = useRef(); // Crée une référence pour la section à imprimer

  const handlePrint = useReactToPrint({
    content: () => pageRef.current,
    documentTitle: 'Site - version imprimable', // Titre du document PDF
  });

  useEffect(() => {
    const consent = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookieConsent='))
      ?.split('=')[1];

    if (consent === 'accepted') {
      setCookiesAccepted(true);
      // Chargement de Google Analytics ou d'autres scripts ici //
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=GTM-K2D59TZV`;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GTM-K2D59TZV');
      };
    }
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="canonical" href="https://armor-web-creations.vercel.app" />

          <title>Armor Web Creations</title>
          <meta name="description" content="Armor Web Creations est une entreprise de développement web basée en Bretagne. Nous créons des sites web performants sur mesure pour tous vos besoins personnels ou professionnels. Découvrez nos offres et promotions." />
          <meta name="keywords" content="développement web, création de sites web, Bretagne, offres de création de site, promotions, sites web sur mesure, projets personnels, projets professionnels" />

          {/* Open Graph tags for Social Media sharing */}
          <meta property="og:title" content="Armor Web Creations" />
          <meta property="og:description" content="Armor Web Créations, votre expert en création ou refonte de sites web en Bretagne. Nous offrons des solutions sur mesure pour vos projets personnels et professionnels, avec des offres et promotions attractives." />
          <meta property="og:image" content="https://armor-web-creations.vercel.app/assets/images/Homepage.png" />
          <meta property="og:url" content="https://armor-web-creations.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Armor Web Creations" />
          
          {/* Twitter Card tags for sharing on Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Armor Web Creations" />
          <meta name="twitter:description" content="Armor Web Créations, votre expert en création ou refonte de sites web en Bretagne. Nous offrons des solutions sur mesure pour vos projets personnels et professionnels." />
          <meta name="twitter:image" content="https://armor-web-creations.vercel.app/assets/images/Homepage.png" />
        </Helmet>
        <HeroHeader />
        <CookiesConsent setCookiesAccepted={setCookiesAccepted} />
        <div className="ref" ref={pageRef}>
          <div className="page-break">
            <About />
          </div>
          <div className="page-break">
            <Services />
          </div>
        </div>
        <Promo />
        <Timeline />
        <Contact cookiesAccepted={cookiesAccepted} />
        <Slider />
        <Footer handlePrint={handlePrint} />
      </div>
    </HelmetProvider>
  );
}

export default App;
