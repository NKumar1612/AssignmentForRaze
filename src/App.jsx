import React from 'react';
import { Row, Col } from 'antd';
import QuotationRequest from './section/QuotationRequest';
import QuoteResponse from './section/QuoteResponse';

const App = () => (
  <main>
    {/* Centered and responsive layout */}
    <Row justify="center" style={{ padding: '20px' }}>
      <Col style={{ maxWidth: '1200px', width: '100%' }}> 
        <QuotationRequest />
        <QuoteResponse />
      </Col>
    </Row>
  </main>
);

export default App;
