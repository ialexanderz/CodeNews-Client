import React, { Component } from 'react'
import { Container, Row, Col } from 'bootstrap-4-react';


export default class Jobs extends Component {
  render() {
    return (
      <Container id="bodycontainer" className="container">
        <Row  className="rowstyles">
          <Col className="newscolumn" col="12 sm-6 md-8">
              <h3>Job Posting</h3>
              {/* Jobs component */}
          </Col>
        </Row>
      </Container>
    )
  }
}