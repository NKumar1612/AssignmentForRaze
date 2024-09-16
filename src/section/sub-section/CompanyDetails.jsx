import React from 'react';
import { Row, Col, Typography } from 'antd';

const {Title, Text} = Typography;

const CompanyDetails = () => {
  return (
    <div>
      <Title level={3}  style={{ color: '#4800ff' }}>Company Details</Title>
      <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Donec lobortis libero et fermentum scelerisque. Pellentesque 
      malesuada leo leo, nec lacinia metus auctor malesuada. Vestibulum 
      placerat leo et lectus imperdiet, at iaculis lorem tempor. Sed 
      ante odio, vehicula sit amet dolor sit amet, fringilla imperdiet orci.
      </Text>
      <div style={{ padding: '20px' }}>
        {/* First Row */}
        <Row>
          <Col span={8} style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>Column 1</Col>
          <Col span={8} style={{ backgroundColor: '#d9d9d9', padding: '10px' }}>Column 2</Col>
          <Col span={8} style={{ backgroundColor: '#bfbfbf', padding: '10px' }}>Column 3</Col>
        </Row>

        {/* Second Row */}
        <Row>
          <Col span={8} style={{ backgroundColor: '#a6a6a6', padding: '10px' }}>Column 4</Col>
          <Col span={8} style={{ backgroundColor: '#8c8c8c', padding: '10px' }}>Column 5</Col>
          <Col span={8} style={{ backgroundColor: '#737373', padding: '10px' }}>Column 6</Col>
        </Row>
    </div>

    </div>
  )
}

export default CompanyDetails;