import React, { useState, useEffect } from "react";
import { Grid, Image } from "antd";
import "../Styles/SliderStyles.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import image1 from "../Assets/banner.png";
import image2 from "../Assets/b1.jpg";
import image3 from "../Assets/b2.jpg";
import image4 from "../Assets/b3.jpg";
import image5 from "../Assets/b4.jpg";
import image6 from "../Assets/b5.jpg";
import image7 from "../Assets/b6.jpg";
import DeadlineTimer from "./DeadlineTimer";

const images = [image1, image2, image3, image5, image7];

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
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  // Define width based on breakpoints
  const imageWidth = screens.xxl
    ? "100vw"
    : screens.xl
    ? "100vw"
    : screens.lg
    ? "90vw"
    : screens.md
    ? "80vw"
    : "100vw";

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update timeLeft every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Switch slide every 3 seconds

    return () => clearInterval(autoplay); // Clean up timer on component unmount
  }, [currentIndex]);

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
          width={imageWidth}
          src={images[currentIndex]}
          preview={false}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
          style={{ objectFit: "cover" }}
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
        <DeadlineTimer />
      </div>
    </div>
  );
};

export default FullWidthCarousel;
