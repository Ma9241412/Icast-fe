import React from 'react';
import { Button, Row, Col, Typography, Divider } from 'antd';
import '../Styles/Linkages.css'; 

const { Title } = Typography;

const ConferenceRegistration = () => {
  return (
    <div className="conference-registration-container">
      <Title style={{ fontSize: '48px', fontWeight: 'bold', }} className="title">
        Conference Registration
      </Title>
      <Divider className="ncgsa-divider" />
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button style={{padding:"30px"}} className="registration-button">ICASE Visitor Registration ➤</Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button style={{padding:"30px"}} className="registration-button">ICASE Exhibitor Registration ➤</Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button style={{padding:"30px"}} className="registration-button">ICASE Author Registration ➤</Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button style={{padding:"30px"}} className="registration-button">ICASE Workshops ➤</Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button style={{padding:"30px"}} className="registration-button">Research Fund Poster Display ➤</Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button style={{padding:"30px"}} className="registration-button">Research Poster Display ➤</Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button  style={{padding:"30px"}} className="registration-button">Meet Scientist & STEM Forum ➤</Button>
        </Col>
      </Row>
    </div>
  );
};

export default ConferenceRegistration;
