import React, { useState, useEffect } from "react";
import { Typography, Button, Space, Grid } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../Styles/EventCarousel.css";
import Image1 from "../Assets/01.jpg";
import Image2 from "../Assets/02.jpg";
import Image3 from "../Assets/03.jpg";
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

const EventCarousel = () => {
  const screens = useBreakpoint();

  const titleFontSize = screens.xl
    ? "45px"
    : screens.lg
    ? "40px"
    : screens.md
    ? "35px"
    : "28px";

  const eventImages = [
    { src: Image1, alt: "Event 1" },
    { src: Image2, alt: "Event 2" },
    { src: Image3, alt: "Event 3" },
    { src: Image1, alt: "Event 4" },
    { src: Image2, alt: "Event 5" },
    { src: Image3, alt: "Event 6" },
    { src: Image1, alt: "Event 7" },
  ];

  const eventNames = [
    "Drive Global Collaboration",
    "Advance Research and Innovation",
    "Promote Space Technology for Sustainable Development",
    "Engage and Inspire the Next Generation",
    "Facilitate Dialogue on Space Policy and Law",
    "Strengthen Skills through Hands-On Training",
    "Highlight SUPARCO and IST's Leadership in Space Science",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);

  useEffect(() => {
    const updateVisibleImages = () => {
      setVisibleImages(window.innerWidth <= 768 ? 1 : 3);
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);

    return () => {
      window.removeEventListener("resize", updateVisibleImages);
    };
  }, []);

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
      <Space direction="vertical">
        <Typography.Title
          style={{
            fontSize: titleFontSize,
            color: "black",
            letterSpacing: "1px",
            fontWeight: "bold",
          }}
        >
          Latest Updates
        </Typography.Title>
        <Space>
          <Button
            icon={<LeftOutlined style={{backgroundColor:"#1E2634",color:"white",padding:"10px",borderRadius:"20px"}} />}
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="nav-button left-button"
          />
          <div className="scrolling-wrapper">
            {eventImages
              .slice(currentIndex, currentIndex + visibleImages)
              .map((image, index) => {
                const globalIndex = currentIndex + index;
                return (
                  <div key={globalIndex} className="carousel-slide">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="carousel-image"
                    />
                 <Link to={'/aims'}>
                 <Button
                      level={5}
                      style={{ fontWeight: "bold" }}
                      className="carousel-caption"
                    >
                      {eventNames[globalIndex]}
                    </Button>
                 </Link>
                  </div>
                );
              })}
          </div>
          <Button
            icon={<RightOutlined style={{backgroundColor:"#1E2634",color:"white",padding:"10px",borderRadius:"20px"}} />}
            onClick={handleNext}
            disabled={currentIndex >= eventImages.length - visibleImages}
            className="nav-button right-button"
          />
        </Space>
      </Space>
    </div>
  );
};

export default EventCarousel;
