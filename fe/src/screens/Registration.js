import React from "react";
import { Card, Button, Typography, List, Grid } from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Registration = () => {
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
      <div style={{ background: "#FFFFFF" }}>
        <div style={{ textAlign: "start", marginBottom: "20px" }}>
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
          <div>
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
              ICAST Forum and Exposition / Registration
            </Paragraph>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <Paragraph
            strong
            style={{
              color: "#186814",
              textAlign: "start",
              fontSize: paragraphFontSize,
              backgroundColor: "#EFF0F2",
              padding: "15px 40px",
              fontWeight: "bold"

            }}
          >
            Registration Deadline: September 1, 2025
          </Paragraph>
        </div>
        <div style={{ padding: "10px 20px" }}>
          <Card 
            title={
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  fontSize: titleMedium,
                }}
              >
                Paper Presentation/Author
              </span>
            }
            style={{ marginBottom: "20px" }}
          >
            <List>
              <List.Item>
                <Text style={{ fontSize: paragraphFontSize }}>
                  Pakistani Professionals
                </Text>
                <Text strong style={{ marginLeft: "auto",fontSize: paragraphFontSize }}>
                  10,000 PKR
                </Text>
              </List.Item>
              <List.Item>
                <Text style={{ fontSize: paragraphFontSize }}>Pakistani Students</Text>
                <Text strong style={{ marginLeft: "auto" ,fontSize: paragraphFontSize}}>
                  5,000 PKR
                </Text>
              </List.Item>
              <List.Item>
                <Text style={{ fontSize: paragraphFontSize }}>International Professionals</Text>
                <Text strong style={{ marginLeft: "auto",fontSize: paragraphFontSize }}>
                  200 USD
                </Text>
              </List.Item>
              <List.Item>
                <Text style={{ fontSize: paragraphFontSize }}>International Students</Text>
                <Text strong style={{ marginLeft: "auto" ,fontSize: paragraphFontSize}}>
                  100 USD
                </Text>
              </List.Item>
            </List>
            <div style={{backgroundColor:"#EFF6FF"}}>
            <Paragraph style={{padding:"10px",fontSize:paragraphFontSize,color:"black",textAlign:"center"}} type="secondary">
            <strong>Note:</strong>  All paper presenters/authors are entitled to attend all
              conference sessions from Tuesday to Thursday, excluding workshops.
            </Paragraph>
            </div>
          </Card>

          <Card   title={
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  fontSize: titleMedium,
                }}
              >
               Workshops
              </span>
            }  style={{ marginBottom: "20px" }}>
            <List>
              <List.Item>
                <Text style={{ fontSize: paragraphFontSize }}>Professionals</Text>
                <Text strong style={{ marginLeft: "auto",fontSize: paragraphFontSize }}>
                  10,000 PKR
                </Text>
              </List.Item>
              <List.Item>
                <Text style={{ fontSize: paragraphFontSize}}>Students</Text>
                <Text  strong style={{ marginLeft: "auto" ,fontSize: paragraphFontSize}}>
                  5,000 PKR
                </Text>
              </List.Item>
            </List>
            <div style={{backgroundColor:"#EFF6FF"}}>
            <Paragraph style={{padding:"10px",fontSize:paragraphFontSize,color:"black",textAlign:"center"}}   type="secondary">
            <strong>Note:</strong>  Workshops and training sessions will be conducted by
              internationally invited experts and will be available to all
              registered participants from Tuesday to Thursday.
            </Paragraph>
            </div>
          </Card>

          <Card   title={
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  fontSize: titleMedium,
                }}
              >
                Visitor
              </span>
            } style={{ marginBottom: "20px" }}>
            <List>
              <List.Item>
                <Text style={{ fontSize: paragraphFontSize, }}>Accompanying Co-Author</Text>
                <Text strong style={{ marginLeft: "auto",fontSize: paragraphFontSize  }}>
                  5,000 PKR
                </Text>
              </List.Item>
              <List.Item>
                <Text style={{ fontSize: paragraphFontSize}}>Visitor</Text>
                <Text strong style={{ marginLeft: "auto",fontSize: paragraphFontSize  }}>
                  Free
                </Text>
              </List.Item>
            </List>
           <div style={{backgroundColor:"#EFF6FF"}}>
           <Paragraph style={{padding:"10px",fontSize:paragraphFontSize,color:"black",textAlign:"center"}} type="secondary">
<strong>Note:</strong>  Visitors will have access to all conference sessions from
              Tuesday to Thursday, excluding workshops, and are invited to
              attend the Closing Ceremony on Thursday.
            </Paragraph>
           </div>
          </Card>

          <Card title={
              <span
                style={{
                  textAlign: "left",
                  display: "block",
                  fontSize: titleMedium,
                }}
              >
                Additional Amenities
              </span>
            } style={{ marginBottom: "20px" }}>
            <List>
              <List.Item  style={{ fontSize: paragraphFontSize}} >✓ Tea & Lunch (Tuesday to Thursday)</List.Item>
              <List.Item  style={{ fontSize: paragraphFontSize}}>✓ Lunch Area (pay-as-you-go basis)</List.Item>
              <List.Item  style={{ fontSize: paragraphFontSize}}>✓ Dinner (Invite Guests Only)</List.Item>
              <List.Item  style={{ fontSize: paragraphFontSize}}>✓ Stargazing (Invite Guests Only)</List.Item>
              <List.Item  style={{ fontSize: paragraphFontSize}}>✓ Excursion Trip (Invite Guests Only)</List.Item>
            </List>
          </Card>
        </div>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Button type="primary" size="large"  style={{
                backgroundColor: "#1F5223",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "8px 16px",
                fontSize: "16px",width:"300px"
                
              }}>
            Register Now
          </Button>
          <p style={{ marginTop: "10px" }}>
            Please register by <strong>September 1, 2025</strong> to secure your
            place at this prestigious event.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
