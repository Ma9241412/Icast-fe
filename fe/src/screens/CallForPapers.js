import React from "react";
import { Button, Card, Col, Divider, Grid, Image, Row, Space, Typography } from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import { Link } from "react-router-dom";
import icon1 from "../Assets/icn1.png"
import icon2 from "../Assets/icn2.png"
import icon3 from "../Assets/icn3.png"
import icon4 from "../Assets/icn4.png"
import icon5 from "../Assets/icn5.png"
import icon6 from "../Assets/icn6.png"
import icon7 from "../Assets/icn7.png"
import icon8 from "../Assets/icn8.png"

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const CallForPapers = () => {
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
      <div
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Title
          style={{
            textAlign: "justify",
            backgroundColor: "#EFF0F2",
            padding: "20px 40px",
            fontSize: titleFontSize,
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
          }}
        >
          Call for Papers
        </Title>
        <Paragraph
          style={{
            textAlign: "justify",
            padding: "0px 40px",
            fontSize: paragraphFontSize,
            color: "black",
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
          }}
        >
          ICAST /Call For Content / Call For Papers
        </Paragraph>

        <div style={{ backgroundColor: "#EFF0F2", padding: "20px" }}>
          <Paragraph
            style={{
              textAlign: "justify",
              fontSize: paragraphFontSize,
              color: "black",
              padding: "0px 15px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              lineHeight: "2rem",
            }}
          >
            The International Conference on Applications of Space Science and
            Technology (ICAST 2025) invites researchers, academicians, and
            professionals from around the world to submit their original
            research for presentation at Pakistan’s premier space conference.
            Under the theme{" "}
            <strong>“Space for Sustainable Development,”</strong> ICAST 2025
            provides a global platform to showcase cutting-edge ideas,
            transformative research, and innovative solutions that address
            critical challenges in space science and technology.
          </Paragraph>

          <div style={{ textAlign: "justify", padding: "10px 15px" }}>
            <Space direction="horizontal">
            <Link to={"/screen-inprogress"}>
            <Button
                type="default"
                size="large"
                target="_blank"
                style={{
                  backgroundColor: "#186814",
                  borderColor: "#186814",
                  color: "white",
                }}
              >
                Manage Submissions
              </Button>
            </Link>
              <Button
                type="primary"
                size="large"
                href="/author-resources"
                style={{
                  backgroundColor: "#186814",
                  borderColor: "#186814",
                  color: "white",
                }}
              >
                Author Resources
              </Button>
            </Space>
          </div>
        </div>

        <div style={{ textAlign: "justify", padding: "10px 35px" }}>
          <Title
            style={{
              marginTop: "20px",
              fontSize: titleMedium,
              textAlign: "justify",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
            }}
          >
            Conference Tracks
          </Title>
          <Paragraph
            style={{
              fontSize: paragraphFontSize,
              color: "black",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            We welcome high-quality submissions across the following dynamic
            tracks. Detailed subtopics can be found below:
          </Paragraph>
          <div style={{ textAlign: "justify", marginBottom: "30px" }}>
            <Space>
              <Link to={"/theme"}>
              <Button
                size="large"
                type="primary"
                href=""
                style={{
                  backgroundColor: "#186814",
                  borderColor: "#186814",
                  color: "white",
                }}
              >
                Tracks and Subtopics Page
              </Button>
              </Link>
            </Space>
          </div>
        </div>

        <Row
          style={{ padding: "20px 35px", backgroundColor: "#EFF0F2" }}
          gutter={[24, 24]}
        >
          {conferenceTracks.map((track, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                style={{
                  height: "100%", // Remove fixed height for flexibility
                  width: "100%",
                  backgroundColor:"#1E2634"
                }}
             
                hoverable
              >
                <Title style={{
                      fontSize: paragraphFontSize, // Slightly smaller font size
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "700",
                      color: "white",
                      lineHeight: "1.2", // Reduce line height for closer spacing
                      wordWrap: "break-word",
                      whiteSpace: "normal",
                      textAlign: "center"
                    }}>{track.title}</Title>
                <Image
                  style={{
                   width:"80px",
                   height:"80px"
                  }}
                  src={track.icon}
                >
                </Image>
              </Card>
            </Col>
          ))}
        </Row>
        <Title
          style={{
            marginTop: "40px",
            fontSize: titleMedium,
            textAlign: "justify",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            padding: "10px 35px",
          }}
        >
          Why Submit?
        </Title>
        <div
          style={{
            textAlign: "left",
            padding: "10px 35px",
            backgroundColor: "#EFF0F2",
          }}
        >
          <Paragraph
            style={{
              fontSize: paragraphFontSize,
              color: "black",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              textAlign: "justify"
            }}
          >
            By submitting your research to ICAST 2025, you will:
          </Paragraph>
          <ul
            style={{
              fontSize: paragraphFontSize,
              color: "black",
              paddingLeft: "20px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              textAlign: "justify"
            }}
          >
            <li>
              Gain recognition by presenting your work to a global audience of
              experts and stakeholders.
            </li>
            <br />
            <li>
              Contribute to advancing the field of space science and technology.
            </li>
            <br />

            <li>
              Have the opportunity for your paper to be published in reputable
              conference proceedings and indexed journals.
            </li>
            <br />

            <li>
              Network with leading scientists, policymakers, and industry
              professionals shaping the future of space innovation.
            </li>
          </ul>
          <div>
            <Space>
           <Link to={"/screen-inprogress"}>
           <Button
                size="large"
                type="primary"
                style={{
                  backgroundColor: "#186814",
                  borderColor: "#186814",
                  color: "white",
                }}
              >
                Register Now
              </Button>
           </Link>
            </Space>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const conferenceTracks = [
  {
    title: "Aeronautics & Astronautics",
    icon: icon1, // Replace with actual icon path
  },
  {
    title: "Satellite Technology",
    icon: icon2, // Replace with actual icon path
  },
  {
    title: "Positioning, Navigation & Timing",
    icon: icon3, // Replace with actual icon path
  },
  {
    title: "Remote Sensing & Geographic Information Science",
    icon: icon4, // Replace with actual icon path
  },
  {
    title: "Environmental Science & Climate Change",
    icon: icon5, // Replace with actual icon path
  },
  {
    title: "Information & Communication Technologies",
    icon: icon6, // Replace with actual icon path
  },
  {
    title: "Astronomy & Astrophysics",
    icon: icon7, // Replace with actual icon path
  },
  {
    title: "Space Law, Management & Outreach",
    icon: icon8, // Replace with actual icon path
  },
];


export default CallForPapers;
