import React, { Component, useState, useEffect } from 'react'
import { Container, Row, Col } from 'bootstrap-4-react';
import News from '../Articles/News';
import Postform from '../Forms/Form';
import Post from '../Posts/Post/Post'
import axios from 'axios';


export default class Profile extends Component {
  constructor(){
    super();

    this.state = {
      user: "tdb",
      posts: "tbd",
      
    }
  }

  componentDidMount = () => {
    axios.get("http://localhost:4000/users/").then(response => {
      this.setState({
        user: response.data.userid
      });
    })
  };

  render() {
    return (
      <>
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
              {/* From Post */}
              <div>
                < Post />
              </div>
              <div>
                < Post />
              </div>
          </Col>
          <Col className="contentcolumn" col="6 md-3">
              <div className="centersources">
                <Postform />
              </div>
          </Col>
        </Row>
      </Container>
      </>
      
    )
  }
}
