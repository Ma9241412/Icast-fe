import React from "react";
import {
  Button,
  Typography,
  Grid,
  Row,
  Col,
  Image,
  Table,
} from "antd";
import IcastHeader from "../Layouts/IcastHeader";
import Footer from "../Layouts/IcastFooter";
import "../Styles/Resgister.css";
import m1 from "../Assets/m4.jpg";
import m2 from "../Assets/m5.jpg";
import m3 from "../Assets/m6.jpg";
import m4 from "../Assets/m7.jpg";
import { Link } from "react-router-dom";

const { Title,  Paragraph } = Typography;
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
  const columns = [
    {
      title: "Serial No.",
      dataIndex: "key", // 'key' represents the serial number for each row
      align: "left", // Left-align the serial numbers
      render: (text, record, index) => index + 1, // Automatically generate serial numbers starting from 1
    },
    {
      title: "Author",
      dataIndex: "author", // Assuming you have an 'author' field in your data
      align: "left", // Left-align the author names
    },
    {
      title: "Fees",
      dataIndex: "fees", // Assuming you have a 'fees' field in your data
      align: "left", // Left-align the fee values
    },
  ];

  const data = [
    {
      key: "1",
      author: "Pakistani Professionals",
      fees: "10,000 PKR",
    },
    {
      key: "2",
      author: "Pakistani Students",
      fees: "5,000 PKR",
    },
    {
      key: "3",
      author: "International Professionals",
      fees: "200 USD",
    },
    {
      key: "4",
      author: "International Students",
      fees: "100 USD",
    },
  ];

  const columns2 = [
    {
      title: "Serial No.",
      dataIndex: "key", // 'key' represents the serial number for each row
      align: "left", // Left-align the serial numbers
      render: (text, record, index) => index + 1, // Automatically generate serial numbers starting from 1
    },
    {
      title: "Author",
      dataIndex: "author", // Assuming you have an 'author' field in your data
      align: "left", // Left-align the author names
    },
    {
      title: "Fees",
      dataIndex: "fees", // Assuming you have a 'fees' field in your data
      align: "left", // Left-align the fee values
    },
  ];

  const data1 = [
    {
      key: "1",
      author: "Pakistani Accompanying Authors",
      fees: "5,000 PKR",
    },
    {
      key: "2",
      author: "International Accompanying Authors",
      fees: "50 USD",
    },
  ];
  const columns3 = [
    {
      title: "Serial No.",
      dataIndex: "key", // 'key' represents the serial number for each row
      align: "left", // Left-align the serial numbers
      render: (text, record, index) => index + 1, // Automatically generate serial numbers starting from 1
    },
    {
      title: "Workshop Attendee",
      dataIndex: "workshopAttendee", // Match the key in `data3`
      align: "left", // Left-align the attendee names
    },
    {
      title: "Fee (Per Workshop)",
      dataIndex: "fees", // Match the key in `data3`
      align: "left", // Left-align the fee values
    },
  ];

  const data3 = [
    {
      key: "1",
      workshopAttendee: "Professionals", // Consistent key name
      fees: "5,000 PKR", // Ensuring alignment with the column definition
    },
    {
      key: "2",
      workshopAttendee: "Students", // Consistent key name
      fees: "2,000 PKR",
    },
    // {
    //   key: "3",
    //   workshopAttendee: "International Professionals", // Consistent key name
    //   fees: "100 USD",
    // },
    // {
    //   key: "4",
    //   workshopAttendee: "International Students", // Consistent key name
    //   fees: "50 USD", // Adding a default value for missing data
    // },
  ];

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
            textAlign: "justify" ,
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
                textAlign: "justify",
                fontSize: paragraphFontSize,
                color: "#055EDD",
                padding: "0px 40px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
              }}
            >
              <Link to={"/"}>ICAST</Link> / Registration
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
                  textAlign: "justify",
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
              <div
                style={{
                  textAlign: "justify",
                  marginTop: "20px",
                }}
              >
              <Link to={"https://cms.cressofterp.com/"}>
              <Button size="large">
                  Register Now
                </Button>
              </Link>
              </div>
            </div>
            <Title
              style={{
                textAlign: "justify",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
               Paper Presenters / Authors
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
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>Present your research to a global audience.</li>
                  <li>
                    Inclusion of your paper in the IEEE Xplore Digital Library
                    for international visibility.
                  </li>
                  <li>
                    {" "}
                    Access to all technical sessions, plenary talks, and
                    exhibitions.
                  </li>
                  <li>
                    Networking opportunities with industry leaders,
                    policymakers, and fellow researchers.
                  </li>
                  <li>Certificate of presentation and conference materials.</li>
                </ul>
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Fee Structure:
              </Title>

              <Table
                columns={columns2}
                dataSource={data}
                pagination={false}
                bordered={false}
                scroll={{ x: "max-content" }}
                size="middle"
                style={{
                  fontFamily: "Inter, sans-serif", // Use a clean font
                  borderRadius: "8px", // Optional rounded corners for the table
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Optional subtle shadow effect
                }}
              />
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                  marginTop: "10px",
                }}
              >
                Special Notes:
              </Title>
              <Paragraph
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul
                  style={{
                    textAlign: "justify",
                    fontSize: paragraphFontSize,
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  <li>
                    Authors must submit their manuscripts by the final deadline
                    to ensure inclusion in proceedings.
                  </li>
                  <li>
                    {" "}
                    Failure to present will result in withdrawal of the paper as
                    per the No Paper, No Podium policy.
                  </li>
                </ul>
              </Paragraph>
            </div>
            <Title
              style={{
                textAlign: "justify",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
              Accompanying Authors
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
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>
                    {" "}
                    Acknowledgment as an author with a certificate of
                    authorship, and conference materials.
                  </li>
                  <li>
                    Access to conference sessions, exhibitions, and networking
                    events.
                  </li>
                  <li>
                    {" "}
                    Inclusion in the conference proceedings as a co-author.
                  </li>
                </ul>
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Fee Structure:
              </Title>
              <Table
                columns={columns}
                dataSource={data1}
                pagination={false}
                bordered={false}
                scroll={{ x: "max-content" }}
                size="middle"
                style={{
                  fontFamily: "Inter, sans-serif", // Use a clean font
                  borderRadius: "8px", // Optional rounded corners for the table
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Optional subtle shadow effect
                }}
              />
            </div>
            <Title
              style={{
                textAlign: "justify",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
               Workshop Attendees
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
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>
                    {" "}
                    Participate in expert-led workshops to enhance your
                    technical skills.
                  </li>
                  <li>Access workshop-specific materials and resources.</li>
                  <li>
                    Gain insights into cutting-edge technologies in focused,
                    interactive sessions.
                  </li>
                  <li>
                    Entry to exhibitions and select non-technical sessions.
                  </li>
                  <li>Certificate of participation.</li>
                </ul>
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "700",
                }}
              >
                Fee Structure:
              </Title>
              <Table
                columns={columns3}
                dataSource={data3}
                pagination={false}
                bordered={false}
                scroll={{ x: "max-content" }}
                size="middle"
                style={{
                  fontFamily: "Inter, sans-serif", // Use a clean font
                  borderRadius: "8px", // Optional rounded corners for the table
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Optional subtle shadow effect
                }}
              />
              <div style={{ backgroundColor: "#EFF6FF" }}>
                <Paragraph
                  style={{
                    padding: "10px",
                    fontSize: paragraphFontSize,
                    color: "black",
                    textAlign: "justify",
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
            </div>

            <Title
              style={{
                textAlign: "justify",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
               Visitors
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
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul
                  style={{
                    textAlign: "justify",
                    fontSize: paragraphFontSize,
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  <li>
                    Free access to the exhibition hall and interactive displays.
                  </li>
                  <li>
                    Opportunity to network with presenters, exhibitors, and
                    attendees.
                  </li>
                  <li>Explore space-related innovations and technologies.</li>
                  <li>Certificate of participation.</li>
                </ul>
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                textAlign: "justify",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
               Media Representatives
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
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul
                  style={{
                    textAlign: "justify",
                    fontSize: paragraphFontSize,
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  <li>
                    Free Access to all conference sessions, plenary talks,
                    exhibitions, and public events.
                  </li>
                  <li>
                    Exclusive access to media briefings and press conferences
                    with keynote speakers and organizers.
                  </li>
                  <li>
                    A press kit containing event schedules, speaker profiles,
                    and conference highlights.
                  </li>
                  <li>
                    Opportunities to interview researchers, policymakers, and
                    industry leaders.
                  </li>
                  <li>
                    Networking opportunities with other journalists and
                    attendees.
                  </li>
                </ul>
              </Paragraph>

              <Title
                style={{
                  textAlign: "justify",
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
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul>
                  <li>
                    Media representatives are required to present valid
                    credentials (e.g., press ID or a letter from their media
                    organization) upon registration.
                  </li>
                  <li>
                    Media coverage guidelines, including photography and
                    recording permissions, will be shared upon registration.
                  </li>
                </ul>
              </Paragraph>
            </div>
            <Title
              style={{
                textAlign: "justify",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
               Registration Guidelines
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
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                  textAlign: "justify",
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
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                <ul
                  style={{
                    textAlign: "justify",
                    fontSize: paragraphFontSize,
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  <li>
                    {" "}
                    <strong style={{ fontWeight: "bold" }}>
                      Refund Policy:
                    </strong>{" "}
                    Conference registration fee is non-transferable,
                    non-refundable.
                  </li>
                  <li>
                    {" "}
                    <strong style={{ fontWeight: "bold" }}>
                      No-Show Policy:
                    </strong>{" "}
                    Registrants who fail to attend will forfeit their
                    registration benefits.
                  </li>
                  <li>
                    <strong style={{ fontWeight: "bold" }}>
                      Visa Support:
                    </strong>{" "}
                    International participants may request visa support letters
                    upon completing their registration.
                  </li>
                </ul>
              </Paragraph>
              <Title
                style={{
                  textAlign: "justify",
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
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                By registering for ICAST 2025, you will:
                <br />
                <ul>
                  <li>
                    Access all technical sessions, workshops, and exhibitions.
                  </li>
                  <li>
                    Network with global experts and policymakers in space
                    science and technology.
                  </li>
                  <li>
                    Obtain conference materials, including proceedings and
                    certificates.
                  </li>
                  <li>Participate in cultural and networking events.</li>
                </ul>
              </Paragraph>
            </div>
            <Title
              style={{
                textAlign: "justify",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
               Helpful Information
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
                  textAlign: "justify",
                  fontSize: paragraphFontSize,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                }}
              >
                For any queries related to registration, please contact us:
                <br />
                <ul
                  style={{
                    textAlign: "justify",
                    fontSize: paragraphFontSize,
                    color: "black",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  <li>Email: registration@icast.pk</li>
                  <li>Phone: +92-51-907-5799</li>
                </ul>
                All communications regarding registration will come from
                icast.pk. Please ensure you whitelist this domain to receive
                important updates.
              </Paragraph>
            </div>
            <Title
              style={{
                textAlign: "justify",
                fontSize: titleMedium,
                color: "black",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                padding: "10px 40px",
              }}
            >
               Ready to join?
            </Title>
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#EFF0F2",
                padding: "10px 40px",
              }}
            >
              <div style={{ textAlign: "justify" }}>
               <Link to={"https://cms.cressofterp.com/"}>
               <Button
                  style={{
                    backgroundColor: "#006814",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "600",
                    padding: "20px 40px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#004b0f")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#006814")
                  }
                >
                  Register Now
                </Button>
               </Link>
              </div>
            </div>
          </Col>

          {/* Right Column */}
          <Col xs={24} md={8} style={{ textAlign: "justify" }}>
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
