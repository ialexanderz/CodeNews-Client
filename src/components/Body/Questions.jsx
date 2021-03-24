import React, { Component } from 'react'
import { Container, Row, Col } from 'bootstrap-4-react';


export default class Questions extends Component {
  render() {
    return (
      <Container id="bodycontainer" className="container">
        <Row  className="rowstyles">
          <Col className="newscolumn" col="12 sm-6 md-8">
              <h3>Ask a Techie</h3>
              {/* Questions component */}
          </Col>
        </Row>
      </Container>
    )
  }
}