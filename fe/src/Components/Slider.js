import React, { useState, useEffect } from "react";
import { Image } from "antd";
import "../Styles/SliderStyles.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

// Import images from assets folder
import image1 from "../Assets/banner.png";
import image2 from "../Assets/01.jpg";
import image3 from "../Assets/02.jpg";
import image4 from "../Assets/03.jpg";

const images = [image1, image2, image3, image4];

const calculateTimeLeft = () => {
  const eventDate = new Date("November 18, 2025 00:00:00").getTime();
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <Image
          src={images[currentIndex]}
          preview={false}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>

      {/* Left and Right Navigation Icons */}
      <button className="nav-button left" onClick={handlePrevious}>
        <LeftOutlined />
      </button>
      <button className="nav-button right" onClick={handleNext}>
        <RightOutlined />
      </button>

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
