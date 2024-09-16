import React from 'react'
import AboutRaze from './sub-section/AboutRaze'
import RequestDescription from './sub-section/RequestDescription';
import CompanyDetails from './sub-section/CompanyDetails';
import HeaderDivider from '../component/HeaderDivider';
import { Divider } from 'antd';

const QuotationRequest = () => {
  return (
    <main>
      <HeaderDivider/>
      <AboutRaze/>
      <RequestDescription/>
      <CompanyDetails/>
    </main>
  )
}

export default QuotationRequest