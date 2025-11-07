import React from "react";
import { Card, Row, Col, Typography, Grid } from "antd";

import "../Styles/Icastforum.css";
import Image1 from "../Assets/i1.png";
import Image2 from "../Assets/i2.png";
import Image3 from "../Assets/i3.png";
import Image4 from "../Assets/i4.png";
import Image5 from "../Assets/i5.png";
import Image6 from "../Assets/i6.png";
import Image7 from "../Assets/i7.png";
import Image8 from "../Assets/i8.png";
import Image9 from "../Assets/i9.png";
import Image10 from "../Assets/i10.png";
import Image11 from "../Assets/i11.png";
import Image12 from "../Assets/i12.png";

const data = [
  {
    image: Image1,
    value: "04",
    label: "Thematic Plenary Sessions ",
  },

  {
    image: Image2,
    value: "07",
    label: "Technical Sessions",
  },
  {
    image: Image3,
    value: "01",
    label: "Astronauts’ Meet",
  },
  {
    image: Image4,
    value: "02",
    label: "Panel Discussions & Forums",
  },
  {
    image: Image5,
    value: "06",
    label: "Research Poster Presentations",
  },
  {
    image: Image6,
    value: "03",
    label: "Technology Demonstrations & Exhibits",
  },
  {
    image: Image7,
    value: "05",
    label: "Workshops & Training Sessions",
  },

  {
    image: Image8,
    value: "08",
    label: "Student & Youth Engagement Programs",
  },
  {
    image: Image9,
    value: "09",
    label: "Awards & Recognitions",
  },
  {
    image: Image10,
    value: "10",
    label: "Travel & Registration Sponsorship Opportunities",
  },

  {
    image: Image11,
    value: "11",
    label: "Networking Sessions",
  },
  {
    image: Image12,
    value: "12",
    label: "Cultural Visits & Sightseeing",
  },
];

const ICastForum = () => {
  const { Title, Text } = Typography;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
    const paragraphPadding = screens.md ? "0 50px" : "0 5px";
  const titleFontSize = screens.xl
    ? "48px"
    : screens.lg
    ? "48px"
    : screens.md
    ? "46px"
    : "36px";

  return (
    <div className="icast-container">
      <Title
        style={{
          fontSize: titleFontSize,
          fontWeight: "700",
          fontFamily: "Inter, sans-serif",
          textAlign:"left",
          padding: paragraphPadding,

        }}
      >
        Conference Highlights
      </Title>
      <Card bordered={false} className="icast-card">
        <Row gutter={[16, 16]} justify="center">
          {data.map((item, index) => (
            <Col xs={24} sm={12} md={12} lg={6} xl={6} key={index}>
              <Card bordered={false} size="small" className="icast-item-card">
                <div className="icast-item">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="icast-image"
                  />
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
