import React from 'react';
import { Divider, Table, Typography } from 'antd';
import '../Styles/Linkages.css'; 


const { Title } = Typography;

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    align: 'left',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
  },
];

const data = [
  {
    key: '1',
    title: 'Call for Papers',
    date: 'April 15, 2021',
  },
  {
    key: '2',
    title: 'Abstract Submission Deadline',
    date: 'June 30, 2021',
  },
  {
    key: '3',
    title: 'Manuscripts Submission Deadline',
    date: 'August 31, 2021',
  },
  {
    key: '4',
    title: 'Manuscripts Acceptance Notification',
    date: 'October 31, 2021',
  },
  {
    key: '5',
    title: 'Registration Fee Submission Deadline',
    date: 'November 20, 2021',
  },
  {
    key: '6',
    title: 'Final Paper Submission (Camera Ready)',
    date: 'November 30, 2021',
  },
  {
    key: '7',
    title: 'Conference Day',
    date: 'December 14–16, 2021',
  },
];

const ImportantDates = () => {
  return (
    <div className="important-dates-container">
      <Title style={{ fontSize: '48px', fontWeight: 'bold', textAlign:'left',color:"white"}} className="title">
        Important Dates
      </Title>
      <Divider className="ncgsa-divider" />
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        className="important-dates-table"
      />
    </div>
  );
};

export default ImportantDates;
