import React from 'react';
import { Carousel, Row, Col, Typography, Button, Card } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../Styles/ICastEvents.css';

const { Title, Text } = Typography;

const images = [
  // Replace with your actual images
  'https://via.placeholder.com/300x200', // Image 1 placeholder
  'https://via.placeholder.com/300x200', // Image 2 placeholder
  'https://via.placeholder.com/300x200', // Image 3 placeholder
];

const ICastEvents = () => {
  return (
    <div className="icast-events-container">
      <Row gutter={16} justify="center" align="middle">
        <Col xs={24} md={12}>
          <Card className="icast-events-card" bordered={false}>
            <Title level={4}>ICAST Forum By the Numbers</Title>
            <div className="placeholder-box" />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Title level={4}>See the Best Photos from the 2024 Forum</Title>
          <Carousel
            arrows
            nextArrow={<Button icon={<RightOutlined />} />}
            prevArrow={<Button icon={<LeftOutlined />} />}
            className="icast-carousel"
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default ICastEvents;
