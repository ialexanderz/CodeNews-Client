import React, { Component } from 'react'
import { Container, Row, Col } from 'bootstrap-4-react';
import News from '../Articles/News';
import Post from '../Posts/Post/Post';
import axios from 'axios';
import { Link } from 'react-router-dom';
const REACT_APP_NEWS_ARTICLE_API = process.env.REACT_APP_NEWS_ARTICLE_API


export default class Body extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: [{}],
      newsPost: []

    }
  }
   
  componentDidMount = (props) => {
    axios.all([axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`), 
    axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${REACT_APP_NEWS_ARTICLE_API}`)])
      .then(axios.spread((...responses) => {
        const responseOne = responses[0]
        const responseTwo = responses[1]

        this.setState({
          posts: responseOne.data,
          newsPost: responseTwo.data.articles
        })
      }
      
      ))
  };

  render() {
    // console.log(this.state.posts)
    const newsArticles = this.state.newsPost;
    console.log(newsArticles)

    return (
      <Container id="bodycontainer" className="container">
        <Row className="tech">
         {newsArticles.map((item, idx) => (
           <div key={idx} className="technewslist">
             <h1>{item.title}</h1>
             <img className="techimage" src={item.urlToImage} alt="article-image"/>
             {item.description}
             <span className="urllink"><a href={item.url} target="_blank" className="visit">Visit</a></span>
             <p>Article by: {item.author}</p>
           </div>
          )).slice(1,8)
          }
        </Row>
        {/* <Row  className="rowstyles">
          <Col className="newscolumn" col="12 sm-6 md-8">
              <Post currentPost={this.state.posts} />
          </Col>
          <Col className="contentcolumn" col="6 md-3">
              <div className="centersources">Sources</div>
          </Col>
        </Row> */}
      </Container>
    )
  }
}
