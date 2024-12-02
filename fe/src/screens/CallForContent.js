import React from "react";
import { Layout, Typography, Button, Space, Grid, Row, Col, Card } from "antd";
import "../Styles/CallForContent.css";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const CallForContent = () => {
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
      <Layout className="call-for-content-layout">
        <Content className="call-for-content-container">
          <Title
            style={{
              padding: "20px 40px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              fontSize: titleFontSize,
              backgroundColor: "#EEF0F2",
              textAlign: "justify",
            }}
          >
            Call For Content
          </Title>
          <Paragraph
            style={{
              fontSize: paragraphFontSize,
              fontWeight: "bold",
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              padding: "0px 40px",
              textAlign: "justify",
            }}
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
                    lineHeight: "2rem",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "500",
                    textAlign: "justify",
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
                  <Button
                    href="https://CMS.cressofterp.com"
                    size="large"
                    type="default"
                  >
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
                  <Title
                    style={{
                      fontSize: titleMedium,
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "700",
                      textAlign: "justify",
                    }}
                  >
                    Call for Papers
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: paragraphFontSize,
                      color: "black",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "500",
                      lineHeight: "2rem",
                      textAlign: "justify",
                    }}
                  >
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
                  <Title
                    style={{
                      fontSize: titleMedium,
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "700",
                      textAlign: "justify",
                    }}
                  >
                    Call for Sessions
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: paragraphFontSize,
                      color: "black",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "500",
                      lineHeight: "2rem",
                      textAlign: "justify",
                    }}
                  >
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
                        textAlign: "justify",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "700",
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
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    <div style={{ marginBottom: "12px" }}>
                      <Space direction="vertical">
                        <Space direction="vertical" size={0}>
                          <strong
                            style={{
                              fontSize: paragraphFontSize,
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                          >
                            Call for Abstracts Opens:
                          </strong>{" "}
                          <Text
                            style={{
                              color: "#006814",
                              fontWeight: "400",
                              fontSize: paragraphFontSize,
                            }}
                          >
                            November 15, 2024.
                          </Text>
                        </Space>
                        <Space direction="vertical" size={0}>
                          <strong
                            style={{
                              fontSize: paragraphFontSize,
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                          >
                            Abstract Submission Deadline:
                          </strong>{" "}
                          <Text
                            style={{
                              color: "#006814",
                              fontWeight: "400",
                              fontSize: paragraphFontSize,
                            }}
                          >
                            January 15, 2025
                          </Text>
                        </Space>
                        <Space direction="vertical" size={0}>
                          <strong
                            style={{
                              fontSize: paragraphFontSize,
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                          >
                            Abstract Notification:
                          </strong>{" "}
                          <Text
                            style={{
                              color: "#006814",
                              fontWeight: "400",
                              fontSize: paragraphFontSize,
                            }}
                          >
                            March 1, 2025
                          </Text>
                        </Space>
                        <Space direction="vertical" size={0}>
                          <strong
                            style={{
                              fontSize: paragraphFontSize,
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                          >
                            Manuscript Submission Deadline:
                          </strong>{" "}
                          <Text
                            style={{
                              color: "#006814",
                              fontWeight: "400",
                              fontSize: paragraphFontSize,
                            }}
                          >
                            May 15, 2025
                          </Text>
                        </Space>
                        <Space direction="vertical" size={0}>
                          <strong
                            style={{
                              fontSize: paragraphFontSize,
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                          >
                            Acceptance Notification:
                          </strong>{" "}
                          <Text
                            style={{
                              color: "#006814",
                              fontWeight: "400",
                              fontSize: paragraphFontSize,
                            }}
                          >
                            July 31, 2025
                          </Text>
                        </Space>
                        <Space direction="vertical" size={0}>
                          <strong
                            style={{
                              fontSize: paragraphFontSize,
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                          >
                            Registration Deadline:
                          </strong>{" "}
                          <Text
                            style={{
                              color: "#006814",
                              fontWeight: "400",
                              fontSize: paragraphFontSize,
                            }}
                          >
                            September 1, 2025
                          </Text>
                        </Space>
                        <Space direction="vertical" size={0}>
                          <strong
                            style={{
                              fontSize: paragraphFontSize,
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                          >
                            Conference Dates:
                          </strong>{" "}
                          <Text
                            style={{
                              color: "#006814",
                              fontWeight: "400",
                              fontSize: paragraphFontSize,
                            }}
                          >
                            November 18–20, 2025
                          </Text>
                        </Space>
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
