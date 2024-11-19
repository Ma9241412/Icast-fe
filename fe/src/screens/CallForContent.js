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
            style={{ fontSize: paragraphFontSize }}
            className="breadcrumb"
          >
            ICAST / Call For Content
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
                  Presentations and papers can be an effective way to hone
                  scientific and technical ideas, introduce your work to
                  aerospace colleagues, and refine your research questions.
                  Forum paper presentations typically consist of a written
                  document and an oral presentation. Presenting at AIAA SciTech
                  Forum is a great opportunity to gain valuable feedback from a
                  community of experts and for increasing your professional
                  stature in aerospace engineering, research, and development.
                  Although the Call for Content has closed,{" "}
                  <Link href="#">Registration</Link> is open. Plan to submit a
                  technical paper abstract or session proposal for the 2026 AIAA
                  SciTech Forum. The Call for Content will open late March 2025.
                </Paragraph>
                <Space className="button-group">
                  <Button size="large" type="primary">
                    Manage Submissions
                  </Button>
                  <Button size="large" type="default">
                    Call for Paper
                  </Button>
                  <Button size="large" type="default">
                    Call for Session
                  </Button>
                </Space>
             
                <Space direction="vertical">
                <Title style={{fontSize:titleMedium}}>
                  Additional Resources
                </Title>
                  <ul
                    style={{
                      fontSize: paragraphFontSize,
                      color: "black",
                      lineHeight: 1.8,
                    }}
                  >
                    <li style={{ marginBottom: "5px" }}>
                      <Text
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: paragraphFontSize,
                        }}
                      >
                        Technical Presenter Resources
                      </Text>
                    </li>
                    <li style={{ marginBottom: "5px" }}>
                      <Text
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: paragraphFontSize,
                        }}
                      >
                        Organizer Resources
                      </Text>
                    </li>
                    <li>
                      <Text
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: paragraphFontSize,
                        }}
                      >
                        Abstract Submission Process & Requirements
                      </Text>
                    </li>
                  </ul>
                </Space>
                
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
                          Abstract Submission Begins:
                        </strong>{" "}
                        <Text
                          style={{
                            color: "#006814",
                            fontWeight: "400",
                            fontSize: paragraphFontSize,
                          }}
                        >
                          26 March 2024
                        </Text>
                      </Space>
                    </div>
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
                          23 May 2024
                        </Text>
                      </Space>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                      <Space direction="vertical" size={0}>
                        <strong style={{ fontSize: paragraphFontSize }}>
                          Author Notifications:
                        </strong>{" "}
                        <Text
                          style={{
                            color: "#006814",
                            fontWeight: "400",
                            fontSize: paragraphFontSize,
                          }}
                        >
                          26 August 2024
                        </Text>
                      </Space>
                    </div>
                    <div>
                      <Space direction="vertical" size={0}>
                        <strong style={{ fontSize: paragraphFontSize }}>
                          Manuscript Deadline:
                        </strong>{" "}
                        <Text
                          style={{
                            color: "#006814",
                            fontWeight: "400",
                            fontSize: paragraphFontSize,
                          }}
                        >
                          2 December 2024 
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
