import React from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Button,
  Card,
  Space,
  Grid,
  Image,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  DownloadOutlined,
  FileTextOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import "../Styles/ExpoStyles.css";
import m1 from "../Assets/m4.jpg";
import m2 from "../Assets/m5.jpg";
import m3 from "../Assets/m6.jpg";
import m4 from "../Assets/m7.jpg";
import { Link } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
const { useBreakpoint } = Grid;

const Expositions = () => {
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
            textAlign: "start",
            padding: "20px 40px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            fontSize: titleFontSize,
            backgroundColor: "#EEF0F2",
          }}
          className="expo-header"
        >
          Exposition & Sponsors
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
          ICAST / Exposition & Sponsors
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
              The Exposition and Sponsorship Program at ICAST 2025 provides an
              unparalleled platform for organizations, startups, and innovators
              to showcase their contributions to space science and technology.
              As the largest space event in Pakistan, ICAST 2025 attracts a
              diverse audience of global experts, policymakers, researchers, and
              enthusiasts, offering unmatched visibility and networking
              opportunities. Join us in shaping the future of space science by
              exhibiting your innovations or supporting this landmark event as a
              sponsor.
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
               Exhibit at ICAST 2025
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
                <ul>
                  <li><strong style={{ fontWeight: "bold" }}>
                  {" "}
                  Global Audience Reach:
                </strong>{" "}
                Present your ideas and innovations to researchers, industry
                leaders, policymakers, and future space leaders from across the
                world.</li>
                  <li><strong style={{ fontWeight: "bold" }}>
                  {" "}
                  Networking Opportunities:{" "}
                </strong>{" "}
                Forge meaningful connections with decision-makers,
                collaborators, and potential customers.</li>
                  <li><strong style={{ fontWeight: "bold" }}>
                  {" "}
                  Brand Visibility:
                </strong>{" "}
                Gain recognition in conference materials, on-site branding, and
                digital platforms.</li>
                  <li><strong style={{ fontWeight: "bold" }}>
                  {" "}
                  Cutting-Edge Insights:
                </strong>{" "}
                Engage with the latest advancements in space science and
                technology by connecting with other exhibitors and participants.</li>
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
                What’s Included?
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
                  <li>Customizable booth options in a strategically designed
                  exposition area.</li>
                  <li>Access to high-traffic zones with maximum attendee
                  interaction.</li>
                  <li>Complimentary exhibitor badges for team members.</li>
                  <li>Inclusion in the official exhibitor directory distributed
                  to all attendees.</li>
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
              Sponsor ICAST 2025
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
                Sponsorship of ICAST 2025 places your organization in a
                leadership position within the global space community. It
                highlights your commitment to advancing space science while
                offering tailored opportunities to enhance your brand’s
                visibility.
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
                Benefits of Sponsorship:
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
                <ul>
                  <li> <strong style={{ fontWeight: "bold" }}>
                  Prime Visibility:
                </strong>{" "}
                Your brand will be featured on conference banners, digital
                platforms, and marketing materials.</li>
                  <li><strong style={{ fontWeight: "bold" }}>
                  {" "}
                  Thought Leadership:
                </strong>{" "}
                Gain exclusive opportunities to sponsor sessions, workshops, or
                networking events.</li>
                  <li><strong style={{ fontWeight: "bold" }}>
                  Strategic Engagement:
                </strong>{" "}
                Directly connect with key stakeholders, decision-makers, and
                policymakers.</li>
                  <li><strong style={{ fontWeight: "bold" }}>
                  Tailored Packages:
                </strong>{" "}
                Choose from a range of sponsorship tiers to suit your goals or
                collaborate with us to create a custom package.</li>
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
              Explore Sponsorship and Exhibit Opportunities
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
                Discover tailored opportunities to showcase your brand and
                innovations at ICAST 2025. Our detailed prospectus provides
                comprehensive information about sponsorship packages, exhibit
                options, and the benefits of partnering with Pakistan’s largest
                space science event.
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
                What’s Inside the Prospectus?
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
                  <li>Sponsorship tiers and their exclusive benefits.</li>
                  <li>Booth options and details for exhibitors.</li>
                  <li>Branding and visibility opportunities.</li>
                  <li>Customizable packages to meet your specific goals.</li>
                </ul>
               
              </Paragraph>
              <div style={{ textAlign: "left" }}>
                <Link to={"/screen-inprogress"}>
                <Button size="large">Download Sponsorship & Exhibit Prospectus</Button>
                </Link>
              </div>
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
              Featured Exhibitors and Sponsors
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
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                National Center of GIS & Space Applications
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
                The National Center of GIS and Space Applications (NCGSA) stands
                as a cornerstone of Pakistan’s scientific and technological
                advancement in GIS and space applications. Established in 2020
                under the leadership of the Institute of Space Technology (IST),
                NCGSA represents a pioneering consortium of seven specialized
                research laboratories across leading academic institutions in
                Pakistan. The center’s mission aligns with Pakistan’s broader
                goals of fostering scientific innovation, enhancing
                technological capacities, and leveraging space science for
                socio-economic uplift. The center’s research spans diverse and
                critical domains, including Geo Forensics, Mineral Inventory,
                Astronomy, Satellite Design and Development, Satellite
                Navigation Systems, and Remote Sensing Applications. NCGSA’s
                labs also focus on pressing challenges such as climate studies,
                urban planning, natural disaster management, and agricultural
                remote sensing, ensuring significant contributions to the
                nation&#39;s sustainable development goals. NCGSA’s objectives
                extend beyond research; the center is a driving force in
                capacity building, education, and outreach in the space sector.
                By fostering collaboration between academia, industry, and
                government, NCGSA continues to develop specialized human
                resources and national capacity in space science and technology.
                As a proud sponsor and partner of ICAST 2025, NCGSA embodies a
                commitment to advancing space science and innovation,
                championing Pakistan’s leadership in the global space community.
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
               Register Now!
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
                <ul>
                  <li><strong style={{ fontWeight: "bold" }}>Exhibitors:</strong>{" "}
                Reserve your space today to connect with a global audience and
                showcase your innovation at Pakistan’s premier space event.</li>
                  <li><strong style={{ fontWeight: "bold" }}>
                  Sponsors:
                </strong>{" "}
                Partner with us to amplify your brand’s impact and contribute to
                advancing the frontiers of space science and technology.</li>
                </ul>
              
              </Paragraph>
              <div style={{ textAlign: "left",marginBottom:"20px" }}>
                <Space>
                 <Link to={"/screen-inprogress"}>
                 <Button size="large">Exhibit at ICAST 2025</Button>
                 <Button size="large">Become a Sponsor</Button>
                 </Link>
                </Space>
              </div>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                For inquiries, contact us at:
                <br/>
                <ul>
                  <li>Email: expo@icast.pk</li>
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

export default Expositions;
