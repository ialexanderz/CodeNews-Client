import React from 'react';
import {useEffect, useState} from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import axios from 'axios';
const REACT_APP_NEWS_ARTICLE_API = process.env.REACT_APP_NEWS_ARTICLE_API

export default function Post(props) {

const displayPost = props.currentPost.map((post,idx) => {
    return (
        <>
        <div className="possteddivs">
            {/* <img src={post.selectedFile} alt="file-selected" /> */}
            <h1 className="postmate">{post.title}</h1>
            <p className="postmate">{post.post_content}</p>
            <ul className="postlist">
                <li className="poster">Read more</li>
                {/* <li className="poster">Delete</li> */}
            </ul>
        </div>
        </>

    )
    
})
    return (
    <div>
            <div className="postdisplay"> 
               { displayPost }
            </div>
    </div>
    )}