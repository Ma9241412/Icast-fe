import React from 'react';
import { Table, Button, Typography, Divider, Row, Col } from 'antd';
import '../Styles/Linkages.css';

const { Title } = Typography;

// Data for the proceedings table
const data = [
  {
    key: '1',
    srNo: '1',
    conference: 'ICASE 2019',
    dates: 'November 12-14 2019',
    proceedings: <Button type="primary">Download PDF</Button>,
  },
  {
    key: '2',
    srNo: '2',
    conference: 'ICASE 2021',
    dates: 'December 14-16 2021',
    proceedings: <Button type="primary">Download PDF</Button>,
  },
];

// Columns configuration for the proceedings table
const columns = [
  {
    title: 'Sr.No',
    dataIndex: 'srNo',
    key: 'srNo',
    width: '10%',
  },
  {
    title: 'Conference',
    dataIndex: 'conference',
    key: 'conference',
    width: '30%',
  },
  {
    title: 'Dates',
    dataIndex: 'dates',
    key: 'dates',
    width: '30%',
  },
  {
    title: 'Proceedings',
    dataIndex: 'proceedings',
    key: 'proceedings',
    width: '30%',
  },
];

const Proceedings = () => {
  return (
    <div className="proceedings-container">
      <Row justify="center">
        <Col xs={24} md={18}>
          <Title className="page-title">ICASE Proceedings</Title>
          <Divider className="ncgsa-divider" />
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            className="proceedings-table"
            scroll={{ x: 500 }}
          />
          {/* Conference Secretariat Section */}
          <div className="conference-secretariat">
            <Title className="page-title">Conference Secretariat</Title>
            <div className="buttons-section">
              <Button
                className="custom-button"
                type="primary"
              >
                Share Feedback Online ➤
              </Button>
              <Button
                className="custom-button"
                type="primary"
              >
                Download Feedback Form ➤
              </Button>
            </div>
            <div className="secretariat-details">
              <p>National Center of GIS & Space Applications</p>
              <p>Institute of Space Technology</p>
              <p>1, Islamabad Highway, Islamabad 44000 Pakistan</p>
              <p>+92 -(0)51-9075799, +92333-2662857</p>
              <p>Fax: +92 (0) 519273310</p>
              <p>icase2021@yahoo.com</p>
              <p>
                facebook.com/ncgsa.ist, facebook.com/ICASE.IST/
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Proceedings;
