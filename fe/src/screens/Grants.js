import React from "react";
import { Layout, Typography, Row, Col, Button, Space, Grid, Image } from "antd";

import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import "../Styles/ExpoStyles.css";
import m1 from "../Assets/m4.jpg";
import m2 from "../Assets/m5.jpg";
import m3 from "../Assets/m6.jpg";
import m4 from "../Assets/m7.jpg";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;
const { Content } = Layout;
const { useBreakpoint } = Grid;

const Grants = () => {
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
  const buttonsize = screens.xl
    ? "15px"
    : screens.lg
    ? "18px"
    : screens.md
    ? "16px"
    : "16px";
  return (
    <>
      <IcastHeader />
      <div
        style={{
          overflowX: "hidden",
          margin: "0 auto",
        }}
      >
        <Title
          style={{
            textAlign: "justify",
            padding: "20px 40px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            fontSize: titleFontSize,
            backgroundColor: "#EEF0F2",
          }}
        >
          Grants & Awards
        </Title>
        <Paragraph
          style={{
            textAlign: "justify",
            fontSize: paragraphFontSize,
            color: "#055EDD",
            padding: "0px 40px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
          }}
        >
          <Link to={"/"}>ICAST</Link> / Grants
        </Paragraph>

        <Row style={{ backgroundColor: "white" }} align={"top"}>
          <Col xs={24} md={16} lg={16}>
            <Paragraph
              style={{
                textAlign: "justify",
                fontSize: paragraphFontSize,
                color: "black",
                margin: 0,
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
                backgroundColor: "#EEF0F2",
                padding: "20px 40px",
              }}
            >
              ICAST 2025 is proud to offer exclusive Grants and Awards to
              support emerging talent, foster innovation, and recognize
              outstanding contributions in the fields of space science and
              technology. These initiatives underscore our commitment to
              encouraging participation, collaboration, and excellence. sponsor.
            </Paragraph>
            <Title
              style={{
                textAlign: "justify",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
           Conference Grants
            </Title>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
              }}
            >
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                The ICAST 2025 grants are designed to provide financial
                assistance and encourage participation from researchers and
                students. These grants aim to reduce barriers and empower
                individuals to contribute to advancing space science and
                technology.
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Grant Categories
              </Title>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                International Researcher Travel Sponsorship:
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
<ul>
  <li><strong style={{ fontWeight: "bold" }}>
                  Who Should Apply:
                </strong>{" "}
                First-time conference participants from schools, colleges, and
                undergraduate programs.</li>
  <li><strong style={{ fontWeight: "bold" }}>
                  What It Covers:
                </strong>{" "}
                Support for participation to encourage young researchers to
                engage with the global space community.</li>
</ul>
              
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Guidelines:
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>Applicants must submit their research paper by the
                submission deadline, the grant will be subject to the paper
                acceptance</li>
                  <li>Applicants must provide proof of their enrollment and a
                brief statement about their interest in space science and
                technology.</li>
                  <li>Grant recipients must present their paper at the
                  conference.</li>
                  <li>Priority will be given to participants demonstrating
                  significant scientific merit.</li>
                  
                </ul>
               
              </Paragraph>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <strong style={{ fontWeight: "bold" }}> How to Apply:</strong>{" "}
                Indicate your interest during the paper submission process.
              </Paragraph>
            </div>
            <Title
              style={{
                textAlign: "justify",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
               Conference Awards
            </Title>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
              }}
            >
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                To honor exceptional contributions to space science and
                technology, ICAST 2025 presents a range of awards across several
                categories. These awards recognize groundbreaking research,
                innovative ideas, and efforts to promote awareness and
                inclusivity.
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Award Categories
              </Title>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Best Paper Award:
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>Recognizes the highest quality research paper presented at
                  the conference.</li>
                  <li>Open to all paper authors based on originality, clarity,
                  and impact.</li>
                </ul>
               
              </Paragraph>

              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Best Poster Award:
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>Honors the most compelling poster presentation, emphasizing
                  clarity, creativity, and scientific contribution.</li>
                  <li>Open to all poster presenters.</li>
                </ul>
            
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Young Researcher Award:
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>
                  Celebrates exceptional work by early-career professionals
                  or students under the age of 35.
                  </li>
                </ul>
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Women in Space Award:
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>Highlights outstanding contributions by female researchers in advancing space
                  science.</li>
                </ul>
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Innovation in Space Technology Award:
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>
                  Recognizes efforts to push the boundaries of space technology and its applications.
                  </li>
                </ul>
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Space Awareness & Outreach Award:
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>
                  Celebrates initiatives that have made significant impacts in promoting space
                  awareness and education.
                  </li>
                </ul>
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Outstanding Contribution to Space Science and Technology Award:
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>
                  Honors lifetime achievements or remarkable efforts in advancing the space science
                  domain.
                  </li>
                </ul>
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Guidelines for Awards
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                Each award category has specific eligibility and selection criteria:
                <ul style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}>
                    <li><strong style={{fontWeight:"bold"}}>Eligibility:</strong> Applicants must have contributed to the conference through a paper,
                    poster, or session proposal.</li>
                    <li> <strong style={{fontWeight:"bold"}}>Selection Process:</strong> A panel of experts will evaluate submissions based on
                    originality, relevance, and impact.</li>
                    <li><strong style={{fontWeight:"bold"}}>Presentation Requirement:</strong> Award winners must attend the conference to receive
                    their recognition.</li>
                </ul>
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
               How to Nominate:
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>Participants can self-nominate or be nominated by peers, mentors, or institutions.</li>
                  <li>Nominations must include a detailed profile and summary of contributions.</li>
                </ul>
              
              </Paragraph>
            </div>
            <Title
              style={{
                textAlign: "justify",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
            3. Call to Action
            </Title>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
              }}
            >
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
               ICAST 2025 is your platform to showcase your talent, share your ideas, and be recognized
for your contributions. Whether you’re seeking support to attend or aiming to be celebrated
for your achievements, these opportunities are designed to inspire and empower.
              </Paragraph>
            
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                For further details or assistance, please contact:
                <br/>
                <ul>
                  <li>Email: grants@icast.pk</li>
                  <li>Phone: +92-51-907-5799</li>
                </ul>
                
               
              </Paragraph>
              
            </div>
            
          
          </Col>

          <Col xs={24} md={8} lg={8} style={{ textAlign: "center" }}>
            <Image
              src={m1}
              alt="Image 1"
              preview={false}
              style={{
                width: "90%",
                height: "auto",
                marginBottom: "16px",
                borderRadius: "8px",
              }}
            />
            <Image
              src={m2}
              alt="Image 2"
              preview={false}
              style={{
                width: "90%",
                height: "auto",
                marginBottom: "16px",
                borderRadius: "8px",
              }}
            />
            <Image
              src={m3}
              alt="Image 3"
              preview={false}
              style={{
                width: "90%",
                height: "auto",
                marginBottom: "16px",
                borderRadius: "8px",
              }}
            />
            <Image
              src={m4}
              alt="Image 4"
              preview={false}
              style={{
                width: "90%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Grants;
