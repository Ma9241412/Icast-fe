import React from "react";
import { Row, Col, Carousel, Typography, Grid, Image } from "antd";
import m1 from "../Assets/m1.jpg";
import m2 from "../Assets/m2.jpg";
import m3 from "../Assets/m3.jpg";
import m4 from "../Assets/m4.jpg";
import m5 from "../Assets/m5.jpg";
import m6 from "../Assets/m6.jpg";
import m7 from "../Assets/m7.jpg";
import m8 from "../Assets/m8.jpg";
import m9 from "../Assets/m9.jpg";
import m10 from "../Assets/m10.jpg";

const { Title, Paragraph, Link } = Typography;
const { useBreakpoint } = Grid;

const ConferenceIntro = () => {
  const screens = useBreakpoint();

  // Responsive font sizes and spacing
  const titleFontSize = screens.xl
    ? "45px"
    : screens.lg
    ? "40px"
    : screens.md
    ? "35px"
    : "28px";
  const paragraphFontSize = screens.xl
    ? "19px"
    : screens.lg
    ? "18px"
    : screens.md
    ? "16px"
    : "16px";
  const paragraphLineHeight = screens.md ? "1.8em" : "1.6em";
  const paragraphPadding = screens.md ? "0 20px" : "0 5px";

  return (
    <div
      style={{
        backgroundColor: "#272B3A",
        padding: "10px",
        borderRadius: "0 10px 10px 0",
        overflow: "hidden",
        maxWidth: "100%",
      }}
    >
      <Row
      align={"top"}
        gutter={[16, 16]}
        style={{
          backgroundColor: "#272B3A",
          padding: "40px",
          borderRadius: "0 10px 10px 0",
          overflow: "hidden",
          maxWidth: "100%",
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
                fontSize: titleFontSize,
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
                lineHeight: paragraphLineHeight,
                letterSpacing: "0.5px",
                fontSize: paragraphFontSize,
                textAlign: "start",
                padding: paragraphPadding,
              }}
            >
              The International Conference on Applications of Space Science and Technology (ICAST)
marks a transformative milestone in Pakistan&#39;s journey through space science and
technology. As the largest space event in the country, ICAST unites the legacies of IST’s
International Conference on Aerospace Science and Engineering (ICASE) and
SUPARCO’s International Conference on Space (ICS) into a biennial global forum of
unparalleled excellence.
ICAST bringing together visionaries, global thought leaders, pioneering researchers, and
industry trailblazers, aspires to redefine the future of space science by fostering collaboration, presenting transformative research, and exploring interdisciplinary space
applications with the potential to reshape our collective future.
            </Paragraph>
         
            {/* <Link
              href="#"
              style={{
                color: "#ff9f43",
                fontFamily: "Arial, sans-serif",
                letterSpacing: "0.5px",
                marginTop: screens.md ? "20px" : "10px",
                display: "block",
                textAlign:"center"
              }}
            >
              Read more
            </Link> */}
          </div>
        </Col>
        <Col xs={24} md={12}>
          <Carousel arrows>
            <div>
              <Image
                preview={false}
                src={m1}
                alt=""
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
                alt=""
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
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </div>{" "}
            <div>
              <img
                src={m4}
                alt=""
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
                src={m5}
                alt=""
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
                src={m6}
                alt=""
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
                src={m7}
                alt=""
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
                src={m8}
                alt=""
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
                src={m9}
                alt="Conference Image 3"
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
                src={m10}
                alt="Conference Image 3"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default ConferenceIntro;
