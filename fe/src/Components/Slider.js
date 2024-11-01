import React from 'react';
import { Carousel, Image } from 'antd';
import '../Styles/SliderStyles.css'; // or 'antd/dist/antd.css' if using antd@4

// Import images from assets folder
import image1 from '../Assets/banner.png';
import image2 from '../Assets/01.jpg';
import image3 from '../Assets/02.jpg';
import image4 from '../Assets/03.jpg';

const images = [image1, image2, image3, image4];

const FullWidthCarousel = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden', margin: 0, padding: 0 }}>
      <Carousel autoplay>
        {images.map((image, index) => (
          <div key={index}>
            <Image 
              src={image} 
              preview={false}
              alt={`Slide ${index + 1}`} 
              style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', display: 'block' }} 
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FullWidthCarousel;