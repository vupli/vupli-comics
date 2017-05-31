import React from 'react';
import { Col, Row } from 'antd';

import './home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <p>Home</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
