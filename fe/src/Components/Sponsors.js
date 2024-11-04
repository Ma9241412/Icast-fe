import React from "react";
import { Card, Row, Col, Typography, Image, Grid } from "antd";
import img from "../Assets/ncgsa.png";
import img1 from "../Assets/hec.png";

import "../Styles/SponsorStyles.css";

const { Title, Text } = Typography;

const sponsors = [
  {
    name: "NCGSA",
    company: "",
    logo: img, // replace with actual logo URLs
  },
  {
    name: "HEC",
    company: "",
    logo: img1,
  },
];

const Sponsors = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const titleFontSize = screens.xl
    ? "45px"
    : screens.lg
    ? "40px"
    : screens.md
    ? "35px"
    : "28px";
  return (
    <div className="sponsors-container">
      <Title
        style={{
          fontSize: titleFontSize,
          fontWeight: "bold",
          textAlign: "center",
          color: "black",
        }}
      >
        Executive Sponsors
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {sponsors.map((sponsor, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card className="sponsor-card" hoverable>
              <div className="sponsor-logo">
                <Image
                preview={false}
                  width={200}
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                />
              </div>
              <Title level={5} className="sponsor-name">
                {sponsor.name}
              </Title>
              <Text className="sponsor-company">{sponsor.company}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Sponsors;
