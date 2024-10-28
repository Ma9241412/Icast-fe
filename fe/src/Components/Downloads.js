import React from 'react';
import { Divider, Table, Typography } from 'antd';
import '../Styles/Linkages.css'; 
; 

const { Title } = Typography;

// Define table columns
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
    render: () => <a href="">Download Here</a>,
  },
];

// Define table data
const data = [
  {
    key: '1',
    title: 'Manuscript Full Paper',
  },
  {
    key: '2',
    title: 'Poster Template for ICASE 2021',
  },
  {
    key: '3',
    title: 'ICASE 2021 Flyer',
  },
  {
    key: '4',
    title: 'ICASE 2021 Brochure',
  },
  {
    key: '5',
    title: 'ICASE 2021 Oral presentation',
  },
];

const Downloads = () => {
  return (
    <div className="downloads-container">
      <Title style={{ fontSize: '48px', fontWeight: 'bold', }} className="title">Downloads</Title>
      <Divider className="ncgsa-divider" />
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="downloads-table"
      />
    </div>
  );
};

export default Downloads;
