import React from 'react';
import { Typography } from 'antd';
import QuoteRequestForm from '../../component/QuoteRequestForm';

const {Title, Text} = Typography;

const RequestDescription = () => {
  return (
    <div>
      <Title level={3}  style={{ color: '#3a00d9' }}>Quotation Request Details</Title>
      <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Donec lobortis libero et fermentum scelerisque. Pellentesque 
      malesuada leo leo, nec lacinia metus auctor malesuada. Vestibulum 
      placerat leo et lectus imperdiet, at iaculis lorem tempor. Sed 
      ante odio, vehicula sit amet dolor sit amet, fringilla imperdiet orci.
      </Text>
      <QuoteRequestForm/>
    </div>
  )
}

export default RequestDescription;