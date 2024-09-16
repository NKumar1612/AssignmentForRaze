import React from 'react'
import AboutRaze from './sub-section/AboutRaze'
import RequestDescription from './sub-section/RequestDescription';
import CompanyDetails from './sub-section/CompanyDetails';
import HeaderDivider from '../component/HeaderDivider';
import { Row, Col } from 'antd';

const QuotationRequest = () => {
  return (
    <main>
      <HeaderDivider/>
      <AboutRaze/> 
      <Col style={{ maxWidth: '900px', width: '100%' }}> 
        <RequestDescription/>
        <CompanyDetails/>
      </Col>

    </main>
  )
}

export default QuotationRequest