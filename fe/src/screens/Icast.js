import React from "react";
import { Row, Typography, Divider } from "antd";
import "antd/dist/reset.css"; // Include Ant Design styles
import "../../Styles/Linkages.css";
import SpeakerCards from "./ICASE Components/SpeakerCard";
import OnlineSessions from "./ICASE Components/OnlineSessions";
import ToDoList from "./ICASE Components/ToDoList";
import FooterComponent from "../../Layout/Footer";
import ImportantDates from "./ICASE Components/ImportantDates";
import RegistrationFee from "./ICASE Components/RegisterFee";
import ConferenceHighlights from "./ICASE Components/ConferenceHighlights";
import ConferenceRegistration from "./ICASE Components/ConferenceRegistration";
import ManuscriptSubmission from "./ICASE Components/ManuscriptSubmission";
import Downloads from "./ICASE Components/Downloads";
import Proceedings from "./ICASE Components/Proceedings";
import IcastHeader from "../Layouts/IcastHeader";

const { Title, Paragraph } = Typography;

const ICast = () => {
  return (
    <>
      <IcastHeader />
      <div style={{ padding: "20px" }}>
        <div className="banner"></div>

        <div className="content-section">
          <Row justify="start" align="middle" gutter={[16, 16]}>
            <Title style={{ fontSize: "48px", fontWeight: "bold" }}>
              Introduction
            </Title>
            <Divider className="ncgsa-divider" />
            <Paragraph style={{ lineHeight: "1.8rem", fontSize: "18px" }}>
              International Conference on Applications of Space Science and
              Technology (ICAST) is a regular biennial event to provide an
              International forum in which scientists, researchers, engineers,
              academicians, industry professionals, entrepreneurs, and students
              from all over the world, get a chance to interact and discuss the
              latest themes and trends related to Aerospace Science &
              Engineering. It provides a platform to share experiences, foster
              collaborations across industry and academia, and to evaluate
              emerging technologies and developments across the globe in the
              fields of space science, technology, and application. ICASE
              facilitates in establishing dialogues leading to long-lasting
              technical cooperation among the scientists and engineers of the
              developing and developed countries.
            </Paragraph>

            {/* <Col xs={24} md={10} lg={8}>
      <div className="video-container">
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/video_id"
          frameBorder="0"
          allowFullScreen
          title="ICASE Introduction Video"
        ></iframe>
      </div>
    </Col> */}
          </Row>
        </div>
        <SpeakerCards />
        {/* <OnlineSessions/> */}
        <ToDoList />
        <ImportantDates />
        <RegistrationFee />
        <ConferenceHighlights />
        <ConferenceRegistration />
        <ManuscriptSubmission />
        <Downloads />
        <Proceedings />
      </div>
      <FooterComponent />
    </>
  );
};

export default ICast;
