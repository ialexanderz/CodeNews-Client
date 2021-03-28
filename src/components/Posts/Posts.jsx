import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import Post from './Post/Post';

export default class Posts extends Component {
  render() {
      console.log(this.props)
    return (
      <Container>
        <Row>
          <Col>
            <Post currentPost={this.props.currentPost} />
          </Col>
        </Row>
      </Container>
    )
  }
}