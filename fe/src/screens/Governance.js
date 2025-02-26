import React from "react";
import { Card, Col, Grid, Row, Typography, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import img1 from "../Assets2/1.jpeg";
import img2 from "../Assets2/2.jpeg";
import img3 from "../Assets2/3.jpg";
import img4 from "../Assets2/4.jpg";
import img5 from "../Assets2/5.png";
import img6 from "../Assets2/6.jpg";
import img7 from "../Assets2/7.jpeg";
import img9 from "../Assets2/9.jpg";
import img10 from "../Assets2/10.jpg";
import img11 from "../Assets2/11.jpeg";
import img12 from "../Assets2/12.jpg";
import img13 from "../Assets2/13.jpg";
import SecretariatPage from "../Components/Secretariat";
import { Link } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const data = [
  {
    role: "ICAST President",
    name: "Mr. Muhammad Yusuf Khan",
    title: "Chairman SUPARCO",
    imgSrc: img1,
  },
  {
    role: "Conference Patron-in-Chief",
    name: "Mr. Zia Ahmed",
    title: "Vice Chancellor IST",
    imgSrc: img2,
  },
  {
    role: "Conference Chair",
    name: "Mr. Aftab Ahmad Khan Lughmani",
    title: "Secretary SUPARCO",
    imgSrc: img3,
  },
  {
    role: "Conference Co-Chair / Chair of Coordination Committee",
    name: "Dr. Abdul Waheed",
    title: "Registrar IST",
    imgSrc: img4,
  },
  {
    role: "Conference Secretary ",
    name: "Prof. Dr. Najam Abbas Naqvi",

    title: "Chairman NCGSA",
    imgSrc: img5,
  },
  {
    role: "Chair of Technical Program Committee",
    name: "Prof. Dr. Muhammad Abdul Rehman Khan",
    title: "Dean IST",
    imgSrc: img6,
  },
  {
    role: "Strategic Liaison",
    name: "Mr. Muhammad Arham Khan",
    title: "DH IA SUPARCO",
    imgSrc: img7,
  },
  {
    role: "Chair of Administration Committee (Security, Protocol & Entertainment)",
    name: "Mr. Farooq Ahmed",
    title: "Director Admin IST",
    imgSrc: null, 
  },
  {
    role: "Chair of Finance Committee",
    name: "Mr. Khadim Hussain",
    title: "CFO IST",
    imgSrc: img9,
  },
  {
    role: "Chair of Exhibition & Industrial Linkages Committee",
    name: "Dr. Ibrahim Qazi",
    title: "Director ORIC",
    imgSrc: img10,
  },
  {
    role: "Chair of IT & Media Management Committee",
    name: "Dr. Ch. Bilal Ahmed Khan",
    title: "Director IT",
    imgSrc: img11,
  },
  {
    role: "Chair of Conference Facilities",
    name: "Mr. Rehan Rasheed",
    title: "Director Civil Works",
    imgSrc: img12, 
  },
  {
    role: "Chair of Evaluation & Publication Committee",
    name: "Dr. Salma Zaineb Farooq",
    title: "Senior Faculty Member",
    imgSrc: img13,
  },
  {
    role: "Technical Sponsor Chair",
    name: "",
    title: "Chairman IEEE Islamabad Section",
    imgSrc: null, 
  },
];

const GovernancePage = () => {
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
const paragraphFontSize = screens.xl
  ? "16px"
  : screens.lg
  ? "16px"
  : screens.md
  ? "15px"
  : "15px";

  return (
    <>
      <IcastHeader />
      <div style={{ backgroundColor: "white" }}>
        <div style={{ backgroundColor: "white" }}>
          <Title
            style={{
              backgroundColor: "#EEF0F2",
              textAlign: "justify",
              marginBottom: "30px",
              padding: "20px 40px",
              fontFamily: "Inter, sans-serif",
              fontWeight:"700",
              fontSize: titleFontSize,
            }}
          >
            Governance Structure
          </Title>
          <Paragraph
            style={{
              textAlign: "start",
              marginBottom: "30px",
              fontSize: paragraphFontSize,
              color: "#055EDD",
              padding: "0px 40px",
              fontFamily: "Inter, sans-serif",
              fontWeight:"600",
            }}
          >
            ICAST / <Link style={{color:"#055EDD"}} to={"/"}>About ICAST</Link> / ICAST Governance
          </Paragraph>
        </div>

        <div style={{ padding: "30px 30px", backgroundColor: "#EFF0F2" }}>
          <Paragraph
            style={{
              textAlign: "justify",

              marginBottom: "30px",
              fontSize: paragraphFontSize,
              color: "black",
              fontFamily: "Inter, sans-serif",
                  fontWeight:"500",
            }}
          >
            The success of{" "}
            <strong style={{ color: "black", fontWeight: "bold" }}>
              ICAST 2025
            </strong>{" "}
            is built upon a robust and well-defined governance structure,
            ensuring seamless coordination, efficient management, and
            exceptional quality across all aspects of the conference. The
            governance comprises two principal bodies, supported by specialized
            committees dedicated to specific conference functions.
          </Paragraph>
          <Title
            style={{
              textAlign: "start",
              fontSize: titleMedium,
              fontFamily: "Inter, sans-serif",
              fontWeight:"700",
              color: "black",
              margin: 0,
            }}
          >
            Conference Steering Committee
          </Title>
          <br />
          <Paragraph
            style={{
              textAlign: "justify",

              marginBottom: "30px",
              fontSize: paragraphFontSize,
              color: "black",
              fontFamily: "Inter, sans-serif",
                  fontWeight:"500",
            }}
          >
            The Conference Steering Committee serves as the apex body
            overseeing the strategic direction, planning, and execution of ICAST
            2025.
          </Paragraph>
          <Row gutter={[32, 32]}>
            {data.map((person, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <Card
                  hoverable
                  style={{
                    borderRadius: "15px",
                    textAlign: "center",
                    border: "3px solid #186814",
                    backgroundColor: "#1E2634",
                    color: "#FFFFFF",
                    height: "100%",
                  }}
                >
                  {person.imgSrc ? (
                    <div
                      style={{
                        width: "150px",
                        height: "150px",
                        margin: "0 auto",
                        overflow: "hidden",
                        borderRadius: "50%",
                        border: "3px solid #186814",
                      }}
                    >
                      <img
                        alt={person.name}
                        src={person.imgSrc}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "fill",
                        }}
                      />
                    </div>
                  ) : (
                    <Avatar
                      size={150}
                      icon={<UserOutlined />} 
                      style={{
                        color: "#FFFFFF",
                      }}
                    />
                  )}
                  <Text
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    {person.role}
                  </Text>
                  <Text
                    style={{
                      display: "block",
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginTop: "15px",
                      color: "#FFD700",
                    }}
                  >
                    {person.name || "Name not available"}
                  </Text>
                  <Text
                    style={{
                      display: "block",
                      fontSize: "12px",
                      color: "#E6E6E6",
                    }}
                  >
                    {person.title}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <SecretariatPage />
      </div>
      <Footer />
    </>
  );
};

export default GovernancePage;
