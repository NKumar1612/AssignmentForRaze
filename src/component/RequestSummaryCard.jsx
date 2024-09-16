import React from 'react';
import { Card, Typography, Row, Col, Button } from 'antd';

const { Title, Text } = Typography;

const RequestSummaryCard = () => {
  return (
    <Card style={{ maxWidth: 400, margin: 'auto', borderRadius: 8 }}>
      {/* Title */}
      <Title level={4} style={{ marginBottom: 20 }}>
        Request Summary
      </Title>

      {/* Content */}
      <Row style={{ marginBottom: 10 }}>
        <Col span={8}>
          <Text strong>Items:</Text>
        </Col>
        <Col span={16}>
          <Text>Laptop, Mouse, Printing Ink</Text>
        </Col>
      </Row>

      <Row style={{ marginBottom: 10 }}>
        <Col span={8}>
          <Text strong>Supply date:</Text>
        </Col>
        <Col span={16}>
          <Text>10th November 2023</Text>
        </Col>
      </Row>

      <Row style={{ marginBottom: 20 }}>
        <Col span={8}>
          <Text strong>Total budget range:</Text>
        </Col>
        <Col span={16}>
          <Text>₹3,50,000 - ₹5,00,000</Text>
        </Col>
      </Row>

      {/* Button */}
      <Button type="primary" block style={{ backgroundColor: '#3a00d9', borderColor: '#3a00d9' }}>
        Submit Quote
      </Button>
    </Card>
  );
};

export default RequestSummaryCard;
