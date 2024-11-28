import React from "react";
import { Button, Card, Col, Row, Typography, Space, Grid } from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const sessionFormats = [
  {
    title: "Interactive Panel Discussions",
    description:
      "Bring together experts to debate emerging trends, critical challenges, and future opportunities in space science and technology.",
  },
  {
    title: "Thematic Symposiums",
    description:
      "Focused discussions diving deep into specialized topics such as advanced propulsion systems, quantum technologies, or satellite constellations.",
  },
  {
    title: "Workshops and Training Sessions",
    description:
      "Hands-on experiences providing practical skills and insights, led by global experts.",
  },
  {
    title: "Open Forums",
    description:
      "Encouraging audience-driven discussions on interdisciplinary topics, fostering collaboration and creative solutions.",
  },
];

const CallForSessions = () => {
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
      <div style={{ backgroundColor: "white", overflow: "hidden" }}>
        {/* Header Section */}
        <Title
          style={{
            textAlign: "start",
            marginBottom: "30px",
            backgroundColor: "#EFF0F2",
            padding: "20px",
            fontSize: titleFontSize,
            fontWeight: "bold",
          }}
        >
          Call for Sessions
        </Title>
        <Paragraph
          style={{
            textAlign: "start",
            marginBottom: "30px",
            fontSize: paragraphFontSize,
            color: "black",
            padding: "0px 20px",
            fontWeight: "bold",
          }}
        >
          ICAST /Call For Content / Call For Sessions
        </Paragraph>
        <div style={{ backgroundColor: "#EFF0F2", padding: "20px" }}>
          <Paragraph
            style={{
              textAlign: "start",
              fontSize: paragraphFontSize, // Adjust as needed
              color: "black",
              margin: 0, // Remove top and bottom margin for Title
              padding: "10px 0px",
            }}
          >
            The International Conference on Applications of Space Science and
            Technology (ICAST 2025) invites session proposals from thought
            leaders, researchers, industry professionals, and institutions. This
            is your chance to design and lead an engaging session that inspires
            collaboration, sparks innovation, and addresses the pressing
            challenges in space science and technology. We are seeking diverse
            and impactful sessions that align with the conference theme,{" "}
            <strong style={{ color: "black", fontWeight: "bold" }}>
              “Space for Sustainable Development,”
            </strong>{" "}
            and our eight conference tracks. These sessions will complement our
            technical and plenary discussions, creating a holistic environment
            for knowledge exchange and networking.
          </Paragraph>
        </div>

        <div style={{ textAlign: "left", padding: "10px 20px" }}>
          <Title
            style={{
              marginTop: "40px",
              fontSize: titleMedium,
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Types of Sessions
          </Title>
        </div>

        <Row
          style={{ padding: "20px 20px", backgroundColor: "#EFF0F2" }}
          gutter={[16, 16]}
        >
          {sessionFormats.map((format, index) => (
            <Col xs={24} sm={12} md={12} lg={6} key={index}>
              <Card
                hoverable
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  border: "1px solid #e6e6e6",
                  textAlign: "left",
                  backgroundColor: "#fff",
                  height: "100%",
                }}
              >
                <Title
                  level={4}
                  style={{
                    color: "#007BFF",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {format.title}
                </Title>
                <Paragraph style={{ fontSize: "16px", color: "#595959" }}>
                  {format.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Proposal Section */}
        <div style={{ textAlign: "left", padding: "10px 40px" }}>
          <Title
            style={{
              marginTop: "40px",
              fontSize: titleMedium,
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            What to Include in Your Proposal
          </Title>
          <ul style={{ fontSize: paragraphFontSize, color: "black", lineHeight: "1.8" }}>
            <li>
              <strong>Session Title:</strong> A concise and engaging title that
              reflects the theme.
            </li>
            <br />
            <li>
              <strong>Abstract:</strong> A brief description (300–500 words)
              highlighting the objectives, scope, and relevance of the session.
            </li>
            <br />

            <li>
              <strong>Proposed Format:</strong> Specify whether the session will
              be a panel discussion, symposium, workshop, or forum.
            </li>
            <br />

            <li>
              <strong>Speakers/Panelists:</strong> Names and profiles of the
              proposed participants, if applicable.
            </li>
            <br />

            <li>
              <strong>Expected Outcomes:</strong> Describe the anticipated
              takeaways or benefits for attendees.
            </li>
          </ul>

          {/* Why Host a Session Section */}
          <Title
            style={{
              marginTop: "40px",
              fontSize: titleMedium,
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Why Host a Session?
          </Title>
          <ul style={{ fontSize: paragraphFontSize, color: "black", lineHeight: "1.8" }}>
            <li>Gain visibility as a thought leader in your field.</li>
            <br />

            <li>
              Inspire global experts, policymakers, and young researchers with
              your insights.
            </li>
            <br />

            <li>
              Contribute to shaping the discourse on the future of space science
              and technology.
            </li>
            <br />

            <li>
              Build valuable collaborations with international stakeholders.
            </li>
          </ul>

          {/* How to Submit Section */}
          <Title  style={{
              marginTop: "40px",
              fontSize: titleMedium,
              textAlign: "left",
              fontWeight: "bold",
            }}>
             How to Submit
          </Title>
          <Paragraph
            style={{ fontSize: paragraphFontSize, color: "black", marginBottom: "20px" }}
          >
            Submit your session proposal via the Proposal Form. Ensure your
            submission includes all the required details mentioned above.
          </Paragraph>
          <Paragraph
            style={{ fontSize: paragraphFontSize, color: "#595959", marginBottom: "30px" }}
          >
            <strong style={{color:"black",fontWeight:"bold",}}>Submission Deadline: September 1,2025.</strong> 
            <br/>
            <br/>
            All proposals
            will be reviewed by the ICAST Steering Committee, and selected
            sessions will be featured in the official program.
          </Paragraph>
        </div>
        {/* Submit Button */}
        <div style={{ textAlign: "left", padding:"20px 20px" }}>
          <Space>
          <Button
            type="primary"
            size="large"
            href="/proposal-form"
            style={{  backgroundColor: "#186814",
                borderColor: "#186814",
                color:"white"}}
          >
            Submit Proposal
          </Button>
          </Space>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CallForSessions;
