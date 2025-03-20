import React from "react";
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
  return (
    <>
      <IcastHeader />
      <div style={{ backgroundColor: "#272B3A", }}>
        <FullWidthCarousel />
        <div>
          <EventCarousel />
          <ConferenceIntro />
          <ICastForum />
          <Sponsors />
          <SocialFeeds/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ICast;
