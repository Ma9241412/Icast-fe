import React from "react";
import { Row, Typography, Divider, Col, Image } from "antd";
import "antd/dist/reset.css";
import "../Styles/Linkages.css";
import SpeakerCards from "../Components/SpeakerCards";
import ToDoList from "../Components/ToDoList";
import ImportantDates from "../Components/ImportantDates";
import RegistrationFee from "../Components/RegistrationFee";
import ConferenceHighlights from "../Components/ConferenceHighlights";
import ConferenceRegistration from "../Components/ConferenceRegistration";
import ManuscriptSubmission from "../Components/ManuscriptSubmission";
// import Downloads from "../Components/Downloads";
import Proceedings from "../Components/Proceedings";
import FooterComponent from "../Layouts/FooterComponent";
import IcastHeader from "../Layouts/IcastHeader";
import img from "../Assets/icastw.png";
import CountdownTimer from "../Components/CountdownTimer";
import FullWidthCarousel from "../Components/Slider";
import ICastEvents from "../Components/ICastEvents";

const { Title, Paragraph } = Typography;

const ICast = () => {
  return (
    <>
      <IcastHeader />
      <div style={{ padding: "10px", backgroundColor: "#272B3A" }}>
      <FullWidthCarousel/>
        <CountdownTimer/>

        <div className="content-section">
  
              <Title
                style={{
                  fontSize: "45px",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#ffffff",
                }}
              >
                Introduction
              </Title>
              {/* <Divider
                className="ncgsa-divider"
                style={{ borderColor: "#1a8cd8", borderWidth: "2px" }}
              /> */}
             <div>
             <Paragraph
                style={{
                  lineHeight: "1.6rem",
                  letterSpacing: "0.05rem",
                  fontSize: "20px",
                  textAlign: "left",
                  color: "#ffffff",
                  lineHeight:"3rem",
                }}
              >
                The International Conference on Applications of Space Science
                and Technology (ICAST) is a regular biennial event that provides
                an international forum for scientists, researchers, engineers,
                academicians, industry professionals, entrepreneurs, and
                students from around the world. This conference facilitates
                interaction and discussion on the latest themes and trends in
                Aerospace Science & Engineering. It serves as a platform to
                share experiences, foster collaborations between industry and
                academia, and evaluate emerging technologies and developments
                globally in the fields of space science, technology, and
                application. ICAST helps establish dialogues leading to
                long-lasting technical cooperation among scientists and
                engineers from both developing and developed countries.
              </Paragraph>
             </div>
         
   

        </div>
        <SpeakerCards />
        <ICastEvents/>
        {/* <OnlineSessions/> */}
        {/* <ToDoList /> */}
        {/* <ImportantDates /> */}
        {/* <RegistrationFee /> */}
        {/* <ConferenceHighlights /> */}
        {/* <ConferenceRegistration /> */}
        {/* <ManuscriptSubmission /> */}
        {/* <Downloads /> */}
        {/* <Proceedings /> */}
      </div>
      <FooterComponent />
    </>
  );
};

export default ICast;
