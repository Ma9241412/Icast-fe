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
import img from "../Assets/icastw.png"





const { Title, Paragraph } = Typography;

const ICast = () => {
  return (
    <>
      <IcastHeader />
      <div style={{ padding: "20px", backgroundColor:"#272B3A"}}>
        <div className="banner"></div>

        <div className="content-section">
        <Row justify="start" align="top" gutter={[16, 16]} style={{ flexWrap: "nowrap" }}>
      {/* Text Section */}
      <Col xs={24} md={12}>
        <Title style={{ fontSize: "45px", fontWeight: "bold", textAlign: "left" ,color:"#ffffff"}}>Introduction</Title>
        <Divider className="ncgsa-divider" style={{ borderColor: "#1a8cd8", borderWidth: "2px" }} />
        <Paragraph style={{ lineHeight: "1.6rem",letterSpacing:"0.05rem", fontSize: "20px", textAlign: "left",color:"#ffffff" }}>
        The International Conference on Applications of Space Science and Technology (ICAST) 
          is a regular biennial event that provides an international forum for scientists, 
          researchers, engineers, academicians, industry professionals, entrepreneurs, and students 
          from around the world. This conference facilitates interaction and discussion on the latest 
          themes and trends in Aerospace Science & Engineering. It serves as a platform to share 
          experiences, foster collaborations between industry and academia, and evaluate emerging 
          technologies and developments globally in the fields of space science, technology, and 
          application. ICAST helps establish dialogues leading to long-lasting technical cooperation 
          among scientists and engineers from both developing and developed countries.
        </Paragraph>
      </Col>
      
      <Col xs={24} md={12}>
  <Image
    src={img} 
    alt="ICAST Conference"
    style={{
      width: "100%", 
      height: "auto",
      maxHeight: "500px", 
   
    }}
  />
</Col>

    </Row>
      
      {/* Text Section */}
    

  
        </div>
        <SpeakerCards />
        {/* <OnlineSessions/> */}
        <ToDoList />
        <ImportantDates />
        <RegistrationFee />
        <ConferenceHighlights />
        <ConferenceRegistration />
        <ManuscriptSubmission />
        {/* <Downloads /> */}
        <Proceedings />
      </div>
      <FooterComponent />
    </>
  );
};

export default ICast;
