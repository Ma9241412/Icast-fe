import React from 'react';
import { Row, Col, Button, Card, Typography } from 'antd';
import '../Styles/Linkages.css'; 

const SpeakerCards = () => {
  const data = [
    { title: "National Speakers", link: "#" },
    { title: "International Speakers", link: "#" },
    { title: "Conference Book", link: "#" },
    { title: "Abstract Book", link: "#" },
  ];

  return (
    <div className="speaker-cards-container">
      <Row gutter={[16, 16]} justify="center">
        {data.map((item, index) => (
          <Col xs={24} sm={12} md={10} lg={8} key={index}>
            <Card className="custom-card" bordered={false}>
              <Typography.Title style={{fontSize:"45px",fontWeight:"bold"}}>{item.title}</Typography.Title>

              <Button type="primary" className="view-button">
                view
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SpeakerCards;
