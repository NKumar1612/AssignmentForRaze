import React from 'react';
import { Card, Typography, Button } from 'antd';

const { Title, Text } = Typography;

const RequestSummaryCard = () => {
  return (
    <Card style={{ maxWidth: '400px', margin: '10px auto', borderRadius: '8px', padding: '10px', backgroundColor: '#fafafa' }}>
      {/* Title */}
      <Title level={4} style={{ marginTop: '10px',marginBottom: '20px', textAlign: 'center' }}>
        Request Summary
      </Title>

      {/* Content using Flexbox */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <Text strong>Items:</Text>
        <Text>Laptop, Mouse, Printing Ink</Text>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <Text strong>Supply date:</Text>
        <Text>10th November 2023</Text>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Text strong>Total budget range:</Text>
        <Text>₹3,50,000 - ₹5,00,000</Text>
      </div>

      {/* Submit Button */}
      <Button 
        type="primary" 
        block 
        style={{ backgroundColor: '#3a00d9', borderColor: '#3a00d9', fontSize: '16px', marginTop: '20px' }}
      >
        Submit Quote
      </Button>
    </Card>
  );
};

export default RequestSummaryCard;

