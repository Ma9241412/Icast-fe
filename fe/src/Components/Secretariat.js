import React from "react";
import { Card, Col, Grid, Row, Typography, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

import img1 from "../Assets3/1.png";
import img2 from "../Assets3/2.JPG";
import img3 from "../Assets3/3.png";
import img4 from "../Assets3/4.jpg";
import img5 from "../Assets3/5.jpg";
import img6 from "../Assets3/6.JPG";
import img7 from "../Assets3/7.jpg";
import img8 from "../Assets3/8.jpg";
import img9 from "../Assets3/9.png";

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const data = [
  {
    role: "Conference Secretary",
    name: "Prof. Dr. Najam Abbas Naqvi",
    title: "Chairman NCGSA",
    imgSrc: img1,
  },
  {
    role: "Conference Coordinator",
    name: "Mr. Usama Ahmed",
    title: "Coordinator NCGSA",
    imgSrc: img2,
  },
  {
    role: "Logistics & Operations Manager",
    name: "Mr. Muhammad Nouman Shaikh",
    title: "Snr. Program Manager NCGSA",
    imgSrc: img3,
  },
  {
    role: "Media Management",
    name: "Ms. Marya Tariq",
    title: "Manager SEAD",
    imgSrc: img4,

  },
  {
    role: "International Affairs",
    name: "Ms. Masuma Fatima",
    title: "Manager IA",
    imgSrc: img5,
  },
  {
    role: "Publications Manager",
    name: "Name Not Available",
    title: "Research M&E Officer NCGSA",
  },
  {
    role: "Website Manager",
    name: "Mr. Syed Muhammad Ali",
    title: "Web & Application Developer NCGSA",
    imgSrc: img7,
  },
  {
    role: "Graphics Manager",
    name: "Ms. Momina Asif",
    title: "Graphic Designer NCGSA",
    imgSrc: img8,
  },
  {
    role: "Technical Sessions Manager",
    name: "Mr. Daniyal Raza Kazmi",
    title: "Team Lead NCGSA",
    imgSrc: img9,
  },
];

const SecretariatPage = () => {
  const screens = useBreakpoint();

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
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div style={{ padding: "30px 30px", backgroundColor: "#EFF0F2" }}>
        <Title
          style={{
            textAlign: "start",
            fontSize: titleMedium,
            color: "black",
            margin: 0,
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
          }}
        >
          Conference Secretariat
        </Title>
        <br />
        <Paragraph
          style={{
            textAlign: "start",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            marginBottom: "30px",
            fontSize: paragraphFontSize,
            color: "black",
          }}
        >
          The Conference Secretariat operates as the executive arm of ICAST
          2025, implementing the plans and decisions made by the Steering
          Committee.
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
                <div
                  style={{
                    width: "150px",
                    height: "150px",
                    margin: "0 auto",
                    overflow: "hidden",
                    borderRadius: "50%", // Circular image
                    border: "3px solid #186814", // Border around image
                  }}
                >
                  {/* Check if imgSrc exists, otherwise use Avatar */}
                  {person.imgSrc ? (
                    <img
                      alt={person.name}
                      src={person.imgSrc}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Ensure image covers the space
                      }}
                    />
                  ) : (
                    <Avatar
                      size={150}
                      icon={<UserOutlined />} 
                      
                    >
                     
                    </Avatar>
                  )}
                </div>
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
                  {person.name}
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
    </div>
  );
};

export default SecretariatPage;
