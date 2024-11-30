import React from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Image,
  Button,
  Grid,
  Space,
} from "antd";
import m1 from "../Assets/suparco2.jpg";
import m2 from "../Assets/ist2.JPG";
import m3 from "../Assets/m3.jpg";
import m4 from "../Assets/e3.jpg";
import m5 from "../Assets/e4.jpg";

import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import "../Styles/HomeStyles.css";
const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Genisis = () => {
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
      <Layout style={{ overflowX: "hidden", backgroundColor: "white" }}>
        <Content style={{ margin: "0 auto" }}>
          <Title
            style={{
              textAlign: "start",
              padding: "20px 40px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              fontSize: titleFontSize,
              backgroundColor: "#EEF0F2",
            }}
            className="expo-header"
          >
            GENESIS
          </Title>
          <Paragraph
            style={{
              textAlign: "start",
              fontSize: paragraphFontSize,
              color: "black",
              padding: "0px 40px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
            }}
          >
            ICAST / About ICAST / Genisis
          </Paragraph>

          <Row
            gutter={[0, 0]}
            style={{ margin: 0, padding: 0, marginBottom: "30px" }}
          >
            <Col xs={24} md={16} lg={16}>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  margin: 0,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                  backgroundColor: "#EEF0F2",
                  padding: "20px 40px",
                }}
              >
                The International Conference on Applications of Space Science
                and Technology (ICAST) is Pakistan’s premier platform for
                advancing the frontiers of space science and technology. This
                biennial event represents a historic merger of two esteemed
                conferences—the International Conference on Aerospace Science
                and Engineering (ICASE) by the Institute of Space Technology
                (IST) and the International Conference on Space (ICS) by the
                Pakistan Space and Upper Atmosphere Research Commission
                (SUPARCO). Together, these two legacies form a global forum
                fostering collaboration, innovation, and knowledge exchange.
              </Paragraph>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: titleMedium,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                  padding: "10px 40px",
                }}
              >
                1. About Suparco & ICS
              </Title>
              <div
                style={{
                  marginBottom: "20px",
                  backgroundColor: "#EFF0F2",
                  padding: "10px 40px",
                }}
              >
                <Title
                  style={{
                    textAlign: "start",
                    fontSize: paragraphFontSize,
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Pakistan Space and Upper Atmosphere Research Commission
                  (SUPARCO)
                </Title>
                <Paragraph
                  style={{
                    textAlign: "start",
                    fontSize: paragraphFontSize,
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  The Pakistan Space and Upper Atmosphere Research Commission
                  (SUPARCO) has been the driving force behind Pakistan’s space
                  ambitions since its inception in 1961. As the national space
                  agency, SUPARCO’s mission is to employ space technology for
                  peaceful purposes, ensuring its application benefits
                  Pakistan’s socio-economic development and national security.
                  With a vision to position Pakistan as a key contributor in the
                  global space community, SUPARCO has played a pioneering role
                  in satellite development, space exploration, and technology
                  applications for societal advancement. SUPARCO’s contributions
                  to the country include the development and launch of
                  satellites like Badr, PakSat, and PRSS, which have supported
                  communication, Earth observation, disaster management, and
                  climate monitoring. By fostering international collaborations
                  with organizations such as APSCO and ISNET, SUPARCO has
                  enhanced Pakistan’s technical expertise and positioned the
                  country as an emerging player in the global space arena.
                  SUPARCO’s International Conference on Space (ICS), initiated
                  in 2012, brought together policymakers, researchers, and
                  industry leaders to discuss space technology applications and
                  governance. Over three successful editions, ICS became a
                  platform for shaping the discourse on space policy and
                  fostering international partnerships. This legacy now thrives
                  under ICAST, amplifying SUPARCO’s vision of advancing space
                  science for societal benefit.
                </Paragraph>
              </div>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: titleMedium,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                  padding: "10px 40px",
                }}
              >
                2. IST & ICASE
              </Title>
              <div
                style={{
                  marginBottom: "20px",
                  backgroundColor: "#EFF0F2",
                  padding: "10px 40px",
                }}
              >
                <Title
                  style={{
                    textAlign: "start",
                    fontSize: paragraphFontSize,
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Institute of Space Technology (IST)
                </Title>
                <Paragraph
                  style={{
                    textAlign: "start",
                    fontSize: paragraphFontSize,
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  The Institute of Space Technology (IST) is a leading
                  institution in Pakistan, renowned for its academic and
                  research excellence in aerospace, space sciences, and
                  technology. Since its establishment in 2002, IST has emerged
                  as a hub of innovation, fostering a culture of discovery,
                  research, and technological advancement. With a vision to lead
                  Pakistan into a new era of scientific exploration and
                  self-reliance, IST is dedicated to inspiring the next
                  generation of space scientists and engineers while
                  contributing to the nation’s space capabilities. IST plays a
                  pivotal role in shaping Pakistan’s space sector by offering
                  specialized academic programs in Aerospace Engineering,
                  Avionics, and Space Science. It actively engages in research
                  on satellite technology, Global Navigation Satellite Systems
                  (GNSS), and climate monitoring. IST’s partnerships with
                  industry and government institutions further bridge the gap
                  between theoretical knowledge and practical applications,
                  promoting indigenous technological solutions for national and
                  global challenges. The legacy of IST’s International
                  Conference on Aerospace Science and Engineering (ICASE),
                  launched in 2009, is a testament to its leadership in
                  aerospace research. Over its seven editions, ICASE provided a
                  global platform for cutting-edge research, featuring technical
                  presentations, collaborative opportunities, and publications
                  in prestigious outlets like IEEE. Today, this legacy continues
                  under ICAST, furthering IST’s commitment to advancing
                  aerospace and space technologies.
                </Paragraph>
              </div>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: titleMedium,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                  padding: "10px 40px",
                }}
              >
                3. A Convergence of Excellence
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
                    textAlign: "start",
                    fontSize: paragraphFontSize,
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  ICAST builds upon the rich histories of ICASE and ICS to bring
                  together the brightest minds in academia, industry, and
                  government. This merger was formalized to create a unified
                  platform for:
                  <br />
                  <br />
                  (a). Showcasing groundbreaking research in Space Science,
                  Technology, and their Applications.
                  <br />
                  (b). Discussing space policies and governance.
                  <br />
                  (c).Exploring the role of space science in solving global
                  challenges like climate change, disaster management, and
                  resource sustainability.
                </Paragraph>
              </div>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: titleMedium,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                  padding: "10px 40px",
                }}
              >
                4. ICAST Aims & Objectives
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
                    textAlign: "start",
                    fontSize: paragraphFontSize,
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "500",
                  }}
                >
                
                  <strong
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    (a).{" "}  Drive Global Collaboration:
                  </strong>{" "}
                  Create an international platform where scientists,
                  researchers, and industry experts can exchange insights and
                  collaborate on innovative space technologies that address
                  today’s global challenges.
                  <br />
                  <br />
                 <strong  style={{
                      fontWeight: "bold",
                    }}>   (b). Advance Research and Innovation:</strong> Support
                  pioneering research in space science by providing participants
                  with opportunities to present, share, and publish their work,
                  fostering a culture of innovation with SUPARCO and IST at the
                  forefront.
                  <br />
                  <br />
                  
                  <strong  style={{
                      fontWeight: "bold",
                    }}>
                   (c). Promote Space Technology for Sustainable Development:
                  </strong>
                  Emphasize the role of space technology in addressing
                  sustainability goals, including climate monitoring, disaster
                  management, and environmental protection, with SUPARCO leading
                  these critical initiatives.
                  <br />
                  <br />
                 <strong  style={{
                      fontWeight: "bold",
                    }}>
                    {" "}
                    (d). Engage and Inspire the Next Generation:
                  </strong>{" "}
                  Encourage youth involvement in space science through
                  specialized sessions and interactive forums, promoting STEM
                  education and empowering the next generation of space leaders.
                  <br />
                  <br />
                  {" "}
                  <strong  style={{
                      fontWeight: "bold",
                    }}>(e).Facilitate Dialogue on Space Policy and Law:</strong>
                  Foster discussions on space law, governance, and
                  sustainability among policymakers, researchers, and industry
                  leaders, reinforcing SUPARCO’s role in shaping international
                  space policy.
                  <br />
                  <br />
                  
                  <strong  style={{
                      fontWeight: "bold",
                    }}>(f).{" "} Strengthen Skills through Hands-On Training:</strong>
                  Empower participants with hands- on experience in advanced
                  space technologies through interactive workshops and training
                  sessions, equipping them to apply these skills across
                  scientific, commercial, and societal projects.
                  <br />
                  <br />
                  
                  <strong  style={{
                      fontWeight: "bold",
                    }}>
                   (g).{" "} Highlight SUPARCO and IST’s Leadership in Space Science:
                  </strong>{" "}
                  Showcase SUPARCO and the Institute of Space Technology (IST)
                  as leaders in space science and technology, featuring their
                  groundbreaking research, collaborations, and contributions to
                  global and national space missions.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} lg={8} style={{ padding: "0px 20px" }}>
              <Image
                src={m1}
                alt="Drive Global Collaboration"
                preview={false}
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  marginBottom: "20px",
                  objectFit: "cover",
                  height: "50%",
                }}
              />
              <Image
                src={m2}
                alt="Advance Research and Innovation"
                preview={false}
                style={{
                  borderRadius: "8px",
                  width: "100%",
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
                  width: "100%",
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
                  width: "100%",
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
                  width: "100%",
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

export default Genisis;
