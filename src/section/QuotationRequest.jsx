import React from 'react'
import AboutRaze from './sub-section/AboutRaze'
import RequestDescription from './sub-section/RequestDescription';
import CompanyDetails from './sub-section/CompanyDetails';
import { Divider } from 'antd';

const QuotationRequest = () => {
  return (
    <main>
      <Divider orientation="left">Quotation Request - Diwali Celebration</Divider>
      <AboutRaze/>
      <RequestDescription/>
      <CompanyDetails/>
    </main>
  )
}

export default QuotationRequest