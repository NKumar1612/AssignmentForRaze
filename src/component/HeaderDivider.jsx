import React from 'react';
import { Divider, Row, Col } from 'antd';
import { FacebookFilled, LinkedinFilled, MailFilled, TwitterCircleFilled } from '@ant-design/icons';

const HeaderDivider = () => {
  return (
    <div>
      <Row justify="space-between" align="middle" style={{ marginBottom: '10px' }}>
        <Col>
          <span style={{ color: 'red', fontWeight: 'bold', fontSize: '14px' }}>
            **This form will expire in 10 minutes**
          </span>
        </Col>
      </Row>

      <Row justify="space-between" align="middle">
        <Col>
          <Divider orientation="left" style={{ margin: 0 }}>
            <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Quotation Request</span>
            <span style={{ fontWeight: 'normal', fontSize: '18px', marginLeft: '10px', color: '#555' }}>
              - Diwali Celebration
            </span>
            <span style={{ fontSize: '14px', marginLeft: '10px', color: '#888' }}>
              • Quote Id: PPQ125
            </span>
          </Divider>
        </Col>
        <Col>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#888', marginRight: '10px' }}>
              Share this request
            </span>
            <FacebookFilled style={{ color: '#3b5998', marginRight: '10px', fontSize: '24px' }} />
            <LinkedinFilled style={{ color: '#0077b5', marginRight: '10px', fontSize: '24px' }} />
            <MailFilled style={{ color: '#555', marginRight: '10px', fontSize: '24px' }} />
            <TwitterCircleFilled style={{ color: '#1da1f2', fontSize: '24px' }} />
          </div>
        </Col>
      </Row>

      {/* Divider placed here before the text below */}
      <Divider />

      {/* These rows will now appear below the Divider */}
      <Row justify="space-between" align="middle" style={{ marginTop: '2px', color: '#888' }}>
        <Col>
          <span>Last date to submit your response: <b>15th October 2023</b></span>
        </Col>
        <Col>
          <span>Posted 4 days ago</span>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderDivider;