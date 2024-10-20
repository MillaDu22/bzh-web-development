import './agency.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Agency() {
    useEffect(() => {
        // Ajoute la classe fade-in après le montage du composant
        const sections = document.querySelectorAll('.fade-in');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, index * 300); // Diffère l'animation pour chaque section
        });
    }, []);
    return (
        <>
            <Helmet>
                <title>Page agences digitales de Armor Web Creations | page agences digitales</title>
                <meta name="description" content="Armor Web Creations collabore avec des agences digitales. Contactez-moi pour vos projets à externaliser."/>
                <meta name="keywords" content="agences digitales, création de site web, collaboration, Côtes d'Armor, Guingamp, Bretagne, développement web, freelance, partenariat agence" />
                <link rel="canonical" href="https://armor-web-creations.vercel.app/#/agency" />
                {/* Open Graph */}
                <meta property="og:title" content="Entreprises | Armor Web Creations" />
                <meta property="og:description" content="Collaborons sur vos projets web. Armor Web Creations offre des services dédiés aux agences digitales en Bretagne." />
                <meta property="og:image" content="https://armor-web-creations.vercel.app/agency-page.png" />
                <meta property="og:url" content="https://armor-web-creations.vercel.app/#/agency" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Entreprises | Armor Web Creations" />
                <meta name="twitter:description" content="Collaborons sur vos projets web. Armor Web Creations offre des services dédiés aux agences digitales en Bretagne." />
                <meta name="twitter:image" content="https://armor-web-creations.vercel.app/agency-page.png" />
            </Helmet>
            <section className="agency-section">
                <div className="agency-container">
                <i className="fa fa-handshake"></i>
                    <h1 className="agency-title">Collaboration entre agences digitales et développeur freelance</h1>

                    <div className="agency-intro fade-in">
                        <h2>Renforçons vos équipes grâce à une collaboration fluide</h2>
                        <p>
                            En tant qu'agence digitale, vous avez sûrement déjà une équipe talentueuse à vos côtés. Je ne suis pas là pour vous réapprendre le métier, mais pour vous épauler sur des missions spécifiques. Que ce soit pour répondre à une surcharge de travail, ou pour un besoin temporaire de compétences en React ou autres technologies front-end, je me tiens à votre disposition pour enrichir vos projets.
                        </p>
                        <ul className="agency-benefits process-steps">
                            <li><i className="fa fa-project-diagram"></i> <strong className="strong">Flexibilité: Adaptons-nous aux deadlines de vos clients.</strong></li>
                            <li><i className="fa fa-code"></i> <strong className="strong">Compétences ciblées: Expertise en JavaScript, React, et développement web moderne.</strong></li>
                            <li><i className="fa fa-sync-alt"></i> <strong className="strong">Processus fluide: Intégration rapide dans vos workflows existants.</strong></li>
                            <li><i className="fa fa-users-cog"></i> <strong className="strong">Soutien technique: Renforcez vos capacités sur des missions spécifiques sans vous surcharger.</strong></li>
                        </ul>
                    </div>

                    <div className="agency-process fade-in">
                        <h2> Comment je peux m'intégrer dans vos projets</h2>
                        <p>
                            Mon objectif est de m'intégrer dans vos processus de production, pour que vous puissiez compter sur un appui technique.
                        </p>
                        <ol className="process-steps">
                            <li><i className="fa fa-briefcase"></i> <strong className="strong">Collaboration à la demande: Sous-traitance sur des projets spécifiques selon vos besoins</strong></li>
                            <li><i className="fa fa-tasks"></i> <strong className="strong">Adaptabilité: Intégration dans vos workflows (Git, Trello, Slack, etc.), avec un respect de vos méthodes.</strong></li>
                            <li><i className="fa fa-rocket"></i> <strong className="strong">Développement à haute valeur ajoutée: Spécialisation dans les technologies front-end, en particulier React, pour vous apporter des solutions robustes.</strong></li>
                            <li><i className="fa fa-chart-line"></i> <strong className="strong">Augmentez vos capacités: Offrez à vos clients des résultats plus rapides, sans compromettre la qualité.</strong></li>
                        </ol>
                    </div>

                    <div className="agency-contact fade-in">
                        <h2> Discutons de notre collaboration</h2>
                        <p>
                            Si vous avez besoin de renforcer vos équipes, ou de disposer d’un développeur en freelance pour des missions spécifiques, je suis disponible pour vous épauler. Discutons de la façon dont je peux contribuer à vos projets et aider votre agence à atteindre ses objectifs.
                        </p>
                        <Link to="/contact" className="agency-contact-link"><span>Contactez-moi pour collaborer</span></Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Agency;
