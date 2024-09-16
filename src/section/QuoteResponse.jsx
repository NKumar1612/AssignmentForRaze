import React from 'react'
import ResponseForm from '../component/ResponseForm'
import WhyUs from './sub-section/WhyUs';
import { Divider } from 'antd';

const QuoteResponse = () => {
  return (
    <main>
      <Divider orientation="left">Quote your response for - Diwali Celebration</Divider>
      <ResponseForm/>
      <WhyUs/>
    </main>
  )
}

export default QuoteResponse;