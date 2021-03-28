import React, { Component } from 'react'
import { Container, Row, Col } from 'bootstrap-4-react';
import News from '../Articles/News';
import Post from '../Posts/Post/Post';
import axios from 'axios';
const REACT_APP_NEWS_ARTICLE_API = process.env.REACT_APP_NEWS_ARTICLE_API


export default class Body extends Component {
  constructor(props){
    super(props)

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

  // getNews = async() => {
  //   const news = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${REACT_APP_NEWS_ARTICLE_API}`)
  //     .then((res) => {
  //       const data = res.data;
  //       this.setState({newsPost: data});
  //       console.log("newsPost Recieved");
  //     })
  // }

  render() {
    console.log(this.state.posts)

    return (
      <Container id="bodycontainer" className="container">
        <Row  className="rowstyles">
          <Col className="newscolumn" col="12 sm-6 md-8">
              <Post currentPost={this.state.posts} />
          </Col>
          <Col className="contentcolumn" col="6 md-3">
              <div className="centersources">Sources</div>
          </Col>
        </Row>
      </Container>
    )
  }
}
