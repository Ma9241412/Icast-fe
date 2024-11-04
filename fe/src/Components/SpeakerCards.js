import React from "react";
import { Row, Col, Card, Typography, Divider, Grid, Image } from "antd";
import "../Styles/Linkages.css";

// Import images from the assets folder
import image1 from "../Assets/pic1.png";
import image2 from "../Assets/pic2.png";
import image3 from "../Assets/pic3.png";
import image4 from "../Assets/pic2.png";

const SpeakerCards = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const titleFontSize = screens.xl
    ? "45px"
    : screens.lg
    ? "40px"
    : screens.md
    ? "35px"
    : "28px";
    const paragraphFontSize = screens.xl
    ? "19px"
    : screens.lg
    ? "18px"
    : screens.md
    ? "16px"
    : "14px";
  const speakers = [
    {
      name: "Eleanor Pena",
      title: "TechPartners",
      imageUrl: '/images/pic1.png',
      linkedin: true,
    },
    {
      name: "Esther Howard",
      title: "Binford Ltd.",
      imageUrl: '/images/pic2.png',
      linkedin: false,
    },
    {
      name: "Esther Howard",
      title: "Binford Ltd.",
      imageUrl: '/images/pic3.png',
      linkedin: false,
    },
    {
      name: "Marvin McKinney",
      title: "Big Kahuna Burger Ltd.",
      imageUrl: '/images/pic4.png',
      linkedin: false,
    },
  ];

  return (
    <div className="speaker-cards-container">
      <Typography.Title
        style={{
          fontSize:titleFontSize,
          fontWeight: "bold",
          textAlign: "center",
          color: "#fff",
        }}
      >
        Featured Speakers
      </Typography.Title>

      <Row gutter={[16, 16]} justify="center">
        {speakers.map((speaker, index) => (
          <Col xs={24} sm={12} md={6} lg={6} key={index}>
            <Card
            size="small"

              className="custom-card"
              hoverable
              cover={
                <div style={{ position: "relative" }}>
                  <img
                    alt={speaker.name}
                    src={speaker.imageUrl}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                </div>
              }
              bordered={false}
            >
              <Typography.Title
                style={{
                  fontWeight: "bold",
                  color: "#333",
                  margin: 0,
                  textAlign: "center",
                  fontSize:paragraphFontSize
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
