import React from "react";
import { Card, Button, Typography, List, Grid, Row, Col, Image } from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import "../Styles/Resgister.css";
import m1 from "../Assets/m4.jpg";
import m2 from "../Assets/m5.jpg";
import m3 from "../Assets/m6.jpg";
import m4 from "../Assets/m7.jpg";

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Registration = () => {
  const screens = useBreakpoint();
  const titleFontSize = screens.xl
    ? "48px"
    : screens.lg
    ? "48px"
    : screens.md
    ? "46px"
    : "36px";
  const titleMedium = screens.xl
    ? "22px"
    : screens.lg
    ? "22px"
    : screens.md
    ? "17px"
    : "17px";
  const paragraphFontSize = screens.xl
    ? "16px"
    : screens.lg
    ? "16px"
    : screens.md
    ? "15px"
    : "15px";

  return (
    <>
      <IcastHeader />
      <div
        style={{
          background: "#FFFFFF",
          overflowX: "hidden",
          margin: "0 auto",
        }}
      >
        <Title
          style={{
            textAlign: "start",
            marginBottom: "30px",
            padding: "20px 40px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            fontSize: titleFontSize,
            backgroundColor: "#EEF0F2",
          }}
        >
          Registration
        </Title>
        <Row align={"top"} gutter={[16, 16]}>
          {/* Left Column */}
          <Col xs={24} md={16}>
            <Paragraph
              style={{
                textAlign: "start",
                fontSize: paragraphFontSize,
                color: "black",
                padding: "0px 40px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
              }}
            >
              ICAST / Registration
            </Paragraph>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
                marginTop: "30px",
              }}
            >
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  margin: 0, // Remove top and bottom margin for Title
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                Welcome to{" "}
                <strong style={{ fontWeight: "bold" }}>ICAST 2025</strong>,
                where your journey into the forefront of space science and
                technology begins! Whether you&#39;re sharing groundbreaking
                research, gaining hands-on experience through workshops, or
                immersing yourself in cutting-edge exhibitions, this page
                provides all the details you need to join Pakistan&#39;s premier
                space event. Tailored to meet the needs of every participant,
                ICAST 2025 ensures an enriching and seamless experience for all.
              </Paragraph>
              <div style={{ textAlign: "left", marginTop: "20px" }}>
                <Button href="https://CMS.cressofterp.com" size="large">
                  Register Now
                </Button>
              </div>
            </div>
            <Title
              style={{
                textAlign: "start",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
              1. Paper Presenters / Authors
            </Title>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
              }}
            >
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Who Should Register:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                Researchers, academicians, and professionals presenting
                technical papers at the conference.
              </Paragraph>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                What You’ll Gain:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                (a). Present your research to a global audience.
                <br />
                (b). Inclusion of your paper in the IEEE Xplore Digital Library
                for international visibility.
                <br />
                (c). Access to all technical sessions, plenary talks, and
                exhibitions.
                <br />
                (d). Networking opportunities with industry leaders,
                policymakers, and fellow researchers.
                <br />
                (e). Certificate of presentation and conference materials.
              </Paragraph>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Fee Structure:
              </Title>
              <Card
                title={
                  <span
                    style={{
                      textAlign: "left",
                      display: "block",
                      fontSize: titleMedium,
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Paper Presenters / Author
                  </span>
                }
                style={{ marginBottom: "20px", marginTop: "20px" }}
              >
                <Text
                  strong
                  style={{
                    position: "absolute",
                    top: "5%",
                    right: "4%",
                    fontSize: titleMedium,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Fees
                </Text>
                <List>
                  <List.Item>
                    <Text
                      style={{
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      Pakistani Professionals
                    </Text>
                    <Text
                      strong
                      style={{
                        marginLeft: "auto",
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      10,000 PKR
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      style={{
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      Pakistani Students
                    </Text>
                    <Text
                      strong
                      style={{
                        marginLeft: "auto",
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      5,000 PKR
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      style={{
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      International Professionals
                    </Text>
                    <Text
                      strong
                      style={{
                        marginLeft: "auto",
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      200 USD
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      style={{
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      International Students
                    </Text>
                    <Text
                      strong
                      style={{
                        marginLeft: "auto",
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      100 USD
                    </Text>
                  </List.Item>
                </List>
              </Card>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Special Notes:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                (a). Authors must submit their manuscripts by the final deadline
                to ensure inclusion in proceedings.
                <br />
                (b). Failure to present will result in withdrawal of the paper
                as per the No Paper, No Podium policy.
              </Paragraph>
            </div>
            <Title
              style={{
                textAlign: "start",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
              2. Accompanying Authors
            </Title>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
              }}
            >
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Who Should Register:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                Authors whose papers have been accepted for publication and
                presentation but are not delivering the presentation themselves.
              </Paragraph>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                What You’ll Gain:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                (a). Acknowledgment as an author with a certificate of
                authorship, and conference materials.
                <br />
                (b). Access to conference sessions, exhibitions, and networking
                events.
                <br />
                (c). Inclusion in the conference proceedings as a co-author.
              </Paragraph>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Fee Structure:
              </Title>
              <Card
                title={
                  <span
                    style={{
                      textAlign: "left",
                      display: "block",
                      fontSize: titleMedium,
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Worksop Attendee
                  </span>
                }
                style={{ marginBottom: "20px", marginTop: "20px" }}
              >
                <Text
                  strong
                  style={{
                    position: "absolute",
                    top: "5%",
                    right: "4%",
                    fontSize: titleMedium,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Fees
                </Text>
                <List>
                  <List.Item>
                    <Text
                      style={{
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      Pakistani Accompanying Authors
                    </Text>
                    <Text
                      strong
                      style={{
                        marginLeft: "auto",
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      5,000 PKR
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      style={{
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      International Accompanying Authors
                    </Text>
                    <Text
                      strong
                      style={{
                        marginLeft: "auto",
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      50 USD
                    </Text>
                  </List.Item>
                </List>
              </Card>
            </div>
            <Title
              style={{
                textAlign: "start",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
              3. Workshop Attendees
            </Title>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
              }}
            >
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Who Should Register:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                Professionals and students seeking hands-on learning
                opportunities in advanced space technologies.
              </Paragraph>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                What You’ll Gain:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                (a). Participate in expert-led workshops to enhance your
                technical skills.
                <br />
                (b). Access workshop-specific materials and resources.
                <br />
                (c). Gain insights into cutting-edge technologies in focused,
                interactive sessions.
                <br />
                (d). Entry to exhibitions and select non-technical sessions.
                <br />
                (e). Certificate of participation.
              </Paragraph>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Fee Structure:
              </Title>
              <Card
                title={
                  <div style={{ position: "relative" }}>
                    <span
                      style={{
                        textAlign: "left",
                        display: "block",
                        fontSize: titleMedium,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      Workshop Attendee
                    </span>
                    <Text
                      strong
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        fontSize: titleMedium,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      Fee (Per Workshop)
                    </Text>
                  </div>
                }
                style={{ marginBottom: "20px", marginTop: "20px" }}
              >
                <List>
                  <List.Item
                    style={{
                      position: "relative", // Allow absolute positioning of the fee
                      paddingTop: "10px", // Ensure there is space for the fee at the top
                    }}
                  >
                    {/* Fee positioned at the top right */}
                    <Text
                      strong
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      10,000 PKR
                    </Text>
                    <div>
                      <Text
                        style={{
                          fontSize: paragraphFontSize,
                          fontFamily: "Inter, sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        Professionals
                      </Text>
                    </div>
                  </List.Item>

                  <List.Item
                    style={{
                      position: "relative", // Allow absolute positioning of the fee
                      paddingTop: "10px", // Ensure there is space for the fee at the top
                    }}
                  >
                    {/* Fee positioned at the top right */}
                    <Text
                      strong
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      5,000 PKR
                    </Text>
                    <div>
                      <Text
                        style={{
                          fontSize: paragraphFontSize,
                          fontFamily: "Inter, sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        Students
                      </Text>
                    </div>
                  </List.Item>
                  <List.Item
                    style={{
                      position: "relative", // Allow absolute positioning of the fee
                      paddingTop: "10px", // Ensure there is space for the fee at the top
                    }}
                  >
                    <Text
                      strong
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      100 USD
                    </Text>
                    <div>
                      <Text
                        style={{
                          fontSize: paragraphFontSize,
                          fontFamily: "Inter, sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        International Professionals
                      </Text>
                    </div>
                  </List.Item>
                  <List.Item
                    style={{
                      position: "relative", // Allow absolute positioning of the fee
                      paddingTop: "10px", // Ensure there is space for the fee at the top
                    }}
                  >
                    {/* Fee positioned at the top right */}
                    <Text
                      strong
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        fontSize: paragraphFontSize,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      50 USD
                    </Text>
                    <div>
                      <Text
                        style={{
                          fontSize: paragraphFontSize,
                          fontFamily: "Inter, sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        International Students
                      </Text>
                    </div>
                  </List.Item>
                </List>
                <div style={{ backgroundColor: "#EFF6FF" }}>
                  <Paragraph
                    style={{
                      padding: "10px",
                      fontSize: paragraphFontSize,
                      color: "black",
                      textAlign: "center",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "500",
                    }}
                    type="secondary"
                  >
                    <strong>Note:</strong> Workshops require separate
                    registration. Select your workshop during the registration
                    process.
                  </Paragraph>
                </div>
              </Card>
            </div>
            <Title
              style={{
                textAlign: "start",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
              4. Visitors
            </Title>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
              }}
            >
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Who Should Register:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                Enthusiasts, students, and professionals interested in exploring
                the exhibition hall and attending public talks.
              </Paragraph>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                What You’ll Gain:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                (a).Free access to the exhibition hall and interactive displays.
                <br />
                (b). Opportunity to network with presenters, exhibitors, and
                attendees.
                <br />
                (c). Explore space-related innovations and technologies.
                <br />
                (d). Certificate of participation.
              </Paragraph>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Fee Structure:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                There’s no registration fee for visitors, however, registration
                before the deadline is necessary.
              </Paragraph>
            </div>
            <Title
              style={{
                textAlign: "start",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
              5. Media Representatives
            </Title>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
              }}
            >
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Who Should Register:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                Journalists, reporters, photographers, and bloggers from print,
                digital, and broadcast media interested in covering the
                conference and its highlights.
              </Paragraph>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                What You’ll Gain:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                (a). Free Access to all conference sessions, plenary talks,
                exhibitions, and public events.
                <br />
                (b). Exclusive access to media briefings and press conferences
                with keynote speakers and organizers.
                <br />
                (c). A press kit containing event schedules, speaker profiles,
                and conference highlights.
                <br />
                (d). Opportunities to interview researchers, policymakers, and
                industry leaders.
                <br />
                (e). Networking opportunities with other journalists and
                attendees.
              </Paragraph>

              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Special Notes:
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                (a). Media representatives are required to present valid
                credentials (e.g., press ID or a letter from their media
                organization) upon registration.
                <br />
                (b). Media coverage guidelines, including photography and
                recording permissions, will be shared upon registration.
              </Paragraph>
            </div>
            <Title
              style={{
                textAlign: "start",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
              6. Registration Guidelines
            </Title>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
              }}
            >
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Registration Deadline
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                All registrations will close on{" "}
                <strong style={{ fontWeight: "bold" }}>
                  September 1, 2025, 1600 hours.
                </strong>{" "}
                Register early to save and secure your place at this landmark
                event!
              </Paragraph>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Terms and Conditions
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                (a).{" "}
                <strong style={{ fontWeight: "bold" }}>Refund Policy:</strong>{" "}
                Conference registration fee is non-transferable, non-refundable.
                <br />
                (b).{" "}
                <strong style={{ fontWeight: "bold" }}>
                  No-Show Policy:
                </strong>{" "}
                Registrants who fail to attend will forfeit their registration
                benefits.
                <br />
                (c).{" "}
                <strong style={{ fontWeight: "bold" }}>
                  Visa Support:
                </strong>{" "}
                International participants may request visa support letters upon
                completing their registration.
              </Paragraph>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Benefits of Registering
              </Title>
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                By registering for ICAST 2025, you will:
                <br />
                (a). Access all technical sessions, workshops, and exhibitions.
                <br />
                (b). Network with global experts and policymakers in space
                science and technology.
                <br />
                (c). Obtain conference materials, including proceedings and
                certificates.
                <br />
                (d). Participate in cultural and networking events.
              </Paragraph>
            </div>
            <Title
              style={{
                textAlign: "start",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
              7. Helpful Information
            </Title>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
              }}
            >
              <Paragraph
                style={{
                  textAlign: "start",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                For any queries related to registration, please contact us:
                <br />
                (a). Email: registration@icast.pk
                <br />
                (b). Phone: +92-51-907-5799
                <br />
                All communications regarding registration will come from
                icast.pk. Please ensure you whitelist this domain to receive
                important updates.
              </Paragraph>
            </div>
            <Title
              style={{
                textAlign: "start",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
              8. Ready to join?
            </Title>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
              }}
            >
             <div style={{ textAlign: "left" }}>
  <Button
  
    style={{
      backgroundColor: "#006814",
      color: "white", // Ensure the text is visible against the dark green background
      fontSize: "16px", // Make the text size larger for prominence
      fontWeight: "600", // Make the text bold for visibility
      padding: "20px 40px", // Add padding to make the button larger and more clickable
      border: "none", // Remove default border to make it cleaner
      borderRadius: "5px", // Add rounded corners for a modern look
      cursor: "pointer", // Indicate it's clickable
      transition: "background-color 0.3s", // Smooth transition for hover effect
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = "#004b0f"} // Darker green on hover
    onMouseLeave={(e) => e.target.style.backgroundColor = "#006814"} // Revert back on mouse leave
  >
    Register Now
  </Button>
</div>

            </div>
          </Col>

          {/* Right Column */}
          <Col xs={24} md={8} style={{ textAlign: "center" }}>
            <Image
              src={m1}
              alt="Image 1"
              preview={false}
              style={{
                width: "90%",
                height: "auto",
                marginBottom: "16px",
                borderRadius: "8px",
              }}
            />
            <Image
              src={m2}
              alt="Image 2"
              preview={false}
              style={{
                width: "90%",
                height: "auto",
                marginBottom: "16px",
                borderRadius: "8px",
              }}
            />
            <Image
              src={m3}
              alt="Image 3"
              preview={false}
              style={{
                width: "90%",
                height: "auto",
                marginBottom: "16px",
                borderRadius: "8px",
              }}
            />
            <Image
              src={m4}
              alt="Image 4"
              preview={false}
              style={{
                width: "90%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
