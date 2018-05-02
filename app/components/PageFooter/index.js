/**
 * PageFooter
 * */

import React from 'react';
import { github } from 'utils/constants';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import { StickyFooter } from './sticky';


const Footer = StickyFooter.extend`
  textAlign: center;
  background: #efeeee;
  color: #5a5a5a;
  padding: 10px;
  font-size: 14px;
`;

const Span = styled.span`
  color: #b9b9b9;
  margin-top:3px;
`;

function PageFooter() {
  return (
    <Footer>
      <Row>
        <Col sm={12} xs={24}>
          {'HappyUC Web Wallet - '}
          <a href={github} target="_blank" rel="noopener">
            HappyUC and ERC20 open source wallet (Github)
          </a><br />
          Created using: lightwallet, React.js, Ant design...
        </Col>

        <Span>
          <Col sm={12} xs={24}>
            Donate for development: (HUC)<br />
            0x075dca9ab2a11c7b875906eb97c04e9bca6dd8ea
          </Col>
        </Span>
      </Row>
    </Footer>
  );
}

PageFooter.propTypes = {

};

export default PageFooter;
