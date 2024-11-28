import React from "react";
import { Layout, Typography, Button, Space, Grid, Row, Col, Card } from "antd";
import "../Styles/CallForContent.css";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";

const { Content } = Layout;
const { Title, Paragraph, Link, Text } = Typography;
const { useBreakpoint } = Grid;

const CallForContent = () => {
  const screens = useBreakpoint();

  const titleFontSize = screens.xl
    ? "45px"
    : screens.lg
    ? "40px"
    : screens.md
    ? "35px"
    : "28px";
  const titleMedium = screens.xl
    ? "30px"
    : screens.lg
    ? "30px"
    : screens.md
    ? "25px"
    : "22px";
  const paragraphFontSize = screens.xl
    ? "19px"
    : screens.lg
    ? "17px"
    : screens.md
    ? "19px"
    : "22px";

  return (
    <>
      <IcastHeader />
      <Layout className="call-for-content-layout">
        <Content className="call-for-content-container">
          <Title
            style={{ fontSize: titleFontSize, fontWeight: "bold" }}
            className="call-for-content-title"
          >
            Call For Content
          </Title>
          <Paragraph
            style={{ fontSize: paragraphFontSize, fontWeight: "bold" }}
            className="breadcrumb"
          >
            ICAST/ Call For Content
          </Paragraph>
          <div className="call-for-content-text">
            <Row
              align={"top"}
              gutter={[16, 16]}
              style={{ marginBottom: "20px" }}
            >
              {/* First Column for Text */}
              <Col xs={24} lg={16}>
                <Paragraph
                  style={{
                    fontSize: paragraphFontSize,
                    color: "black",
                    lineHeight: "2.5em",
                  }}
                >
                  The{" "}
                  <strong style={{ color: "black", fontWeight: "bold" }}>
                    {" "}
                    International Conference on Applications of Space Science
                    and Technology (ICAST 2025)
                  </strong>{" "}
                  invites researchers, academicians, professionals, and industry
                  experts to contribute to Pakistan’s largest and most
                  prestigious space event. Under the theme{" "}
                  <strong style={{ color: "black", fontWeight: "bold" }}>
                    “Space for Sustainable Development,”
                  </strong>{" "}
                  we welcome your innovative ideas, groundbreaking research, and
                  transformative concepts to shape the future of space science
                  and technology.
                </Paragraph>
                <Space className="button-group">
                  
                  <Button href="https://CMS.cressofterp.com" size="large" type="default">
                    Manage Submissions
                  </Button>
                  <Button href="/call-for-papers" size="large" type="default">
                    Call for Papers
                  </Button>
                  <Button href="/call-for-session" size="large" type="default">
                    Call for Sessions
                  </Button>
                  <Button size="large" type="default">
                    Author Resources
                  </Button>
                </Space>
                <div>
                  <Title style={{ fontSize: titleMedium, fontWeight: "bold" }}>
                    Call for Papers
                  </Title>
                  <Paragraph style={{ fontSize: paragraphFontSize ,color:"black"}}>
                    The International Conference on Applications of Space
                    Science and Technology (ICAST 2025) invites researchers,
                    academicians, and professionals from around the world to
                    submit their original research for presentation at
                    Pakistan’s premier space conference. Under the theme “Space
                    for Sustainable Development,” ICAST 2025 provides a global
                    platform to showcase cutting-edge ideas, transformative
                    research, and innovative solutions that address critical
                    challenges in space science and technology.
                  </Paragraph>
                  <Button href="/call-for-papers" size="large" type="default">
                    Read More
                  </Button>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Title style={{ fontSize: titleMedium, fontWeight: "bold" }}>
                    Call for Sessions
                  </Title>
                  <Paragraph style={{ fontSize: paragraphFontSize,color:"black" }}>
                    
                    The International Conference on Applications of Space
                    Science and Technology (ICAST 2025) invites session
                    proposals from thought leaders, researchers, industry
                    professionals, and institutions. This is your chance to
                    design and lead an engaging session that inspires
                    collaboration, sparks innovation, and addresses the pressing
                    challenges in space science and technology. We are seeking
                    diverse and impactful sessions that align with the
                    conference theme, “Space for Sustainable Development,” and
                    our eight conference tracks. These sessions will complement
                    our technical and plenary discussions, creating a holistic
                    environment for knowledge exchange and networking.
                  </Paragraph>
                  <Button href="/call-for-session" size="large" type="default">
                    Read More
                  </Button>
                </div>
              </Col>

              {/* Second Column for Cards */}
              <Col xs={24} lg={8}>
                {/* First Card */}
                <Card
                  style={{
                    backgroundColor: "white",
                  }}
                  title={
                    <Title
                      level={4}
                      style={{
                        color: "black",
                        fontSize: titleMedium,
                        textAlign: "start",
                      }}
                    >
                      Dates to Remember
                    </Title>
                  }
                >
                  <Paragraph
                    style={{
                      fontSize: "15px",
                      color: "black",
                      fontWeight: "500",
                      lineHeight: "1.8", // Adjust line spacing
                      marginBottom: "10px", // Control vertical spacing
                    }}
                  >
                    <div style={{ marginBottom: "12px" }}>
                      <Space direction="vertical" size={0}>
                        <strong style={{ fontSize: paragraphFontSize }}>
                          Abstract Submission Deadline:
                        </strong>{" "}
                        <Text
                          style={{
                            color: "#006814",
                            fontWeight: "400",
                            fontSize: paragraphFontSize,
                          }}
                        >
                          January 15, 2025.
                        </Text>
                      </Space>
                    </div>
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
      <Footer />
    </>
  );
};

export default CallForContent;
