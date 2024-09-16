import React from 'react'
import ResponseForm from '../component/ResponseForm'
import WhyUs from './sub-section/WhyUs';
import { Col } from 'antd';
import QuoteHeader from '../component/QuoteHeader';

const QuoteResponse = () => {
  return (
    <main>
      <Col style={{ maxWidth: '900px', width: '100%' }}> 
      <QuoteHeader/>
      <ResponseForm/>
      <WhyUs/>
      </Col>
    </main>
  )
}

export default QuoteResponse;