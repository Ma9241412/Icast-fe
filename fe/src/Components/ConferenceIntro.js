import React from "react";
import { Row, Col, Carousel, Typography } from "antd";
import m1 from "../Assets/m1.jpg";
import m2 from "../Assets/m2.jpg";
import m3 from "../Assets/m3.jpg";

const { Title, Paragraph, Link } = Typography;

const ConferenceIntro = () => {
  return (
    <div       style={{
        backgroundColor: "#272B3A",
        padding: "40px",
        borderRadius: "0 10px 10px 0", // Apply radius only on left and right sides
        overflow: "hidden", // Prevent horizontal scroll
        maxWidth: "100%", // Ensure the row doesn't exceed its container width
      }}>
        <Row
      gutter={[16, 16]}
      style={{
        backgroundColor: "#272B3A",
        padding: "40px",
        borderRadius: "0 10px 10px 0", // Apply radius only on left and right sides
        overflow: "hidden", // Prevent horizontal scroll
        maxWidth: "100%", // Ensure the row doesn't exceed its container width
      }}
      
    >
      <Col xs={24} md={12}>
        <div
          style={{
            color: "white",
            fontFamily: "Arial, sans-serif",
            lineHeight: "1.6",
            letterSpacing: "0.5px",
          }}
        >
          <Title
            
            style={{
            fontSize:"45px",
              color: "white",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "1px",
            }}
          >
            Introduction
          </Title>
          <Paragraph
            style={{
              color: "white",
              fontFamily: "Arial, sans-serif",
              lineHeight: "1.8rem",
              letterSpacing: "0.5px",
              fontSize: "19px",
            }}
          >
            International Conference on Applications of Space Science and
            Technology (ICAST) is a regular biennial event to provide an
            International forum in which scientists, researchers, engineers,
            academicians, industry professionals, entrepreneurs, and students
            from all over the world, get a chance to interact and discuss the
            latest themes and trends related to Aerospace Science & Engineering.
            It provides a platform to share experiences, foster collaborations
            across industry and academia, and to evaluate emerging technologies
            and developments across the globe in the fields of space science,
            technology, and application.
          </Paragraph>
          <Link
            href="#"
            style={{
              color: "#ff9f43",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.5px",
            }}
          >
            Read more
          </Link>
        </div>
      </Col>
      <Col xs={24} md={12}>
        <Carousel arrows>
          <div>
            <img
              src={m1}
              alt="Conference Image 1"
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            <img
              src={m2}
              alt="Conference Image 2"
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            <img
              src={m3}
              alt="Conference Image 3"
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
          {/* Add more images as needed */}
        </Carousel>
      </Col>
    </Row>
    </div>
  );
};

export default ConferenceIntro;
