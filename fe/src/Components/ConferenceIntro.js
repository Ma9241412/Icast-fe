import React from 'react';
import { Row, Col, Carousel, Typography, Button } from 'antd';
import m1 from "../Assets/m1.jpg"
import m2 from "../Assets/m2.jpg"
import m3 from "../Assets/m3.jpg"

const { Title, Paragraph, Link } = Typography;

const ConferenceIntro = () => {
  return (
    <Row gutter={[16, 16]} style={{ backgroundColor: '#272B3A', padding: '40px', borderRadius: '10px' }}>
      <Col xs={24} md={12}>
        <div style={{ color: 'white' }}>
          <Title level={3} style={{ color: 'white' }}>Introduction</Title>
          <Paragraph>
            International Conference on Applications of Space Science and Technology (ICAST) is a
            regular biennial event to provide an <strong>International forum</strong> in which scientists,
            researchers, engineers, academicians, Industry professionals, entrepreneurs, and students from all over the world, get a chance
            to interact and discuss the latest themes and trends related to Aerospace Science &
            Engineering. It provides a platform to share experiences, foster collaborations across
            industry and academia, and to evaluate emerging technologies and developments across the
            globe in the fields of <strong>space science, technology, and application.</strong>
          </Paragraph>
          <Link href="#" style={{ color: '#ff9f43' }}>Read more</Link>
        </div>
      </Col>
      <Col xs={24} md={12}>
        <Carousel arrows>
          <div>
            <img src={m1} alt="Conference Image 1" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <div>
            <img src={m2} alt="Conference Image 2" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <div>
            <img src={m3} alt="Conference Image 3" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          {/* Add more images as needed */}
        </Carousel>
      </Col>
    </Row>
  );
};

export default ConferenceIntro;
