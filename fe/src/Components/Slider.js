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
    <div style={{ width: '100%', maxWidth: '100vw', overflow: 'hidden', }}>
      <Carousel autoplay>
        {images.map((image, index) => (
          <div key={index}>
            <Image 
            height={650}
            preview={false}

              src={image} 
              alt={`Slide ${index + 1}`} 
              style={{ width: '100%', objectFit: 'contain' }} 
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FullWidthCarousel;
