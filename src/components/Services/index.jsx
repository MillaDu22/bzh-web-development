import React, { useState } from 'react';
import './services.css';
import DetailsPack from '../DetailsPack/index.jsx';

function Services() {
    const [openPack, setOpenPack] = useState(null);

    const handleToggle = (pack) => {
        setOpenPack(openPack === pack ? null : pack);
    };
    return (
        <div id="services" className="container-services">
            <h2 className="services-title">Les Offres</h2>
            <div className="services-grid">
            <div className={`service-card ${openPack === 'basic' ? 'expanded' : ''}`}>
                    <h3>Pack Basic</h3>
                    <p>Idéal pour les petites entreprises ou les projets personnels.</p>
                    <ul>
                        <li>Site vitrine de 3 pages</li>
                        <li>Design responsive</li>
                        <li>Optimisation SEO de base</li>
                        <li>1 mois de support</li>
                    </ul>
                    <div className="price">1500€-TTC</div>
                    <button className="btn" onClick={() => handleToggle('basic')}>
                        {openPack === 'basic' ? 'Masquer les détails' : 'Choisir ce pack'}
                    </button>
                    <DetailsPack 
                        isOpen={openPack === 'basic'}
                        details="Ce pack inclut un site vitrine de 3 pages avec un design responsive. Nous nous occupons également de l'optimisation SEO de base pour que votre site soit bien référencé. De plus, vous bénéficiez d'un mois de support pour toute assistance technique."
                    />
                </div>
                <div className={`service-card ${openPack === 'standard' ? 'expanded' : ''}`}>
                    <h3>Pack Standard</h3>
                    <p>Parfait pour les entreprises en croissance.</p>
                    <ul>
                        <li>Site complet de 5-7 pages</li>
                        <li>Design personnalisé</li>
                        <li>Optimisation SEO avancée</li>
                        <li>3 mois de support</li>
                    </ul>
                    <div className="price">4500€-TTC</div>
                    <button className="btn" onClick={() => handleToggle('standard')}>
                        {openPack === 'standard' ? 'Masquer les détails' : 'Choisir ce pack'}
                    </button>
                    <DetailsPack 
                        isOpen={openPack === 'standard'}
                        details="Le Pack Standard comprend un site complet de 5 à 7 pages avec un design personnalisé selon vos besoins. Ce pack inclut également une optimisation SEO avancée pour améliorer la visibilité de votre site. Vous bénéficiez de 3 mois de support technique."
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
                    <div className="price">18000€-TTC</div>
                    <button className="btn" onClick={() => handleToggle('premium')}>
                        {openPack === 'premium' ? 'Masquer les détails' : 'Choisir ce pack'}
                    </button>
                    <DetailsPack 
                        isOpen={openPack === 'premium'}
                        details="Le Pack Premium offre un site entièrement sur mesure avec des fonctionnalités avancées selon vos besoins spécifiques. Il inclut également un design haut de gamme et une optimisation SEO complète. Vous bénéficierez de 6 mois de support technique pour toute assistance."
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;

