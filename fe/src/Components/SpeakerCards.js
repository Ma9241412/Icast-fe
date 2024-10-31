import React from 'react';
import { Row, Col, Card, Typography, Divider } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons';
import '../Styles/Linkages.css';

const SpeakerCards = () => {
  const speakers = [
    {
      name: "Eleanor Pena",
      title: "TechPartners",
      imageUrl: "link_to_image_1", // Replace with actual image URL
      linkedin: true,
    },
    {
      name: "Esther Howard",
      title: "Binford Ltd.",
      imageUrl: "link_to_image_2", // Replace with actual image URL
      linkedin: false,
    },
    {
      name: "Esther Howard",
      title: "Binford Ltd.",
      imageUrl: "link_to_image_3", // Replace with actual image URL
      linkedin: false,
    },
    {
      name: "Marvin McKinney",
      title: "Big Kahuna Burger Ltd.",
      imageUrl: "link_to_image_4", // Replace with actual image URL
      linkedin: false,
    },
  ];

  return (
    <div className="speaker-cards-container">
      <Typography.Title
        level={2}
        style={{
          fontSize: "45px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#333",
        }}
      >
        Featured Speakers
        <Divider style={{ borderColor: "#1a8cd8", borderWidth: "2px" }} />
      </Typography.Title>

      <Row gutter={[16, 16]} justify="center">
        {speakers.map((speaker, index) => (
          <Col xs={24} sm={12} md={6} lg={6} key={index}>
            <Card
              className="custom-card"
              hoverable
              cover={
                <div style={{ position: "relative" }}>
                  <img
                    alt={speaker.name}
                    src={speaker.imageUrl}
                    style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px 8px 0 0" }}
                  />
                  {speaker.linkedin && (
                    <LinkedinOutlined
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        fontSize: "24px",
                        color: "#0077b5",
                      }}
                    />
                  )}
                </div>
              }
              bordered={false}
            >
              <Typography.Title
                level={4}
                style={{
                  fontWeight: "bold",
                  color: "#333",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {speaker.name}
              </Typography.Title>
              <Typography.Text
                style={{
                  color: "#666",
                  display: "block",
                  textAlign: "center",
                }}
              >
                {speaker.title}
              </Typography.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SpeakerCards;
