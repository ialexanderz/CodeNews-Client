import React, { Component, useState, useEffect } from 'react'
import { Container, Row, Col } from 'bootstrap-4-react';
import News from '../Articles/News';
import Postform from '../Forms/Form';
import Posts from '../Posts/Posts';
import axios from 'axios';


export default class Profile extends Component {
  constructor(props){
    super(props);
    console.log(this.props)

    this.state = {
      posts: [{}]

    }
  }

  componentDidMount = (props) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`).then(response => {
      console.log(response)
      this.setState({
        posts: response.data
      });
    })
  };

  render() {
   console.log(this.state.posts)
  
    return (
      <>
        <Container id="bodycontainer2" className="container">
        <Row  className="rowstyles">
          <Col className="newscolumn2" col="12 sm-6 md-8">
              <div className="profdiv"> 
                    <div className="profilecols">
                        <p>Holds Username</p>
                    </div>
                    <div className="profilecols">
                    <p>Number of Posts</p>
                    </div>
                    <div className="profilecols">
                    <p>TBD</p>
                    </div>
              </div>
              {/* From Post */}
              <div>
                <Posts currentUser={this.props.currentUser} currentPost={this.state.posts} />
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
