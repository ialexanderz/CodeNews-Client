import React, { Component } from 'react'
import { Container, Row, Col } from 'bootstrap-4-react';
import News from '../Articles/News';

export default class Profile extends Component {
  render() {
    return (
      <Container id="bodycontainer2" className="container">
        <Row  className="rowstyles">
          <Col className="newscolumn2" col="12 sm-6 md-8">
              <div className="profdiv"> 
                    <div className="profilecols">
                        <p>Hello from Profile</p>
                    </div>
                    <div className="profilecols">
                    <p>Hello two from Profile</p>
                    </div>
                    <div className="profilecols">
                    <p>Hello three from Profile</p>
                    </div>
              </div>
              <div>
                <News />
              </div>
          </Col>
          <Col className="contentcolumn" col="6 md-3">
              <div className="centersources">Sources</div>
          </Col>
        </Row>
      </Container>
    )
  }
}
