import React from "react";
import { Typography } from "antd";
import "antd/dist/reset.css";
import "../Styles/Linkages.css";
import SpeakerCards from "../Components/SpeakerCards";
import FooterComponent from "../Layouts/FooterComponent";
import IcastHeader from "../Layouts/IcastHeader";
import CountdownTimer from "../Components/CountdownTimer";
import FullWidthCarousel from "../Components/Slider";
import ICastEvents from "../Components/ICastEvents";
import EventCarousel from "../Components/EventCarousel";
import ConferenceIntro from "../Components/ConferenceIntro";

const { Title, Paragraph } = Typography;

const ICast = () => {
  return (
    <>
      <IcastHeader />
      <div style={{ backgroundColor: "#272B3A" }}>
        <FullWidthCarousel />
      <div >
      <EventCarousel />
      <ConferenceIntro/>
        <SpeakerCards />
        <ICastEvents />
      </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default ICast;
