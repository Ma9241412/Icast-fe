import React from "react";
import { Layout, Typography, Row, Col, Card, Grid } from "antd";
import Footer from "../Layouts/IcastFooter";
import IcastHeader from "../Layouts/IcastHeader";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const ICAST2025 = () => {
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
      <Layout
        style={{
          minHeight: "100vh",
          overflowX: "hidden",
          backgroundColor: "white",
        }}
      >
        <Title
          style={{
            textAlign: "start",
            marginBottom: "30px",
            backgroundColor: "#EFF0F2",
            padding: "10px 40px",
            fontSize: titleFontSize,
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
          }}
        >
          ICAST 2025
        </Title>
        <Paragraph
          style={{
            textAlign: "start",
            marginBottom: "30px",
            fontSize: paragraphFontSize,
            color: "#055EDD",
            padding: "0px 40px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
          }}
        >
          ICAST / <Link style={{color:"#055EDD"}} to={"/"}>About ICAST</Link> / ICAST 2025
        </Paragraph>
        <Content>
          <div>
            <Paragraph
              style={{
                backgroundColor: "#EFF0F2",
                textAlign: "justify",
                fontSize: paragraphFontSize,
                color: "black",
                margin: 0, // Remove top and bottom margin for Title
                padding: "10px 40px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
              }}
            >
              The International Conference on Applications of Space Science and
              Technology (ICAST 2025), scheduled to take place from November
              18–20, 2025, at the Institute of Space Technology (IST),
              Islamabad, is Pakistan's premier space event. Bringing together
              global leaders, researchers, and industry experts, it aims to
              advance the frontiers of space science and technology.
              As a unified platform combining the legacies of IST’s
              International Conference on Aerospace Science and Engineering
              (ICASE) and SUPARCO’s International Conference on Space (ICS),
              ICAST 2025 fosters innovation, collaboration, and transformative
              research.
              <br/>
              Under the theme{" "}<strong>“Space for Sustainable Development,”</strong> this
              biennial conference addresses critical global challenges through
              space technology, showcasing cutting-edge research, interactive
              sessions, and interdisciplinary discussions that inspire and shape
              the future of space exploration.
              <br/>
              With eight conference tracks, interactive forums, and an expanded
              international presence, ICAST 2025 aims to cement its status as a
              leader in advancing space science and technology on a global
              scale.
            </Paragraph>
           
          </div>

          <div style={{ marginTop: "20px" }}>
            <Title
              style={{
                textAlign: "start",
                marginBottom: "30px",
                fontSize: titleMedium,
                color: "black",
                padding: "0px 40px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
              }}
            >
              ICAST 2025 Highlights
            </Title>
            <Row
  style={{ padding: "20px 40px", backgroundColor: "#EFF0F2" }}
  gutter={[32, 32]}
>
  {[
    {
      title: "Thematic Plenary Sessions",
      description:
        "Join thought-provoking discussions led by international experts, addressing critical global challenges and the future of space exploration.",
    },
    {
      title: "Technical Sessions",
      description:
        "Explore cutting-edge, peer-reviewed research showcasing the latest advancements in space science and its applications.",
    },
    {
      title: "Astronauts’ Meet",
      description:
        "Engage with astronauts and space explorers in exclusive sessions, sharing firsthand experiences and inspiring personal stories.",
    },
    {
      title: "Panel Discussions & Forums",
      description:
        "Participate in dynamic debates and collaborative conversations on space policy, innovation, and emerging trends.",
    },
    {
      title: "Research Poster Presentations",
      description:
        "Discover innovative research ideas and creative solutions through engaging poster displays by emerging and established scientists.",
    },
    {
      title: "Technology Demonstrations & Exhibits",
      description:
        "Witness live demonstrations of groundbreaking technologies and innovations presented by leading industry players and academia.",
    },
    {
      title: "Workshops and Training Sessions",
      description:
        "Gain practical skills and hands-on experience in advanced space technologies through specialized sessions led by international specialists.",
    },
    {
      title: "Student & Youth Engagement Programs",
      description:
        "Attend sessions designed to inspire and empower the next generation of space professionals through interactive learning experiences.",
    },
    {
      title: "Awards & Recognitions",
      description:
        "Celebrate excellence with prestigious accolades, including the Best Paper Award, Young Researcher Award, and Innovation in Space Technology Award.",
    },
    {
      title: "Travel & Registration Sponsorship Opportunities",
      description:
        "Benefit from exclusive travel support and registration fee waivers, made possible by our esteemed sponsors and partners.",
    },
    {
      title: "Networking Sessions",
      description:
        "Connect with global experts, peers, and industry leaders through curated events such as high tea, gala dinners, and social gatherings.",
    },
    {
      title: "Cultural Visits & Sightseeing",
      description:
        "Experience the vibrant heritage and breathtaking landscapes of Pakistan through guided cultural tours and sightseeing opportunities.",
    },
  ].map((highlight, index) => (
    <Col
      // style={{ padding: "5px" }}
      xs={24}
      sm={12}
      lg={6}
      key={index}
    >
      <Card
        style={{
          height: "100%", // Remove fixed height for flexibility
          width: "100%",
        }}
        title={
          <span
            style={{
              
              fontSize: paragraphFontSize, // Slightly smaller font size
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              color: "#1a73e8",
              lineHeight: "1.2", // Reduce line height for closer spacing
              wordWrap: "break-word",
              whiteSpace: "normal",
            }}
          >
            {highlight.title}
          </span>
        }
        bordered={false}
        hoverable
      >
        <Paragraph
          style={{
            textAlign: "left",
            fontSize: "15px", // Reduce font size for compactness
            color: "black",
            margin: "0", // Remove margin
            fontFamily: "Inter, sans-serif",
            fontWeight: "600", // Slightly lighter font weight
            lineHeight: "1.4", // Compact line height for tighter spacing
          }}
        >
          {highlight.description}
        </Paragraph>
      </Card>
    </Col>
  ))}
</Row>

          </div>
        </Content>
      </Layout>
      <Footer />
    </>
  );
};

export default ICAST2025;
