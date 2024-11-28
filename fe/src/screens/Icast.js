import React from "react";
import "antd/dist/reset.css";
import "../Styles/Linkages.css";
import SpeakerCards from "../Components/SpeakerCards";
import IcastHeader from "../Layouts/IcastHeader";
import FullWidthCarousel from "../Components/Slider";
import EventCarousel from "../Components/EventCarousel";
import ConferenceIntro from "../Components/ConferenceIntro";
import ICastForum from "../Components/ICastForum";
import Sponsors from "../Components/Sponsors";
import Footer from "../Layouts/IcastFooter";
import SubFooter from "../Layouts/SubFooter";



const ICast = () => {
  return (
    <>
      <IcastHeader />

      <div style={{ backgroundColor: "#272B3A",padding:0 }}>
        <FullWidthCarousel />
        <div>
          <EventCarousel />
          <ConferenceIntro />
          <ICastForum />
          {/* <SpeakerCards /> */}

          <Sponsors />
        </div>
      </div>
      {/* <SubFooter/> */}
      <Footer />
    </>
  );
};

export default ICast;
