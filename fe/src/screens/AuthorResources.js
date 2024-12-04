import React from "react";
import { Button, Divider, Typography, List, Space, Card, Grid } from "antd";
import { Link } from "react-router-dom";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const AuthorResources = () => {
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
          Author Resources
        </Title>
        <Paragraph
          style={{
            textAlign: "justify",
            fontSize: paragraphFontSize,
            color: "black",
            padding: "0px 40px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
          }}
        >
          ICAST /Call For Content / Author Resources
        </Paragraph>
        <div style={{ backgroundColor: "#EFF0F2", padding: "20px 40px" }}>
          <Paragraph
            style={{
              textAlign: "justify",
              fontSize: paragraphFontSize, // Adjust as needed
              color: "black",
              margin: 0, // Remove top and bottom margin for Title
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              lineHeight: "2rem",
            }}
          >
            Welcome to the Author Resources page for the International
            Conference on Applications of Space Science and Technology (ICAST
            2025). This page provides essential information, templates, and
            guidelines to assist authors in preparing and submitting their work
            in compliance with IEEE Xplore standards.
          </Paragraph>
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
         Templates
        </Title>
        <div
          style={{
            textAlign: "justify",
            padding: "10px 40px",
            backgroundColor: "#EFF0F2",
          }}
        >
          <Paragraph
            style={{
              textAlign: "justify",
              fontSize: paragraphFontSize, // Adjust as needed
              color: "black",
              margin: 0, // Remove top and bottom margin for Title
              padding: "10px 0px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              lineHeight: "2rem",
            }}
          >
            To ensure uniformity and adherence to IEEE Xplore requirements,
            please use the following templates for your submissions:
          </Paragraph>
          <List
            bordered
            dataSource={[
              {
                key: "abstract",
                text: "Download Abstract Template",
                url: "https://icast.pk/PDF/ICAST%202025%20-%20Abstract%20Template%20-%20Without%20Authors.docx",
              },
              {
                key: "manuscript",
                text: "Download Manuscript Template",
                url: "https://icast.pk/PDF/ICAST%202025%20-%20Paper%20Template%20-%20Without%20Authors.docx",
              },
            ]}
            renderItem={(item) => (
              <List.Item>
                <a href={item.url} download>
                  <Button
                    type="default"
                    size="large"
                    style={{
                      width: "300px",
                      height: "50px",
                      textAlign: "justify",
                    }}
                  >
                    {item.text}
                  </Button>
                </a>
              </List.Item>
            )}
          />

          <Paragraph
            style={{
              textAlign: "justify",
              fontSize: paragraphFontSize, // Adjust as needed
              color: "black",
              margin: 0, // Remove top and bottom margin for Title
              padding: "10px 0px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "500",
              lineHeight: "2rem",
            }}
          >
            Note: These templates are designed to meet IEEE formatting
            standards. Please do not alter the formatting or style settings. For
            more information on the templates, please visit:
            <br/>
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{color:"green"}}            >
              IEEE Xplore Publishing Templates
            </a>
          </Paragraph>
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
           Submission Guidelines
        </Title>
        <div
          style={{
            textAlign: "justify",
            padding: "15px 40px",
            backgroundColor: "#EFF0F2",
          }}
        >
          <Title
            style={{
              fontSize: paragraphFontSize,
              fontFamily: "Inter, sans-serif",
              fontWeight: "800",
              color: "black",
              margin: 0,
            }}
          >
            Double-Blind Peer Review
          </Title>
          <Paragraph
            style={{
              textAlign: "justify",
              fontSize: paragraphFontSize, // Adjust as needed
              color: "black",
              margin: 0, // Remove top and bottom margin for Title
              padding: "10px 0px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "400",
              lineHeight: "2rem",
            }}
          >
            ICAST 2025 follows a double-blind peer review methodology to ensure
            fairness and objectivity in the review process. To comply with this
            requirement:
          </Paragraph>
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
              Remove Author Details: Ensure that the manuscript and abstract do
              not include any information identifying the authors or their
              affiliations.</li>
           
                <li>Names of authors or affiliations.</li>
                <li>
                  Acknowledgments or funding information that reveals the
                  author’s identity.
                </li>
            <li>
              Consequences of Non-Compliance: Submissions containing
              identifiable information will be disqualified from the review
              process.
            </li>
          </ul>
          <div style={{ textAlign: "justify"}}>
            <Title
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize,
                fontFamily: "Inter, sans-serif",
                fontWeight: "800",
                color: "black",
                margin: 0,
              }}
            >
              {" "}
              Abstract Submission Requirements
            </Title>
            <Paragraph
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize, // Adjust as needed
                color: "black",
                margin: 0, // Remove top and bottom margin for Title
                padding: "10px 0px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "400",
                lineHeight: "2rem",
              }}
            >
              Abstracts must meet the following minimum criteria:
            </Paragraph>
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
              <li>The abstract should be between 100 and 250 words long.</li>
              <li>
                It should be a single paragraph that summarizes the research,
                conclusions, and implications.
              </li>
              <li>
                The abstract should avoid mathematical equations and tables.
              </li>
              <li>
                Must demonstrate the purpose of the paper, technical foundation,
                any preliminary results, and expected outcomes.
              </li>
            </ul>
          </div>
          <div style={{ textAlign: "justify" }}>
            <Title
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize,
                fontFamily: "Inter, sans-serif",
                fontWeight: "800",
                color: "black",
                margin: 0,
              }}
            >
              Review Process
            </Title>
            <Paragraph
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize, // Adjust as needed
                color: "black",
                margin: 0, // Remove top and bottom margin for Title
                padding: "10px 0px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "400",
                lineHeight: "2rem",
              }}
            >
              All abstracts will be reviewed by qualified experts from academia,
              industry, or government. Abstracts will be evaluated based on:
            </Paragraph>
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
              <li>Originality</li>
              <li>Technical merit</li>
              <li>Relevance to the conference themes</li>
              <li>Clarity of presentation</li>
            </ul>
          </div>
          <div style={{ textAlign: "justify" }}>
            <Title
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize,
                fontFamily: "Inter, sans-serif",
                fontWeight: "800",
                color: "black",
                margin: 0,
              }}
            >
              {" "}
              Author Notification
            </Title>
            <Paragraph
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize, // Adjust as needed
                color: "black",
                margin: 0, // Remove top and bottom margin for Title
                padding: "10px 0px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "400",
                lineHeight: "2rem",
              }}
            >
              Authors will be notified about the acceptance or rejection of
              their abstracts as per the schedule in the Publications Milestones
              section below.
            </Paragraph>
          </div>
          <div style={{ textAlign: "justify" }}>
            <Title
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize,
                fontFamily: "Inter, sans-serif",
                fontWeight: "800",
                color: "black",
                padding: "10px 0px",

                margin: 0,
              }}
            >
              {" "}
              Final Manuscript Guidelines
            </Title>
            <Paragraph
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize, // Adjust as needed
                color: "black",
                margin: 0, // Remove top and bottom margin for Title
                padding: "10px 0px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "400",
                lineHeight: "2rem",
              }}
            >
              Authors of accepted abstracts will be provided detailed
              instructions for preparing and submitting their final manuscripts.
              </Paragraph>
     
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
                <li>Formatting requirements as per IEEE Xplore standards.</li>
                <li>
                  Instructions for submitting manuscripts via the official
                  submission portal.
                </li>
                <li>
                  Clear deadlines for manuscript submission, revisions, and
                  final approval.
                </li>
              </ul>
              <Paragraph   style={{
                textAlign: "justify",
                fontSize: paragraphFontSize, // Adjust as needed
                color: "black",
                margin: 0, // Remove top and bottom margin for Title
                fontFamily: "Inter, sans-serif",
                fontWeight: "400",
                lineHeight: "2rem",
              }} >
              Authors must submit their final manuscripts by the stated deadline
              to be included in the conference proceedings.
            </Paragraph>
          </div>
        </div>

        <div style={{ textAlign: "justify", padding: "20px 40px" }}>
          <Title
            style={{
              fontSize: titleMedium,
              textAlign: "justify",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
            }}
          >
            Key Policies
          </Title>
        </div>
        <div
          style={{
            textAlign: "justify",
            padding: "10px 40px",
            backgroundColor: "#EFF0F2",
          }}
        >
          <div style={{ textAlign: "justify" }}>
            <Title
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize,
                fontFamily: "Inter, sans-serif",
                fontWeight: "800",
                color: "black",
                margin: 0,
              }}
            >
              {" "}
              Publication Policy
            </Title>
            <Paragraph
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize, // Adjust as needed
                color: "black",
                margin: 0, // Remove top and bottom margin for Title
                padding: "10px 0px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "400",
                lineHeight: "2rem",
              }}
            >
              Papers submitted must not have been published or be under
              consideration for publication elsewhere. Duplicate submissions
              will result in rejection or withdrawal from the
              proceedings.Authors will be required to sign a statement
              confirming the originality of their submission.
            </Paragraph>
          </div>
          <div style={{ textAlign: "justify" }}>
            <Title
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize,
                fontFamily: "Inter, sans-serif",
                fontWeight: "800",
                color: "black",
                margin: 0,
              }}
            >
              {" "}
              No Paper, No Podium & No Podium, No Paper
            </Title>
            <Paragraph
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize, // Adjust as needed
                color: "black",
                margin: 0, // Remove top and bottom margin for Title
                padding: "10px 0px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "400",
                lineHeight: "2rem",
              }}
            >
              Papers not submitted by the final manuscript deadline will not be
              eligible for presentation. Papers not presented at the conference
              will not be published in the proceedings.These policies aim to
              ensure high-quality contributions and eliminate no-shows.
            </Paragraph>
          </div>
          <div style={{ textAlign: "justify" }}>
            <Title
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize,
                fontFamily: "Inter, sans-serif",
                fontWeight: "800",
                color: "black",
                margin: 0,
              }}
            >
              {" "}
              Technology and Export Control
            </Title>
            <Paragraph
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize, // Adjust as needed
                color: "black",
                margin: 0, // Remove top and bottom margin for Title
                padding: "10px 0px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "400",
                lineHeight: "2rem",
              }}
            >
              Submissions must not include proprietary or restricted content.
              Authors are responsible for securing any necessary internal or
              government approvals.
            </Paragraph>
          </div>
        </div>

        <div style={{ textAlign: "justify", padding: "20px 40px" }}>
          <Title
            style={{
              fontSize: titleMedium,
              textAlign: "justify",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
            }}
          >
             Publications Milestones
          </Title>
         
        </div>
        <div style={{
            textAlign: "justify",
            padding: "10px 40px",
            backgroundColor: "#EFF0F2",
          }}>

<List
            bordered
            dataSource={[
              {
                key: "call-for-abstracts",
                text: "Call for Abstracts Opens: November 15, 2024",
              },
              {
                key: "abstract-deadline",
                text: "Abstract Submission Deadline: January 15, 2025",
              },
              {
                key: "abstract-notification",
                text: "Abstract Notification: March 1, 2025",
              },
              {
                key: "manuscript-deadline",
                text: "Manuscript Submission Deadline: May 15, 2025",
              },
              {
                key: "acceptance-notification",
                text: "Acceptance Notification: July 31, 2025",
              },
              {
                key: "registration-deadline",
                text: "Registration Deadline: September 1, 2025",
              },
              {
                key: "conference-dates",
                text: "Conference Dates: November 18–20, 2025",
              },
            ]}
            renderItem={(item) => (
              <List.Item
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize, // Adjust as needed
                  color: "black",
                  margin: 0, // Remove top and bottom margin for Title
                  padding: "10px 10px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "400",
                  lineHeight: "2rem",
                  backgroundColor:"white"
                }}
              >
                {item.text}
              </List.Item>
            )}
          />
          </div>

       
          <div style={{textAlign: "justify", padding: "20px 40px" }}>
          <Title
            style={{
              fontSize: titleMedium,
              textAlign: "justify",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
            }}
          >
            Why Publish with ICAST?
          </Title>
         
        </div>
        <div style={{
            textAlign: "justify",
            padding: "10px 40px",
            backgroundColor: "#EFF0F2",
          }}>
  <div style={{ textAlign: "justify", padding: "10px 0px" }}>
        
         
          <Paragraph
            style={{
              textAlign: "justify",
              fontSize: paragraphFontSize, // Adjust as needed
              color: "black",
              margin: 0, // Remove top and bottom margin for Title
              fontFamily: "Inter, sans-serif",
              fontWeight: "400",
              lineHeight: "2rem",
            }}
          >
            By submitting to ICAST 2025, you contribute to shaping the future of
            space science and technology while gaining visibility in a global
            platform. Accepted papers will be published in the IEEE Xplore
            Digital Library, ensuring wide dissemination among the international
            research community.
          </Paragraph>

          <div style={{ textAlign: "justify",padding:"20px 0px" }}>
           
           <Link to={"/screen-inprogress"}>
           <Button type="default" size="large">
                Submit Your Abstract Now
              </Button>
           </Link>
            
          </div>

        </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthorResources;
