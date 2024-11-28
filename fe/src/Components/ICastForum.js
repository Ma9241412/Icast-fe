import React from 'react';
import { Card, Row, Col, Typography, Grid } from 'antd';

import '../Styles/Icastforum.css';
import img1 from '../Assets/i1.png';
import img2 from '../Assets/i2.png';
import img3 from '../Assets/i3.png';
import Image4 from '../Assets/i4.png';
import Image5 from '../Assets/i5.png';
import image6 from '../Assets/i6.png';
import Image7 from '../Assets/i7.png';
import Image8 from '../Assets/i8.png';
import Image9 from '../Assets/i9.png';
import Image10 from '../Assets/i10.png';
import Image11 from '../Assets/i11.png';
import Image12 from '../Assets/i12.png';

const data = [
  {
    image: img1,
    value: '18',
    label: 'Awards & Recognitions',
  },
  {
    image: img2,
    value: '03',
    label: 'Cultural Visits & Tours',
  },
  {
    image: img3,
    value: '03',
    label: 'Distinguished Keynote Speakers ',
  },
  {
    image: Image4,
    value: '03',
    label: 'Exclusive Students Programs',
  },
  {
    image: Image5,
    value: '06',
    label: 'Exhibitions',
  },
  {
    image: image6,
    value: '05',
    label: 'Interactive Networking Events',
  },
  {
    image:Image7,
    value: '03',
    label: 'Invited Speakers',
  },
  {
    image: Image8,
    value: '02',
    label: 'Live Demonstration',
  },
  {
    image: Image9,
    value: '02',
    label: 'Public Oppurtunites',
  },  {
    image: Image10,
    value: '02',
    label: 'Technical Presnetations',
  },  {
    image: Image11,
    value: '02',
    label: 'Travel & Registration Fee Sponsorships',
  },  {
    image: Image12,
    value: '02',
    label: 'Workshops & Trainings',
  },
];

const ICastForum = () => {
  const { Title, Text } = Typography;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const titleFontSize = screens.xl ? "45px" : screens.lg ? "40px" : screens.md ? "35px" : "28px";

  return (
    <div className="icast-container">
      <Title style={{ fontSize: titleFontSize, fontWeight: "bold" }}>Conference Highlights</Title>
      <Card bordered={false} className="icast-card">
        <Row gutter={[16, 16]} justify="center">
          {data.map((item, index) => (
            <Col xs={24} sm={12} md={12} lg={6} xl={6} key={index}>
              <Card bordered={false} size='small' className="icast-item-card">
              <div className="icast-item">
      <img src={item.image} alt={item.label} className="icast-image" />
      {/* <Title level={3} className="icast-value">{item.value}</Title> */}
      <Text className="icast-label">{item.label}</Text>
    </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default ICastForum;