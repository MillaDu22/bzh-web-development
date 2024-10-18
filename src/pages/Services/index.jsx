import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './services.css';
import DetailsPack from '../../components/DetailsPack/index.jsx';
import Promo from '../../components/Promo/index.jsx';

function Services() {
    const [openPack, setOpenPack] = useState(null);

    const handleToggle = (pack) => {
        setOpenPack(openPack === pack ? null : pack);
    };

    useEffect(() => {
        const section = document.querySelector('.container-services');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeInUp');
                }
            });
        }, {
            threshold: 0.2 // Animation déclenchée quand 20% de la section est visible //
        });

        observer.observe(section);

        return () => observer.unobserve(section);
    }, []);

    return (
        <>
            <Helmet>
                <title>Nos Services | Packs de Création de Sites Web</title>
                <meta name="description" content="Découvrez les différents packs de création de sites internet sur mesure proposés par Armor Web Creations : Simple, Basic, Standard et Premium, adaptés à vos besoins." />
                <meta name="keywords" content="création de sites web, pack simple, pack basic, pack standard, pack premium, Guingamp, Côtes-d'Armor, Bretagne, promotions, site vitrine, portfolio, e-commerce, site dynamique, site statique, react, javascript, html, css, sass, frameworks modernes, hébergement, devis gratuit, optimisation SEO, design responsive, design haut de gamme, support technique, multipages, design personnalisé" />
                <link rel="canonical" href="https://armor-web-creations.vercel.app/#/services" />
                {/* Open Graph */}
                <meta property="og:title" content="Services | Armor Web Creations" />
                <meta property="og:description" content="Découvrez les offres et services de création de sites web sur mesure proposés par Armor Web Creations en Bretagne." />
                <meta property="og:image" content="https://armor-web-creations.vercel.app/services-page.png" />
                <meta property="og:url" content="https://armor-web-creations.vercel.app/#/services" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Services | Armor Web Creations" />
                <meta name="twitter:description" content="Découvrez les offres et services de création de sites web sur mesure proposés par Armor Web Creations en Bretagne." />
                <meta name="twitter:image" content="https://armor-web-creations.vercel.app/services-page.png" />
            </Helmet>
            <div id="services" className="container-services">
                <i className="fa-solid fa-cubes"></i>
                <h2 className="services-title">Les offres</h2>
                <div className="services-grid">
                <div className={`service-card ${openPack === 'simple' ? 'expanded' : ''}`}>
                    <h3>Pack Simple</h3>
                    <p>Parfait pour les projets simples avec un budget limité.</p>
                    <ul>
                        <li>Site statique de 1 à 3 pages</li>
                        <li>HTML et CSS uniquement</li>
                        <li>Design responsive</li>
                        <li>1 mois de support</li>
                    </ul>
                    <div className="container-buttons">
                        <Link className ="link-devis" to="/contact">Obtenir un devis</Link>
                        {/*<div className="price">A partir de 800€</div>*/}
                        <button className="btn" onClick={() => handleToggle('simple')}>
                            {openPack === 'simple' ? 'Masquer les détails' : 'Voir ce pack'}
                        </button>
                    </div>
                    <DetailsPack 
                        isOpen={openPack === 'simple'}
                        details="Ce Pack Simple inclut la création d'un site statique de 1 à 3 pages avec du HTML et CSS. Ce site est parfait pour les projets simples qui ne nécessitent pas de fonctionnalités dynamiques. Le design est responsive pour assurer la compatibilité avec les appareils mobiles. Domaine et hébergement OVH. Ce pack inclut un mois de support pour toute assistance technique."
                    />
                    </div>
                    <div className={`service-card ${openPack === 'basic' ? 'expanded' : ''}`}>
                        <h3>Pack Basic</h3>
                        <p>Idéal pour les petites entreprises ou les projets personnels.</p>
                        <ul>
                            <li>Site vitrine dynamique de 3 pages</li>
                            <li>HTML, CSS et JavaScript ou React</li>
                            <li>Design responsive</li>
                            <li>Optimisation SEO de base</li>
                            <li>1 mois de support</li>
                        </ul>
                        <div className="container-buttons">
                            <Link className ="link-devis" to="/contact">Obtenir un devis</Link>
                            {/*<div className="price">A partir de 1500€</div>*/}
                            <button className="btn" onClick={() => handleToggle('basic')}>
                                {openPack === 'basic' ? 'Masquer les détails' : 'Voir ce pack'}
                            </button>
                        </div>
                        <DetailsPack 
                            isOpen={openPack === 'basic'}
                            details="Ce pack Basic inclut un site vitrine dynamique de 3 pages avec un design responsive. Nous nous occupons également de l'optimisation SEO de base pour que votre site soit bien référencé. Domaine et hébergement OVH. De plus, vous bénéficiez d'un mois de support pour toute assistance technique."
                        />
                    </div>
                    <div className={`service-card ${openPack === 'standard' ? 'expanded' : ''}`}>
                        <h3>Pack Standard</h3>
                        <p>Parfait pour les entreprises en croissance.</p>
                        <ul>
                            <li>Site dynamique de 5-7 pages</li>
                            <li>HTML, CSS et JavaScript ou React</li>
                            <li>Design personnalisé</li>
                            <li>Optimisation SEO avancée</li>
                            <li>3 mois de support</li>
                        </ul>
                        <div className="container-buttons">
                            <Link className ="link-devis" to="/contact">Obtenir un devis</Link>
                            {/*<div className="price">A partir de 4500€</div>*/}
                            <button className="btn" onClick={() => handleToggle('standard')}>
                                {openPack === 'standard' ? 'Masquer les détails' : 'Voir ce pack'}
                            </button>
                        </div>
                        <DetailsPack 
                            isOpen={openPack === 'standard'}
                            details="Le Pack Standard comprend un site dynamique de 5 à 7 pages avec un design personnalisé selon vos besoins. Ce pack inclut également une optimisation SEO avancée pour améliorer la visibilité de votre site. Domaine et hébergement OVH. Vous bénéficiez de 3 mois de support technique."
                        />
                    </div>
                    <div className={`service-card ${openPack === 'premium' ? 'expanded' : ''}`}>
                        <h3>Pack Premium</h3>
                        <p>Pour les entreprises ayant des besoins spécifiques.</p>
                        <ul>
                            <li>Site sur mesure avec fonctionnalités avancées</li>
                            <li>Design haut de gamme</li>
                            <li>Optimisation SEO complète</li>
                            <li>6 mois de support</li>
                        </ul>
                        <div className="container-buttons">
                            <Link className ="link-devis" to="/contact">Obtenir un devis</Link>
                            {/*<div className="price">A partir de 18000€</div>*/}
                            <button className="btn" onClick={() => handleToggle('premium')}>
                                {openPack === 'premium' ? 'Masquer les détails' : 'Voir ce pack'}
                            </button>
                        </div>
                        <DetailsPack 
                            isOpen={openPack === 'premium'}
                            details="Le Pack Premium offre un site entièrement sur mesure avec des fonctionnalités avancées selon vos besoins spécifiques. Il inclut également un design haut de gamme et une optimisation SEO complète. Domaine et hébergement OVH. Vous bénéficierez de 6 mois de support technique pour toute assistance."
                        />
                    </div>
                </div>
                <Promo />
                <div className="evolution">
                    <h4 className= "title-evolution">Evolution des tarifs</h4>
                    <span className ="price-disclaimer">Les tarifs évoluent en fonction des contraintes techniques et des fonctionnalités souhaitées.</span>
                </div>
                <div className="payment">
                    <h4 className= "title-payment">Modalités de paiement</h4>
                    <span className ="mention-payment">Un acompte de 30% est requis à la commande. À l'achèvement de l'implémentation, un second paiement de 40% est dû. Le solde de 30% restant est à régler à la livraison finale.</span>
                </div>
                <div className="time">
                    <h4 className= "title-ss-traitance">Sous-traitance pour entreprises</h4>
                    <span className ="mention-ss-traitance">Armor Web Creations propose également des services de sous-traitance pour les entreprises souhaitant externaliser des projets de développement. N'hésitez pas à prendre contact pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.</span>
                </div>
            </div>
        </>    
    );
}

export default Services;