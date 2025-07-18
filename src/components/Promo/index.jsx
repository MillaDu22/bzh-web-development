import React, {useEffect} from 'react';
import './promo.css';

function Promo() {
    /*const originalPrices = {
        simple: 800,
        basic: 1500,
        standard: 4500,
        premium: 18000
    };

    const discountRate = 0.05; // 5% discount

    const discountedPrices = {
        simple: (originalPrices.simple * (1 - discountRate)).toFixed(2),
        basic: (originalPrices.basic * (1 - discountRate)).toFixed(2),
        standard: (originalPrices.standard * (1 - discountRate)).toFixed(2),
        premium: (originalPrices.premium * (1 - discountRate)).toFixed(2)
    };*/

    const promoStartDate = "01/07/2025";
    const promoEndDate = "31/07/2025";

    useEffect(() => {
        const section = document.querySelector('.container-promo');

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
        <div className="container-promo">
            <div className ="box-promo1">
                <i className="fa-solid fa-percent"></i>
                <h2>Promotion Spéciale</h2>
                <p>Profitez de 5% de réduction sur tous les packs du {promoStartDate} au {promoEndDate} !</p>
            </div>
            <div className ="box-promo2">
                <i className="fa-solid fa-percent"></i>
                <h2>Promotion Permanente</h2>
                <h3>Offre spéciale jeunes entreprises:</h3>
                <p>Profitez de 10% de réduction sur tous les packs. 
                    Offrez à votre entreprise une vitrine en ligne 
                    et attirez vos premiers clients dès aujourd'hui. 
                    Une opportunité idéale pour renforcer votre présence digitale à moindre coût !
                </p>
            </div>
            {/*<div className="promo-prices">
                <div className="promo-pack">
                    <h3>Pack Simple</h3>
                    <p className="original-price">Prix original : A partir de {originalPrices.simple}€</p>
                    <p className="promotionnel-price">Prix promotionnel : A partir de {discountedPrices.simple}€</p>
                </div>
                <div className="promo-pack">
                    <h3>Pack Basic</h3>
                    <p className="original-price">Prix original : A partir de {originalPrices.basic}€</p>
                    <p className="promotionnel-price">Prix promotionnel : A partir de {discountedPrices.basic}€</p>
                </div>
                <div className="promo-pack">
                    <h3>Pack Standard</h3>
                    <p className="original-price">Prix original : A partir de {originalPrices.standard}€</p>
                    <p className="promotionnel-price">Prix promotionnel : A partir de {discountedPrices.standard}€</p>
                </div>
                <div className="promo-pack">
                    <h3>Pack Premium</h3>
                    <p className="original-price">Prix original : A partir de {originalPrices.premium}€</p>
                    <p className="promotionnel-price">Prix promotionnel : A partir de {discountedPrices.premium}€</p>
                </div>
            </div>*/}
        </div>
    );
}

export default Promo;