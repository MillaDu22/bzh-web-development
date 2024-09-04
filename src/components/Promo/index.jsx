import React from 'react';
import './promo.css';

function Promo() {
    const originalPrices = {
        simple: 960,
        basic: 1800,
        standard: 5400,
        premium: 21600
    };

    const discountRate = 0.05; // 5% discount

    const discountedPrices = {
        simple: (originalPrices.simple * (1 - discountRate)).toFixed(2),
        basic: (originalPrices.basic * (1 - discountRate)).toFixed(2),
        standard: (originalPrices.standard * (1 - discountRate)).toFixed(2),
        premium: (originalPrices.premium * (1 - discountRate)).toFixed(2)
    };

    const promoStartDate = "01/10/2024";
    const promoEndDate = "31/11/2024";

    return (
        <div className="container-promo">
            <i className="fa-solid fa-percent"></i>
            <h2>Promotion Spéciale</h2>
            <p>Profitez de 5% de réduction sur tous les packs du {promoStartDate} au {promoEndDate} !</p>
            <div className="promo-prices">
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
            </div>
        </div>
    );
}

export default Promo;
