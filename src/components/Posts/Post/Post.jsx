import React from 'react';
import {useEffect, useState} from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import axios from 'axios';

export default function Post(props) {
    console.log(props)
    

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_SERVER_URL}/posts/:id`).then(res => {  
    //         if (res.ok) {
    //             console.log(res)
    //             return res.json()
    //         }
    //     }).then(jsonRes => setPosts(jsonRes));
    // }, [])
    // console.log(posts)
const displayPost = props.currentPost.map((post) => {
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.post_content}</p>
            {/* <img src={post.selectedFile} alt="file-selected" /> */}
        </>

    )
    
})
    return (
    <div>
        <h1>Hello</h1> 
            <div>
                
               { displayPost }
            </div>
    </div>
    )}