import React from 'react';
import { Typography } from 'antd';

const {Title, Text} = Typography;

const RequestDescription = () => {
  return (
    <div>
      <Title level={3}  style={{ color: '#4800ff' }}>Quotation Request Details</Title>
      <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Donec lobortis libero et fermentum scelerisque. Pellentesque 
      malesuada leo leo, nec lacinia metus auctor malesuada. Vestibulum 
      placerat leo et lectus imperdiet, at iaculis lorem tempor. Sed 
      ante odio, vehicula sit amet dolor sit amet, fringilla imperdiet orci.
      </Text>
    </div>
  )
}

export default RequestDescription;