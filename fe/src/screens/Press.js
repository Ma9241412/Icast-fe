import React from "react";
import { Layout, Typography, Row, Col, Card, Grid } from "antd";
import Footer from "../Layouts/IcastFooter";
import IcastHeader from "../Layouts/IcastHeader";
import { Link } from "react-router-dom";

const {  Content } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Press = () => {
  const screens = useBreakpoint();
  const titleFontSize = screens.xl
    ? "42px"
    : screens.lg
    ? "48px"
    : screens.md
    ? "46px"
    : "36px";

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
      <Layout
        style={{
          overflowX: "hidden",
          backgroundColor: "white",
        }}
      >
        <Title
          style={{
            textAlign: "start",
            marginBottom: "30px",
            backgroundColor: "#EFF0F2",
            padding: "10px 40px",
            fontSize: titleFontSize,
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
          }}
        >
          Pakistan to lead global dialogue on space applications with ICAST 2025 
        </Title>
        <Paragraph
          style={{
            textAlign: "start",
            marginBottom: "30px",
            fontSize: paragraphFontSize,
            color: "#055EDD",
            padding: "0px 40px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
          }}
        >
          <Link to={"/"}>ICAST</Link> / Press Release
        </Paragraph>
        <Content>
          <div style={{}}>
            <Paragraph
              style={{
                backgroundColor: "#EFF0F2",
                textAlign: "justify",
                fontSize: paragraphFontSize,
                color: "black",
                margin: 0, // Remove top and bottom margin for Title
                padding: "10px 40px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
                lineHeight: "2rem",
              }}
            >
              Islamabad, December 2024{" "}
              <strong style={{ fontWeight: "bold" }}>
                The Pakistan Space & Upper Atmosphere Research Commission
                (SUPARCO) and the Institute of Space Technology (IST)
              </strong>{" "}
              announce the International Conference on Applications of Space
              Science and Technology (ICAST 2025), scheduled to take place from
              November 18 to 20, 2025, at the Institute of Space Technology,
              Islamabad. This groundbreaking conference is set to become the
              largest gathering of space science and technology experts ever
              hosted in Pakistan, bringing together renowned global leaders,
              visionary researchers, and pioneering industry professionals under
              the theme "Space for Sustainable Development. "
              <br />
              ICAST 2025 represents the fusion of the rich legacies of IST’s
              International Conference on Aerospace Science and Engineering
              (ICASE) and SUPARCO’s International Conference on Space (ICS).
              This collaboration establishes a transformative platform for
              advancing space science, fostering innovation, and addressing some
              of the most pressing challenges of our time. With its focus on
              global sustainability and cutting-edge advancements, the
              conference underscores Pakistan’s commitment to becoming a major
              player in the international space community.
              <br />
              The conference will delve into a wide range of topics across eight
              thematic tracks, including Aeronautics & Astronautics, Satellite
              Technology, Positioning, Navigation & Timing, Remote Sensing &
              Geographic Information Science, Environmental Science & Climate
              Change, Information & Communication Technologies, Astronomy &
              Astrophysics, and Space Law, Management & Outreach. These tracks
              are designed to inspire transformative ideas and groundbreaking
              solutions that redefine the boundaries of space science and
              technology while addressing critical global challenges such as
              climate change and sustainable development.
              <br />
              ICAST 2025 is more than just a scientific gathering; it is an
              opportunity to showcase the future of space science and
              technology. Researchers, academics, industry professionals, and
              students are invited to participate in this historic event. The
              Call for Abstracts is now open, encouraging submissions that
              reflect cutting-edge research and innovative applications across
              various disciplines. Selected abstracts will proceed to full
              manuscript submission, offering contributors unparalleled
              visibility and the chance to present their work to a diverse
              international audience.
              <br />
              Beyond the exchange of ideas, ICAST 2025 will feature inspiring
              keynote speeches by global space pioneers, interactive workshops,
              and hands-on training sessions. The event will also host a product
              exhibition, showcasing the latest advancements in space
              technology, and provide extensive networking opportunities to
              foster collaborations spanning academia, industry, and government
              sectors. This conference promises to be a convergence of thought
              leaders and innovators, creating a vibrant ecosystem for
              interdisciplinary dialogue and partnerships.
              <br />
              The conference is organized with the support of the Higher
              Education Commission (HEC) of Pakistan and the National Center of
              GIS and Space Applications (NCGSA), further cementing its position
              as a milestone event in the advancement of space science and
              technology in the region.
              <br />
              Join us for ICAST 2025, where innovation meets collaboration, and
              the future of space science takes center stage. For more details
              on abstract submissions, registration, and sponsorship
              opportunities,visit{" "}
              <strong style={{ fontWeight: "bold" }}>
                <Link to={"https://icast.pk/"}>www.icast.pk</Link>
              </strong>
              .
            </Paragraph>
          </div>
        </Content>
      </Layout>
      <Footer />
    </>
  );
};

export default Press;
