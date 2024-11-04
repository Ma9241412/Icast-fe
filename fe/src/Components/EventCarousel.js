import React, { useState, useEffect } from 'react';
import { Typography, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../Styles/EventCarousel.css';
import Image1 from '../Assets/01.jpg';
import Image2 from '../Assets/02.jpg';
import Image3 from '../Assets/03.jpg';

const { Title } = Typography;

const EventCarousel = () => {
  const eventImages = [
    { src: Image1, alt: 'Event 1' },
    { src: Image2, alt: 'Event 2' },
    { src: Image3, alt: 'Event 3' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3); 

  useEffect(() => {
    const updateVisibleImages = () => {
      setVisibleImages(window.innerWidth <= 768 ? 1 : 3);
    };

    updateVisibleImages();
    window.addEventListener('resize', updateVisibleImages);

    return () => {
      window.removeEventListener('resize', updateVisibleImages);
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
      <Button
        icon={<LeftOutlined />}
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="nav-button left-button"
      />
      <div className="scrolling-wrapper">
        {eventImages.slice(currentIndex, currentIndex + visibleImages).map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image.src} alt={image.alt} className="carousel-image" />
            <Title level={5} style={{textDecoration:"underline"}} className="carousel-caption">
              WHY YOU SHOULD ATTEND?
            </Title>
          </div>
        ))}
      </div>
      <Button
        icon={<RightOutlined />}
        onClick={handleNext}
        disabled={currentIndex >= eventImages.length - visibleImages}
        className="nav-button right-button"
      />
    </div>
  );
};

export default EventCarousel;
