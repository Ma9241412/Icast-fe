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
            ICAST Forum and Exposition / Call For Content
          </Paragraph>
          <div className="call-for-content-text">
            <Row align={"top"} gutter={[16, 16]} style={{ marginBottom: "20px" }}>
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
                  scientific and technical ideas, introduce your work to aerospace
                  colleagues, and refine your research questions. Forum paper
                  presentations typically consist of a written document and an oral
                  presentation. Presenting at AIAA SciTech Forum is a great
                  opportunity to gain valuable feedback from a community of experts
                  and for increasing your professional stature in aerospace
                  engineering, research, and development. Although the Call for
                  Content has closed, <Link href="#">Registration</Link> is open.
                  Plan to submit a technical paper abstract or session proposal for
                  the 2026 AIAA SciTech Forum. The Call for Content will open late
                  March 2025.
                </Paragraph>
              <Space  className="button-group">
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
              </Col>

              {/* Second Column for Cards */}
              <Col xs={24} lg={8}>
  <Space direction="vertical" size="large" style={{ width: "100%" }}>
    {/* First Card */}
    <Card
      style={{
        borderRadius: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        backgroundColor:"#1E2634"
      }}
      bodyStyle={{ padding: "20px" }}
      title={
        <Title
          level={4}
          style={{
            color: "white",
            fontSize: titleMedium,
            fontWeight: "bold",
            textAlign:"center"
          }}
        >
          Dates to Remember
        </Title>
      }
    >
      <Paragraph
        style={{
          fontSize: "15px",
          color: "white",
          fontWeight: "500",
        }}
      >
        <strong style={{fontSize:paragraphFontSize}}>Abstract Submission Begins:</strong>{" "}
        <Text
          style={{
            color: "#006814",
            fontWeight: "500",
            fontSize: paragraphFontSize,
          }}
        >
          26 Nov 2024
        </Text>
        <br />
        <strong style={{fontSize:paragraphFontSize}}>Abstract Submission Deadline:</strong>{" "}
        <Text
          style={{
            color: "#006814",
            fontWeight: "bold",
            fontSize: paragraphFontSize,
          }}
        >
          26 Nov 2024
        </Text>
        <br />
        <strong style={{fontSize:paragraphFontSize}}>Paper Submission Begins:</strong>{" "}
        <Text
          style={{
            color: "#006814",
            fontWeight: "bold",
            fontSize: paragraphFontSize,
          }}
        >
          26 Nov 2024
        </Text>
        <br />
        <strong style={{fontSize:paragraphFontSize}}>Paper Submission Deadline:</strong>{" "}
        <Text
          style={{
            color: "#006814",
            fontWeight: "bold",
            fontSize: paragraphFontSize,
          }}
        >
          26 Nov 2024
        </Text>
      </Paragraph>
      
    </Card>

    {/* Second Card */}
    <Card
      style={{
        borderRadius: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        backgroundColor:"#1E2634"
      }}
      bodyStyle={{ padding: "20px" }}
      title={
        <Title
          level={4}
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: titleMedium,
            textAlign:"center"

          }}
        >
          Additional Resources
        </Title>
      }
    >
      <ul
        style={{
          fontSize: paragraphFontSize,
          color: "white",
          lineHeight: 1.8,
        }}
      >
        <li style={{marginBottom:"5px"}} >
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: paragraphFontSize,
            }}
          >
            Technical Presenter Resources
          </Text>
        </li>
        <li  style={{marginBottom:"5px"}}>
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: paragraphFontSize,
            }}
          >
            Organizer Resources
          </Text>
        </li>
        <li >
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: paragraphFontSize,
            }}
          >
            Abstract Submission Process & Requirements
          </Text>
        </li>
      </ul>
    </Card>
    </Space>
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
