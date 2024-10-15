import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <div className="intro-container">
            <h1>Bienvenue chez Armor Web Creations</h1>
            <p className="txt-welcome">
                Vous souhaitez donner vie à votre projet web ? Que vous soyez entrepreneur, association ou particulier, je vous accompagne de A à Z pour créer un site internet à votre image. Spécialisé dans la <strong>création de sites web sur mesure</strong>, je m'engage à vous fournir une solution parfaitement adaptée à vos besoins, que ce soit pour un <strong>site vitrine</strong>, un <strong>site e-commerce</strong> ou un <strong>portfolio professionnel</strong>.
            </p>
            <h2 className="services-title">Mes Services :</h2>
            <ul>
                <li>
                    <i className="fas fa-home" style={{ fontSize: '30px', marginRight: '10px', color: '#FFFFFF' }}></i>
                    Présentation de mon expertise et de mes valeurs en développement web.
                </li>
                <li>
                    <i className="fas fa-user" style={{ fontSize: '30px', marginRight: '10px', color: '#B0B0B0' }}></i>
                    Ma démarche, ma passion, et mon approche personnalisée.
                </li>
                <li>
                    <i className="fas fa-briefcase" style={{ fontSize: '30px', marginRight: '10px', color: '#FFFFFF' }}></i>
                    Découvrez mes réalisations pour mieux comprendre mon savoir-faire.
                </li>
                <li>
                    <i className="fas fa-tags" style={{ fontSize: '30px', marginRight: '10px', color: '#B0B0B0' }}></i>
                    Des offres adaptées à tous les budgets. Choisissez le pack qui répond à vos besoins.
                </li>
                <li>
                    <i className="fas fa-star" style={{ fontSize: '30px', marginRight: '10px', color: '#FFFFFF' }}></i>
                    Consultez les retours de mes clients et inspirez-vous de leurs expériences.
                </li>
                <li>
                    <i className="fas fa-envelope" style={{ fontSize: '30px', marginRight: '10px', color: '#B0B0B0' }}></i>
                    Prêt à démarrer votre projet ? Demandez un devis gratuit et personnalisé dès aujourd'hui.
                </li>
            </ul>
            <p className="p-print">
                Ma mission : vous aider à <strong>construire une présence en ligne solide</strong> avec un site web qui vous démarque. Je vous garantis une <strong>expérience utilisateur fluide</strong> et un design soigné. Un site web est bien plus qu'un outil de communication : c'est la vitrine de votre activité et le socle de votre succès en ligne.
            </p>
            <h2 className="action-title">Prêt(e) à passer à l'action ?</h2>
            <p>
                Explorez le site pour en savoir plus et découvrez comment je transforme vos idées en <strong>réalisations concrètes</strong>. Avec <strong>Armor Web Creations</strong>, je vous accompagne à chaque étape, de la <strong>conception</strong> à la <strong>mise en ligne</strong>, en passant par la <strong>personnalisation</strong>, le <strong>design</strong> et l'<strong>optimisation SEO</strong> pour garantir une <strong>expérience utilisateur exceptionnelle</strong>.
            </p>
        </div>
    );
};

export default Intro;


