import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/reset.css";
import "../Styles/Linkages.css";
import IcastHeader from "../Layouts/IcastHeader";
import FullWidthCarousel from "../Components/Slider";
import EventCarousel from "../Components/EventCarousel";
import ConferenceIntro from "../Components/ConferenceIntro";
import ICastForum from "../Components/ICastForum";
import Sponsors from "../Components/Sponsors";
import Footer from "../Layouts/IcastFooter";
import SocialFeeds from "./SocialFeeds";

const ICast = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsModalVisible(true);

    // Check screen width on load
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
    <Modal
      title="🚀 Call for Papers Now Open!"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      style={{ top: 120 }}
      bodyStyle={{
        fontSize: "18px",
        lineHeight: "1.8",
        padding: "24px",
        ...(isMobile && {
          maxHeight: "300px",
          overflowY: "auto",
        }),
      }}
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
          OK
        </Button>,
      ]}
    >
      <p>
        <strong style={{ fontSize: "20px" }}>
          Submit your research to the <u>International Conference on Applications of Space Science and Technology (ICAST 2025)</u>
        </strong>
      </p>

      <p>
        <strong>📅 Conference Dates:</strong>{" "}
        <span style={{ fontSize: "17px" }}>
          November 18–20, 2025 – Islamabad, Pakistan
        </span>
      </p>

      <p>
       <div>
  <strong>📝 Full Manuscript Submissions</strong> are now open under two tracks:
  <ul>
    <li><b>Abstract-Based Submissions</b> (for accepted abstracts)</li>
    <li><b>Direct Submissions</b> (no prior abstract required)</li>
  </ul>
</div>

          <p>
      
      </p>

    
       Be a part of the <strong>largest space science conference in Pakistan</strong> and contribute to the global dialogue on space innovation, sustainability, and technology advancement.
      </p>

      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        <a
          href="https://cms.cressofterp.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1890ff", textDecoration: "underline" }}
        >
          📤 Submit Your Paper Now
        </a>
      </p>

      <p>
        <strong>🕓 Submissions accepted until:</strong>{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>May 25, 2025</span>
      </p>
    </Modal>


      <IcastHeader />
      <div style={{ backgroundColor: "#272B3A" }}>
        <FullWidthCarousel />
        <div>
          <EventCarousel />
          <ConferenceIntro />
          <ICastForum />
          <Sponsors />
          <SocialFeeds />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ICast;
