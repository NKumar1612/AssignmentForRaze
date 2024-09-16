import React from 'react';
import { Col, Divider, Row, Typography } from 'antd';
import RequestSummaryCard from '../../component/RequestSummaryCard';

const { Title, Text } = Typography;

const AboutRaze = () => {
  return (
    <Row>
    <Col span={6} push={18}>
      <RequestSummaryCard/>
    </Col>
    <Col span={18} pull={6}>
      <Title level={3} style={{ color: '#4800ff'}}>About Raze</Title>
      <Text>
        Maecenas diam velit, tincidunt vitae vulputate a, efficitur ac felis. 
        Cras pellentesque at justo et malesuada. Orci varius natoque penatibus 
        et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. 
        Quisque placerat imperdiet urna, quis tincidunt nisl interdum a. Praesent 
        lobortis sem non dui viverra tincidunt. Donec et facilisis nibh. Phasellus
        rutrum diam sit amet feugiat tempus. Vivamus faucibus mauris non posuere 
        vulputate. Integer eget molestie ipsum. Proin ultrices nec nunc id vehicula. 
        Proin tortor massa, accumsan sit amet ligula id, tempor ornare ligula. Integer 
        mollis et felis et semper. In a ligula ultrices leo lobortis euismod vulputate 
        sit amet dolor. Phasellus a mollis libero.
      </Text>
    </Col>
  </Row>
  )
}

export default AboutRaze;