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

const { Title, Paragraph } = Typography;

const ICast = () => {
  return (
    <>
      <IcastHeader />
      <div style={{ backgroundColor: "#272B3A", marginTop: "85px" }}>
        <FullWidthCarousel />
        <CountdownTimer />
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
          <div>
            <Paragraph
              style={{
                lineHeight: "1.6rem",
                letterSpacing: "0.05rem",
                fontSize: "20px",
                textAlign: "left",
                color: "#ffffff",
                lineHeight: "3rem",
              }}
            >
              The International Conference on Applications of Space Science and
              Technology (ICAST) is a regular biennial event that provides an
              international forum for scientists, researchers, engineers,
              academicians, industry professionals, entrepreneurs, and students
              from around the world. This conference facilitates interaction and
              discussion on the latest themes and trends in Aerospace Science &
              Engineering. It serves as a platform to share experiences, foster
              collaborations between industry and academia, and evaluate
              emerging technologies and developments globally in the fields of
              space science, technology, and application. ICAST helps establish
              dialogues leading to long-lasting technical cooperation among
              scientists and engineers from both developing and developed
              countries.
            </Paragraph>
          </div>
        </div>
        <SpeakerCards />
        <ICastEvents />
      </div>
      <FooterComponent />
    </>
  );
};

export default ICast;
