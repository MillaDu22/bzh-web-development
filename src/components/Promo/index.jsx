import React from 'react';
import './promo.css';

function Promo() {
    const originalPrices = {
        basic: 1500,
        standard: 4500,
        premium: 18000
    };

    const discountRate = 0.05; // 5% discount

    const discountedPrices = {
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
                    <h3>Pack Basic</h3>
                    <p className="original-price">Prix original : {originalPrices.basic}€-TTC</p>
                    <p className="promotionnel-price">Prix promotionnel : {discountedPrices.basic}€-TTC</p>
                </div>
                <div className="promo-pack">
                    <h3>Pack Standard</h3>
                    <p className="original-price">Prix original : {originalPrices.standard}€-TTC</p>
                    <p className="promotionnel-price">Prix promotionnel : {discountedPrices.standard}€-TTC</p>
                </div>
                <div className="promo-pack">
                    <h3>Pack Premium</h3>
                    <p className="original-price">Prix original : {originalPrices.premium}€-TTC</p>
                    <p className="promotionnel-price">Prix promotionnel : {discountedPrices.premium}€-TTC</p>
                </div>
            </div>
        </div>
    );
}

export default Promo;
