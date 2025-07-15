import React from "react";
import { Card, Row, Col, Typography, Image, Grid } from "antd";
import { Link } from "react-router-dom"; 
import img from "../Assets/BARIA.jpg";
import img1 from "../Assets/HEC.jpg";
import img2 from "../Assets/IEEE.jpg";
import img3 from "../Assets/ISNET.jpg";
import img4 from "../Assets/NCGSA.jpg";
import img5 from "../Assets/NPU.jpg";
import img6 from "../Assets/PSF.jpg";
import img7 from "../Assets/SGAC.jpg";

import "../Styles/SponsorStyles.css";

const { Title, Text } = Typography;

const sponsors = [
  {
    name: "NATIONAL CENTER OF GIS AND SPACE APPLICATIONS, PAKISTAN",
    company: "",
    logo: img4,
    link: "https://ncgsa.org.pk/", 
  },
  {
    name: "HIGHER EDUCATION COMMISSION, PAKISTAN",
    company: "",
    logo: img1,
    link: "https://www.hec.gov.pk/", 
  },
  {
    name: "THE INSTITUTION OF ELECTRICAL AND ELECTRONICS ENGINEERS",
    company: "",
    logo: img2,
    link: "https://www.ieee.org/", 
  },
  {
    name: "INTER ISLAMIC NETWORK ON SPACE SCIENCES & TECHNOLOGY",
    company: "",
    logo: img3,
    link: "https://isnet.org.pk", 
  },  
  {
    name: "NORTHWESTREN POLYTECHNIC UNIVERSITY",
    company: "",
    logo: img5,
    link: "https://en.nwpu.edu.cn/", 
  },  
   {
    name: "PAKISTAN SCIENCE FOUNDATION",
    company: "",
    logo: img6,
    link: "https://psf.gov.pk/", 
  },
   {
    name: "SPACE GENERATION ADVISORY COUNCIL",
    company: "",
    logo: img7,
    link: "https://spacegeneration.org/", 
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
      <Card className="sponsor-card" hoverable style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60%',borderRadius:"20px",paddingBlock:"40px" }}>
        <Link to={sponsor.link}>
          <Image
            preview={false}
            width={180}
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            style={{ marginBottom: '16px' }}
          />
        </Link>
     
      </Card>
      <Title
  style={{
    fontSize: titleMedium,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontFamily: "Inter, sans-serif",
    margin: '0',
    paddingTop: "10px"
  }}
  className="sponsor-name"
>
  {sponsor.name
    .split(" ")
    .map((word, index) => 
      (index + 1) % 3 === 0
        ? word + "\n"
        : word + " "
    )
    .join("")
    .split("\n")
    .map((line, idx) => (
      <div key={idx}>{line.trim()}</div>
    ))}
</Title>

    </Col>
  ))}
</Row>
    </div>
  );
};

export default Sponsors;
