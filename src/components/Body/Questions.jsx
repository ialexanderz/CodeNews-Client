import React, { Component, useState, useEffect } from 'react'
import { Container, Row, Col } from 'bootstrap-4-react';
import News from '../Articles/News';
import Postform from '../Forms/Form';
import Posts from '../Posts/Posts';
import axios from 'axios';


export default class Questions extends Component {
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
    return (
      <Container id="bodycontainer" className="container">
        <Row  className="rowstyles">
          <Col className="newscolumn" col="12 sm-6 md-8">
              <h3>Ask a Techie</h3>
              <div>
                <Posts currentUser={this.props.currentUser} currentPost={this.state.posts} />
              </div>
          </Col>
        </Row>
      </Container>
    )
  }
}