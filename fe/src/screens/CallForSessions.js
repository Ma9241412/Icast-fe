import React from "react";
import { Button, Card, Col, Row, Typography, Space, Grid } from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import { Link } from "react-router-dom";

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
      <div style={{ backgroundColor: "white", overflow: "hidden" }}>
        {/* Header Section */}
        <Title
           style={{
            textAlign: "justify",
            backgroundColor: "#EFF0F2",
            padding: "20px 40px",
            fontSize: titleFontSize,
            fontFamily: "Inter, sans-serif",
            fontWeight:"700",
          }}
        >
          Call for Sessions
        </Title>
        <Paragraph
          style={{
            textAlign: "justify",
            padding: "0px 40px",
            fontSize: paragraphFontSize,
            color: "black",
            fontFamily: "Inter, sans-serif",
            fontWeight:"600",
          }}
        >
          ICAST /Call For Content / Call For Sessions
        </Paragraph>
        <div style={{ backgroundColor: "#EFF0F2", padding: "15px 40px" }}>
          <Paragraph
             style={{
              textAlign: "justify",
              fontSize: paragraphFontSize, 
              color: "black",
              fontFamily: "Inter, sans-serif",
              fontWeight:"500",
              lineHeight:"2rem"

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

        <div style={{ textAlign: "justify", padding: "10px 40px" }}>
          <Title
            style={{
              marginTop: "20px",
              fontSize: titleMedium,
              textAlign: "left",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
            }}
          >
            Types of Sessions
          </Title>
        </div>

        <Row
          style={{ padding: "20px 40px", backgroundColor: "#EFF0F2" }}
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
                  textAlign: "justify",
                  backgroundColor: "#fff",
                  height: "100%",
                }}
              >
                <Title
                  level={4}
                  style={{
                    color: "#007BFF",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "600",
                    fontSize: "16px",

                  }}
                >
                  {format.title}
                </Title>
                <Paragraph
                  style={{
                    fontSize: paragraphFontSize,
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "500",
                    textAlign: "justify"
                  }}
                >
                  {format.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
        <Title
            style={{
              marginTop: "20px",
              fontSize: titleMedium,
              textAlign: "justify",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              padding: "10px 40px"
            }}
          >
            What to Include in Your Proposal
          </Title>
        {/* Proposal Section */}
        <div style={{ textAlign: "justify", padding: "10px 40px",backgroundColor: "#EFF0F2" }}>
         
          <ul
            style={{
              fontSize: paragraphFontSize,
              color: "black",
              lineHeight: "1.8",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              textAlign: "justify"
              
            }}
          >
            <li>
              <strong>Session Title:</strong> A concise and engaging title that
              reflects the theme.
            </li>
            <li>
              <strong>Abstract:</strong> A brief description (300–500 words)
              highlighting the objectives, scope, and relevance of the session.
            </li>

            <li>
              <strong>Proposed Format:</strong> Specify whether the session will
              be a panel discussion, symposium, workshop, or forum.
            </li>

            <li>
              <strong>Speakers/Panelists:</strong> Names and profiles of the
              proposed participants, if applicable.
            </li>

            <li>
              <strong>Expected Outcomes:</strong> Describe the anticipated
              takeaways or benefits for attendees.
            </li>
          </ul>

          {/* Why Host a Session Section */}
         
        </div>
        <Title
            style={{
              marginTop: "20px",
              fontSize: titleMedium,
              textAlign: "justify",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              padding: "10px 40px",
            }}
          >
            Why Host a Session?
          </Title>
       <div  style={{ textAlign: "justify", padding: "10px 40px",backgroundColor: "#EFF0F2" }}>
      
          <ul
            style={{
              fontSize: paragraphFontSize,
              color: "black",
              lineHeight: "2rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              textAlign: "justify",

              
            }}
          >
            <li>Gain visibility as a thought leader in your field.</li>

            <li>
              Inspire global experts, policymakers, and young researchers with
              your insights.
            </li>

            <li>
              Contribute to shaping the discourse on the future of space science
              and technology.
            </li>

            <li>
              Build valuable collaborations with international stakeholders.
            </li>
          </ul>

       </div>
          {/* How to Submit Section */}
          <Title
            style={{
              marginTop: "20px",
              fontSize: titleMedium,
              textAlign: "justify",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              padding: "10px 40px"
            }}
          >
            How to Submit
          </Title>
          <div style={{textAlign: "justify", padding: "10px 40px",backgroundColor: "#EFF0F2" }}>
          <Paragraph
            style={{
              fontSize: paragraphFontSize,
              color: "black",
              marginBottom: "20px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              textAlign: "justify"
              
            }}
          >
            Submit your session proposal via the Proposal Form. Ensure your
            submission includes all the required details mentioned above.
          </Paragraph>
          <Paragraph
            style={{
              fontSize: paragraphFontSize,
              color: "black",
              marginBottom: "30px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              textAlign: "justify"
            }}
          >
            <strong style={{ color: "black", fontWeight: "bold" }}>
              Submission Deadline: September 1,2025.
            </strong>
            <br />
            <br />
            All proposals will be reviewed by the ICAST Steering Committee, and
            selected sessions will be featured in the official program.
          </Paragraph>
          <div style={{textAlign: "justify", }}>
          <Space>
           <Link to={"/screen-inprogress"}>
            <Button
              type="primary"
              size="large"
              href="/proposal-form"
              style={{
                backgroundColor: "#186814",
                borderColor: "#186814",
                color: "white",
              }}
            >
              Submit Proposal
            </Button>
           </Link>
          </Space>
        </div>
          </div>
        {/* Submit Button */}
      
      </div>
      <Footer />
    </>
  );
};

export default CallForSessions;
