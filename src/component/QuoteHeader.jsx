import React from 'react';
import { Divider, Typography, Row, Col } from 'antd';

const { Text } = Typography;

const QuoteHeader = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Divider orientation="left" style={{ fontSize: '16px', fontWeight: 'bold' }}>
        Quote your response for - Diwali Celebration
      </Divider>
      <Row justify="space-between">
        <Col>
          <Text type="secondary">Quote Id: PPQ125</Text>
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: '10px' }}>
        <Col>
          <Text>Date of supply: 10th November 2023</Text>
        </Col>
      </Row>
    </div>
  );
};

export default QuoteHeader;