import React, { useEffect, useState } from "react";
import "antd/dist/reset.css";
import "../Styles/Linkages.css";
import "../Styles/SliderStyles.css";

import IcastHeader from "../Layouts/IcastHeader";
import FullWidthCarousel from "../Components/Slider";
import EventCarousel from "../Components/EventCarousel";
import ConferenceIntro from "../Components/ConferenceIntro";
import ICastForum from "../Components/ICastForum";
import Sponsors from "../Components/Sponsors";
import Footer from "../Layouts/IcastFooter";
import SocialFeeds from "./SocialFeeds";
import CountdownModal from "../Components/CountdownModel";


const ICast = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsModalVisible(true);

    // Check screen width on load
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

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
{/* <CountdownModal handleCancel={handleCancel} handleOk={handleOk} isModalVisible={isModalVisible} isMobile={isMobile} /> */}


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
