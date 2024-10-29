import React, { useState, useEffect } from 'react';
import Photography from '../../assets/videos/Photography.mp4';
import Astro from '../../assets/videos/Astro.mp4';
import Book from '../../assets/videos/Book.mp4';
import Food from '../../assets/videos/Food.mp4';
import Bike from '../../assets/videos/Bike.mp4';
import Writer from '../../assets/videos/Writer.mp4';
import Hood from '../../assets/videos/Hood.mp4';
import Green from '../../assets/videos/Green.mp4';
import './sliderlogo.css';

const SliderLogo = () => {
    const videos = [Photography, Astro, Book, Food, Bike, Writer, Hood, Green];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % videos.length);
        }, 5000); // Change every 5 seconds //

        return () => clearInterval(interval); // Clear interval on unmount //
    }, [videos.length]);

    return (
        <div className="slider-logo-container">
            <div className="slider-track">
                <video 
                    src={videos[currentIndex]} 
                    autoPlay 
                    muted 
                    loop 
                    className="slider-video"
                />
            </div>
        </div>
    );
};

export default SliderLogo;
