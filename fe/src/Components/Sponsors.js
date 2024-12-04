import React from "react";
import { Card, Row, Col, Typography, Image, Grid } from "antd";
import { Link } from "react-router-dom"; 
import img from "../Assets/ncgsa.png";
import img1 from "../Assets/hec.png";

import "../Styles/SponsorStyles.css";

const { Title, Text } = Typography;

const sponsors = [
  {
    name: "NATIONAL CENTER OF GIS AND SPACE APPLICATIONS, PAKISTAN",
    company: "",
    logo: img,
    link: "https://ncgsa.org.pk/", 
  },
  {
    name: "HIGHER EDUCATION COMMISSION, PAKISTAN",
    company: "",
    logo: img1,
    link: "https://www.hec.gov.pk/", 
  },
];

const Sponsors = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const titleFontSize = screens.xl
  ? "48px"
  : screens.lg
  ? "48px"
  : screens.md
  ? "46px"
  : "36px";
const titleMedium = screens.xl
  ? "22px"
  : screens.lg
  ? "22px"
  : screens.md
  ? "17px"
  : "17px";


  return (
    <div className="sponsors-container">
      <Title
        style={{
          fontSize: titleFontSize,
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Partners & Sponsors
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {sponsors.map((sponsor, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card className="sponsor-card" hoverable>
              <div className="sponsor-logo">
                <Link to={sponsor.link}> 
                  <Image
                    preview={false}
                    width={200}
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                  />
                </Link>
              </div>
              <Title  style={{
          fontSize: titleMedium,
          fontWeight: "bold",
          textAlign: "center",
          color: "black",
          fontFamily: "Inter, sans-serif",
        }}  className="sponsor-name">
                {sponsor.name}
              </Title>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Sponsors;
