import React from 'react'
import ResponseForm from '../component/ResponseForm'
import WhyUs from './sub-section/WhyUs';
import { Divider } from 'antd';
import QuoteHeader from '../component/QuoteHeader';

const QuoteResponse = () => {
  return (
    <main>
      <QuoteHeader/>
      <ResponseForm/>
      <WhyUs/>
    </main>
  )
}

export default QuoteResponse;