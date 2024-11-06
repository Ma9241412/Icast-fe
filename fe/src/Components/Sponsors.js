import React from "react";
import { Card, Row, Col, Typography, Image, Grid } from "antd";
import { Link } from "react-router-dom"; // For React Router. Use `next/link` if you're using Next.js.
import img from "../Assets/ncgsa.png";
import img1 from "../Assets/hec.png";

import "../Styles/SponsorStyles.css";

const { Title, Text } = Typography;

const sponsors = [
  {
    name: "NATIONAL CENTER OF GIS AND SPACE APPLICATIONS, PAKISTAN",
    company: "",
    logo: img,
    link: "https://ncgsa.org.pk/", // Replace with the actual URL you want
  },
  {
    name: "HIGHER EDUCATION COMMISSION, PAKISTAN",
    company: "",
    logo: img1,
    link: "https://www.hec.gov.pk/", // Replace with the actual URL you want
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
                <Link to={sponsor.link}> {/* Wrap Image with Link */}
                  <Image
                    preview={false}
                    width={200}
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                  />
                </Link>
              </div>
              <Title className="sponsor-name">
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
