import React, { useState, useEffect } from 'react';
import { Carousel, Image } from 'antd';
import '../Styles/SliderStyles.css';

// Import images from assets folder
import image1 from '../Assets/banner.png';
import image2 from '../Assets/01.jpg';
import image3 from '../Assets/02.jpg';
import image4 from '../Assets/03.jpg';

const images = [image1, image2, image3, image4];

const calculateTimeLeft = () => {
  const eventDate = new Date('November 18, 2025 00:00:00').getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;

  return difference > 0
    ? {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    : { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const FullWidthCarousel = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      <Carousel dots={false} arrows={false} autoplay>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <Image 
              src={image} 
              preview={false}
              alt={`Slide ${index + 1}`} 
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>

      {/* Countdown Timer Overlay */}
      <div className="timer-overlay">
        <div className="timer-box">
          <div className="timer-number">{timeLeft.days}</div>
          <span>DAYS</span>
        </div>
        <div className="timer-box">
          <div className="timer-number">{timeLeft.hours}</div>
          <span>HOURS</span>
        </div>
        <div className="timer-box">
          <div className="timer-number">{timeLeft.minutes}</div>
          <span>MINUTES</span>
        </div>
      
      </div>
    </div>
  );
};

export default FullWidthCarousel;
