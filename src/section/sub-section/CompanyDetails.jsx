import React from 'react';
import { Row, Col, Typography, Avatar, Button } from 'antd';
import { DesktopOutlined, CalendarOutlined, AppstoreOutlined, 
         UsergroupAddOutlined, SafetyOutlined, BankOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const CompanyDetails = () => {
  return (
    <div>
      <Title level={3} style={{ color: '#4800ff' }}>Company Details</Title>
      <Text>
        Essae Teraoka Private Limited is a lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
      <div style={{ padding: '20px' }}>
        {/* First Row */}
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Row align="middle" style={{ padding: '10px' }}>
              <Col flex="none">
                <Avatar size={64} icon={<DesktopOutlined />} style={{ backgroundColor: '#f0f5ff', color: '#4800ff' }} />
              </Col>
              <Col flex="auto" style={{ paddingLeft: '10px' }}>
                <Text>Business Category</Text>
                <br />
                <Text strong>Exporter, Manufacturer</Text>
              </Col>
            </Row>
          </Col>

          <Col span={8}>
            <Row align="middle" style={{ padding: '10px' }}>
              <Col flex="none">
                <Avatar size={64} icon={<CalendarOutlined />} style={{ backgroundColor: '#f0f5ff', color: '#4800ff' }} />
              </Col>
              <Col flex="auto" style={{ paddingLeft: '10px' }}>
                <Text>Establishment</Text>
                <br />
                <Text strong>1976</Text>
              </Col>
            </Row>
          </Col>

          <Col span={8}>
            <Row align="middle" style={{ padding: '10px' }}>
              <Col flex="none">
                <Avatar size={64} icon={<AppstoreOutlined />} style={{ backgroundColor: '#f0f5ff', color: '#4800ff' }} />
              </Col>
              <Col flex="auto" style={{ paddingLeft: '10px' }}>
                <Text>Company Type</Text>
                <br />
                <Text strong>Mid-Level</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Second Row */}
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Row align="middle" style={{ padding: '10px' }}>
              <Col flex="none">
                <Avatar size={64} icon={<UsergroupAddOutlined />} style={{ backgroundColor: '#f0f5ff', color: '#4800ff' }} />
              </Col>
              <Col flex="auto" style={{ paddingLeft: '10px' }}>
                <Text>Total Strength</Text>
                <br />
                <Text strong>5000-9000</Text>
              </Col>
            </Row>
          </Col>

          <Col span={8}>
            <Row align="middle" style={{ padding: '10px' }}>
              <Col flex="none">
                <Avatar size={64} icon={<SafetyOutlined />} style={{ backgroundColor: '#f0f5ff', color: '#4800ff' }} />
              </Col>
              <Col flex="auto" style={{ paddingLeft: '10px' }}>
                <Text>GSTIN</Text>
                <br />
                <Text strong>22AXXXXXXXXXX5</Text>
              </Col>
            </Row>
          </Col>

          <Col span={8}>
            <Row align="middle" style={{ padding: '10px' }}>
              <Col flex="none">
                <Avatar size={64} icon={<BankOutlined />} style={{ backgroundColor: '#f0f5ff', color: '#4800ff' }} />
              </Col>
              <Col flex="auto" style={{ paddingLeft: '10px' }}>
                <Text>Revenue in range</Text>
                <br />
                <Text strong>₹500,00,000 - ₹900,00,000</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Add space below the icons */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button type="primary" size="large" style={{ backgroundColor: '#4800ff', borderColor: '#4800ff' }}>
            Contact Company
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;