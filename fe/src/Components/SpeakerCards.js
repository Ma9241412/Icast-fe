import React from 'react';
import { Row, Col, Button, Card, Typography, Divider } from 'antd';
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
      <Typography.Title
        level={2}
        style={{
          fontSize: "45px",
          fontWeight: "bold",
          textAlign: "left",
          color: "#ffffff",
        }}
      >
        Featured Speakers
        <Divider
                className="ncgsa-divider"
                style={{ borderColor: "#1a8cd8", borderWidth: "2px" }}
              />
      </Typography.Title>

      <Row gutter={[16, 16]} justify="space-around">
        {data.map((item, index) => (
          <Col xs={24} sm={12} md={6} lg={6} key={index}>
            <Card className="custom-card" bordered={false}>
              <Typography.Title style={{ fontSize: "25px", fontWeight: "bold", color: "white" }}>
                {item.title}
              </Typography.Title>
              <Button
                type="primary"
                style={{
                  background: "linear-gradient(180deg, #0072ff 0%, #00c6ff 100%)",
                  color: "white",
                  borderRadius: "4px",
                  marginLeft: "15px",
                  textDecoration: "none",
                  padding: "20px 40px",
                  border: "none",
                }}
              >
                View
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SpeakerCards;
