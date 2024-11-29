import React, { useState } from "react";
import { Typography, Button, Space, Grid } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../Styles/EventCarousel.css";
import Image1 from "../Assets/m1.jpg";
import Image2 from "../Assets/e3.jpg";
import Image3 from "../Assets/m3.jpg";

import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

const EventCarousel = () => {
  const screens = useBreakpoint();

  const titleFontSize = screens.xl
    ? "48px"
    : screens.lg
    ? "48px"
    : screens.md
    ? "46px"
    : "36px";

  const visibleImages = screens.xs ? 1 : 3;

  const [currentIndex, setCurrentIndex] = useState(0);

  const eventImages = [
    { src: Image1, alt: "Why Attend ICAST 2025?", link: "/icast-2025" },
    { src: Image2, alt: "Call For Content", link: "/content" },
    { src: Image3, alt: "Grants & Awards", link: "/grants-awards" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, eventImages.length - visibleImages)
    );
  };

  return (
    <div className="event-carousel-container">
      <Typography.Title
        style={{
          fontSize: titleFontSize,
          color: "black",
          letterSpacing: "1px",
          fontWeight: "bold",
          fontFamily:"Inter"
        }}
      >
        Conference Updates
      </Typography.Title>
      <div style={{ position: "relative", width: "100%" }}>
        {/* Left Arrow Button */}
        <button
          className="nav-button left-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <LeftOutlined />
        </button>

        {/* Carousel Content */}
        <div className="scrolling-wrapper">
          {eventImages
            .slice(currentIndex, currentIndex + visibleImages)
            .map((image, index) => (
              <div key={index} className="carousel-slide">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image"
                />
                <Link to={image.link}>
                  <div style={{ marginTop: "20px" }}>
                    <Space>
                      <Button
                        type="primary"
                        href=""
                        style={{
                          backgroundColor: "#186814",
                          borderColor: "#186814",
                          fontSize: "15px",
                          fontWeight: "600",
                          color: "white",
                          height: "40px", // Fixed height
                          width: "200px", // Fixed width
                          textAlign: "center",
                        }}
                      >
                        {image.alt}
                      </Button>
                    </Space>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        {/* Right Arrow Button */}
        <button
          className="nav-button right-button"
          onClick={handleNext}
          disabled={currentIndex >= eventImages.length - visibleImages}
        >
          <RightOutlined />
        </button>
      </div>
    </div>
  );
};

export default EventCarousel;
