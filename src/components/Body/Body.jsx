import React, { Component } from 'react'
import { Container, Row, Col } from 'bootstrap-4-react';
import News from '../Articles/News';

export default class Body extends Component {
  render() {
    return (
      <Container id="bodycontainer" className="container">
        <Row  className="rowstyles">
          <Col className="newscolumn" col="12 sm-6 md-8">
              <News />
          </Col>
          <Col className="contentcolumn" col="6 md-3">
              <div className="centersources">Sources</div>
          </Col>
        </Row>
      </Container>
    )
  }
}
