import React from "react";
import { Card, Col, Grid, Row, Typography } from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const data = [
  {
    name: "Vice Chancellor IST",
    title: "Conference Patron-In-Chief",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "Secretary SUPARCO",
    title: "Conference Chair",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "Registrar IST",
    title: "Conference Co-Chair",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "Head of Conference Secretariat Chairman NCGSA",
    title: "Conference Secretary",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "Registrar IST",
    title: "Chair of Coordination Committee",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "Dean IST",
    title: "Chair of Technical Program Committee",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "Director Admin IST",
    title: "Chair of Administration Committee",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "CFO IST",
    title: "Chair of Finance Committee",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "Director ORIC",
    title: "Chair of Collaboration & Industrial Linkages Committee",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "Director IT",
    title: "Chair of IT & Media Management Committee",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "Director Civil Works",
    title: "Chair of Conference Facilities Committee",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "Senior Faculty Member",
    title: "Chair of Evaluation & Publication Committee",
    imgSrc: "https://via.placeholder.com/150",
  },
];

const GovernancePage = () => {
  const screens = useBreakpoint();
  const titleFontSize = screens.xl
    ? "45px"
    : screens.lg
    ? "40px"
    : screens.md
    ? "35px"
    : "28px";
  const titleMedium = screens.xl
    ? "30px"
    : screens.lg
    ? "30px"
    : screens.md
    ? "25px"
    : "22px";
  const paragraphFontSize = screens.xl
    ? "19px"
    : screens.lg
    ? "17px"
    : screens.md
    ? "19px"
    : "19px";

  return (
    <>
      <IcastHeader />
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div style={{ backgroundColor: "#EEF0F2" }}>
          <Title
            style={{
              textAlign: "start",
              marginBottom: "30px",
              backgroundColor: "#EFF0F2",
              padding: "20px 40px",
              fontWeight: "bold",
              fontSize: titleFontSize,
            }}
          >
            Registration
          </Title>
        </div>
        <Paragraph
          style={{
            textAlign: "start",
            marginBottom: "30px",
            fontSize: paragraphFontSize,
            color: "#595959",
            padding: "0px 40px",
            fontWeight: "bold",
          }}
        >
          ICAST / About ICAST / ICAST Governance
        </Paragraph>
        <div style={{padding:"30px 40px",backgroundColor:"#EFF0F2"}}>
        <Row gutter={[16, 16]}>
          {data.map((person, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
                  border: '1px solid #f0f0f0', // Light border
                  textAlign: "center",
                }}
                cover={
                  <img
                    alt={person.name}
                    src={person.imgSrc}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderBottom: "1px solid #f0f0f0",
                    }}
                  />
                }
              >
                <Text style={{ fontSize: paragraphFontSize}}>{person.title}</Text>
                <br />
                <Text type="secondary">{person.name}</Text>
              </Card>
            </Col>
          ))}
        </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GovernancePage;
