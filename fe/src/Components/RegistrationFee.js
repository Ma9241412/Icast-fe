import React from 'react';
import { Divider, Table, Typography } from 'antd';
import '../Styles/Linkages.css'; 


const { Title } = Typography;

const columns = [
  {
    title: ' ',
    dataIndex: 'category',
    key: 'category',
    width: '25%',
  },
  {
    title: ' ',
    children: [
      {
        title: 'Professional',
        dataIndex: 'professional',
        key: 'professional',
        align: 'center',
        width: '25%',
      },
      {
        title: 'Student',
        dataIndex: 'student',
        key: 'student',
        align: 'center',
        width: '25%',
      },
    ],
  },
];

const data = [
  {
    key: '1',
    category: 'National',
    professional: 'PKR 10,000',
    student: 'PKR 5000',
  },
  {
    key: '2',
    category: 'International',
    professional: 'USD 400',
    student: 'USD 200',
  },
];

const RegistrationFee = () => {
  return (
    <div className="registration-fee-container">
      <Title style={{ fontSize: '48px', fontWeight: 'bold', }} className="title">
        Registration Fee
      </Title>
      <Divider className="ncgsa-divider" />
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        className="registration-fee-table"
      />
    </div>
  );
};

export default RegistrationFee;
