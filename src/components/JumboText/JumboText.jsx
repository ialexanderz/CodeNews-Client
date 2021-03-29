import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'bootstrap-4-react';
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
        <div className="jumbotronnews">
            <Container className="jumbocontainer" >
                <Row>
                    <Col>
                    
                    {newsArticles.map((newsitem, idx) => (
                        <span  id="bigjumbo"  className="jumbo jumbotronnews">
                            <img className="headerimage" src={newsitem.urlToImage} alt="article-image"/>
                        </span>
                        )).slice(0,1)
                        }
                    
                    </Col>
                    
                    <Col>
                    {newsArticles.map((item, idx) => (
                            <div key={idx} className="technewslist2">
                            <h1 className="headtitle">{item.title}</h1>
                            <span className="headescription">{item.description}</span>
                            <span className="urllink"><Link exact to={item.url} className="visit2">Visit</Link></span>
                            </div>
                        )).slice(0,1)
                        }
                    </Col>
                </Row>
            </Container>
         </div>
      )
    }
  }


  