import React from "react";
import { Layout, Typography, Row, Col, Card, Image, Button, Grid } from "antd";
import m1 from "../Assets/m1.jpg";
import m2 from "../Assets/m2.jpg";
import m3 from "../Assets/m3.jpg";
import m4 from "../Assets/e3.jpg";
import m5 from "../Assets/e4.jpg";

import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const aimsData = [
  {
    id: 1,
    title: "A Gateway to Innovation",
    description: `ICAST 2025 isn’t just a conference—it’s a think tank of ideas. From groundbreaking research to transformative technologies, this is where the future of space technology takes shape. Engage with:
    (a). Revolutionary Concepts in Space Science, Technology, and their Applications.
    (b). Interdisciplinary Insights that link space science with solutions for climate change, disaster management, and global sustainability.
    At ICAST, innovation isn’t showcased—it’s lived.`,
  },
  {
    id: 2,
    title: "A Global Convergence",
    description:
      "For the first time, Pakistan brings together international visionaries, researchers, and industry leaders on a platform of unparalleled collaboration. (a). Meet pioneers shaping global policies and technologies. (b). Participate in dialogues that break barriers and transcend disciplines. (c). Forge alliances that will ripple across industries and borders. This isn’t just a gathering; it’s a global movement.",
  },
  
  {
    id: 3,
    title: "Transformative Learning Experiences",
    description:
      "Learning at ICAST goes beyond lectures: (a). Workshops designed to empower participants with hands-on expertise in satellite technology and space systems. (b). Immersive Exhibits featuring cutting-edge tools, models, and innovations from leading organizations. (c). Interactive Panels where the audience doesn’t just listen but becomes part of the narrative. Every moment at ICAST is a step toward redefining what’s possible.",
  },
  
  {
    id: 4,
    title: "Recognition and Celebration",
    description:
      "Celebrate excellence with awards that highlight groundbreaking contributions in research, innovation, and outreach. Be inspired by stories of triumph from: (a). Young researchers challenging norms. (b). Visionaries transforming ideas into realities. (c). Organizations making impactful contributions to global space missions. Because at ICAST, every achievement is a shared victory.",
  },
  
  {
    id: 5,
    title: "Networking Like Never Before",
    description:
      "ICAST 2025 blends professionalism with camaraderie in ways no other event does: (a). Cultural evenings that blend science with the vibrancy of Pakistan’s heritage. (b). Dedicated networking sessions over tea, luncheons, and stargazing nights. (c). Opportunities to meet not just professionals, but mentors, collaborators, and lifelong friends. When you attend ICAST, you’re not just part of an event—you’re part of a community.",
  },  
  {
    id: 6,
    title: "What Awaits You?",
    description:
      "ICAST 2025 is more than an event; it’s a revolution. Don’t just witness the change—become part of it.",
  },
  
];

const AimsPage = () => {
  const screens = useBreakpoint();
  const titleFontSize = screens.xl
    ? "45px"
    : screens.lg
    ? "40px"
    : screens.md
    ? "35px"
    : "28px";

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
      <Layout style={{ overflowX: "hidden", backgroundColor: "white" }}>
        <Content style={{ margin: "0 auto" }}>
      
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
            WHY ATTEND ICAST 2025?
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
            ICAST / Why Attend?
          </Paragraph>

          <Row
            gutter={[0, 0]}
            style={{ margin: 0, padding: 0,  }}
          >
            <Col xs={24} lg={18}>
            <Paragraph  style={{
                    backgroundColor: "#EFF0F2",

                      textAlign: "start",
                      fontSize: paragraphFontSize,
                      color: "black",
                      margin: 0, // Remove top and bottom margin for Title
                      padding:"10px 20px"
                    }}
                  >
         In a world where space is no longer a frontier but a foundation, the International Conference
on Applications of Space Science and Technology (ICAST 2025) invites you to embark on a
journey of discovery, collaboration, and transformation. Here’s why you can’t afford to miss
this landmark event.
         </Paragraph>
       
              {aimsData.map((aim, index) => (
                <div
                  key={aim.id}
                  bordered={false}
                  style={{
                    backgroundColor: "#EFF0F2",
                    marginBottom: 0, // Remove margin between cards
                    border: "none",
                    padding: "10px 20px", // Remove padding inside the card
                  }}
                >
                     
                  <Title
                    style={{
                      textAlign: "start",
                      fontSize: paragraphFontSize,
                      fontWeight: "bold",
                      color: "black",
                      margin: 0, // Remove top and bottom margin for Title
                    }}
                  >
                    {index + 1}. {aim.title}
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: paragraphFontSize,
                      lineHeight: "1.8",
                      color: "#595959",
                      textAlign: "start",
                      margin: 0, // Remove top and bottom margin for Paragraph
                    }}
                  >
                    {aim.description}
                  </Paragraph>
                </div>
              ))}
               <div style={{ textAlign: "start", margin: "10px ",
             }}>
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: "#1F5223",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "8px 16px",
                  fontSize: "16px",
                  width: "280px",
                }}
              >
                Register Now
              </Button>
          
            </div>
            </Col>

            <Col xs={24} lg={6} style={{ textAlign: "center" }}>
              <Image
                src={m1}
                alt="Drive Global Collaboration"
                preview={false}
                style={{
                  borderRadius: "8px",
                  width: "80%",
                  marginBottom: "20px",
                  objectFit: "cover",
                }}
              />
              <Image
                src={m2}
                alt="Advance Research and Innovation"
                preview={false}
                style={{
                  borderRadius: "8px",
                  width: "80%",
                  marginBottom: "20px",
                  objectFit: "contain",
                }}
              />
              <Image
                src={m3}
                alt="Promote Space Technology"
                preview={false}
                style={{
                  borderRadius: "8px",
                  width: "80%",
                  marginBottom: "20px",
                  objectFit: "cover",
                }}
              />
               <Image
                src={m4}
                alt="Promote Space Technology"
                preview={false}
                style={{
                  borderRadius: "8px",
                  width: "80%",
                  marginBottom: "20px",
                  objectFit: "cover",
                }}
              />
                <Image
                src={m5}
                alt="Promote Space Technology"
                preview={false}
                style={{
                  borderRadius: "8px",
                  width: "80%",
                  marginBottom: "20px",
                  objectFit: "cover",
                }}
              />
            </Col>
          </Row>
         
        </Content>
      </Layout>
      <Footer />
    </>
  );
};

export default AimsPage;
