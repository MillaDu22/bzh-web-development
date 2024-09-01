import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HeroHeader from '../src/components/HeroHeader/index.jsx';
import About from '../src/components/About/index.jsx';
import Services from '../src/components/Services/index.jsx';
import Promo from '../src/components/Promo/index.jsx';
import Timeline from '../src/components/Timeline/index.jsx';
import Contact from '../src/components/Contact/index.jsx';
import Footer from '../src/components/Footer/index.jsx';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Armor Web Créations - Création de Sites Web sur Mesure en Bretagne</title>
          <meta name="description" content="Armor Web Créations est une entreprise de développement web basée en Bretagne. Nous créons des sites web performants sur mesure pour tous vos besoins personnels ou professionnels. Découvrez nos offres et promotions." />
          <meta name="keywords" content="développement web, création de sites web, Bretagne, offres de création de site, promotions, sites web sur mesure, projets personnels, projets professionnels" />
          <meta property="og:title" content="Armor Web Créations - Création de Sites Web sur Mesure en Bretagne" />
          <meta property="og:description" content="Découvrez Armor Web Créations, votre expert en création de sites web en Bretagne. Nous offrons des solutions sur mesure pour vos projets personnels et professionnels, avec des offres et promotions attractives." />
          <meta property="og:image" content="https://armor-web-creations.vercel.app/assets/images/Homepage.png" />
          <meta property="og:url" content="https://armor-web-creations.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Armor Web Créations" />
        </Helmet>
        <HeroHeader />
        <About />
        <Services />
        <Promo />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
