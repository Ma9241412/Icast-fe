import React, { useEffect, useState, useRef } from "react";
import { Typography, Button, Space, Grid } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../Styles/EventCarousel.css";

import Image1 from "../Assets/m1.jpg";
import Image2 from "../Assets/e3.jpg";
import Image3 from "../Assets/m3.jpg";
import Image4 from "../Assets/m5.jpg";
import Image5 from "../Assets4/5.jpg";

const { useBreakpoint } = Grid;

const EventCarousel = () => {
  const screens = useBreakpoint();
  const visibleImages = 3;

  const allImages = [
    { src: Image1, alt: "Why Attend ICAST 2025?", link: "/icast-2025" },
    { src: Image2, alt: "Call For Content", link: "/content" },
    { src: Image3, alt: "Grants & Awards", link: "/grants" },
    { src: Image4, alt: "Sponsor & Exhibitor", link: "https://icast.pk/PDF/ICAST%20Sponsor%20%26%20Exhibitor%20Prospectus%20-%20A4.pdf" },
    { src: Image5, alt: "ICAST Brochure", link: "https://icast.pk/PDF/ICAST%20Brochure%20(Updated%20March%2013%2C%202025)(1).pdf" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIndexes, setSlideIndexes] = useState([]);
  const autoplayIntervalRef = useRef(null);

  const updateSlides = (index) => {
    setSlideIndexes([
      (index + 0) % allImages.length,
      (index + 1) % allImages.length,
      (index + 2) % allImages.length,
    ]);
  };

  useEffect(() => {
    updateSlides(currentIndex);
  }, [currentIndex]);

  const startAutoplay = () => {
    autoplayIntervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % allImages.length);
    }, 3000);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayIntervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const handleNext = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev + 2) % allImages.length);
    startAutoplay();
  };

  const handlePrev = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev - 2 + allImages.length) % allImages.length);
    startAutoplay();
  };

  const titleFontSize = screens.xl
    ? "48px"
    : screens.lg
    ? "48px"
    : screens.md
    ? "46px"
    : "36px";

  return (
    <div className="event-carousel-container">
      <Typography.Title
        style={{
          fontSize: titleFontSize,
          color: "black",
          fontWeight: "bold",
          fontFamily: "Inter",
        }}
      >
        Conference Updates
      </Typography.Title>

      <button className="nav-button left-button" onClick={handlePrev}>
        <LeftOutlined />
      </button>

    <div className="carousel-viewport">
  <div className="carousel-layered">
    {slideIndexes.map((index, i) => {
      const image = allImages[index];
      const positionClass =
        i === 0 ? "slide-left" : i === 1 ? "slide-center" : "slide-right";

      return (
        <div
          className={`carousel-slide-layered ${positionClass}`}
          key={i}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <img src={image.src} alt={image.alt} className="carousel-image" />
          <Link to={image.link}>
            <div style={{ marginTop: "20px" }}>
              <Space>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "#186814",
                    borderColor: "#186814",
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "white",
                    height: "40px",
                    width: "200px",
                  }}
                >
                  {image.alt}
                </Button>
              </Space>
            </div>
          </Link>
        </div>
      );
    })}
  </div>
</div>

      <button className="nav-button right-button" onClick={handleNext}>
        <RightOutlined />
      </button>
    </div>
  );
};

export default EventCarousel;
