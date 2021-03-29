import React, {useState, useEffect} from 'react';
import { Form } from 'bootstrap-4-react';
import axios from 'axios';

export default function Postform(){

  const [title, setTitle] = useState('');
  const [post_content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState('');


  function handleSubmit(e){
    e.preventDefault();
    console.log(post_content);
    const newPost ={
      title,
      post_content,
      setSelectedFile
    }
    axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newPost)
  }

  function refreshPage() {

		window.location.reload(false);

	}





    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
              <label htmlFor="title">Post Title</label>
              <Form.Input 
              onChange = { e => setTitle(e.target.value)} 
              value={title}
              className="commentform"  
              type="text" id="title" 
              placeholder="Post Title" />
            </Form.Group>
            <Form.Group>
              <label htmlFor="content">Content</label>
              <Form.Textarea 
              onChange = {e => setContent(e.target.value)}
              value={post_content} 
              className="commentform"  
              id="content" 
              rows="3">
              </Form.Textarea>
            </Form.Group>
            <Form.Group>
            <label htmlFor="selectedFile">Upload Image</label>
              <Form.File 
              onChange = {e => setSelectedFile(e.target.File)}
              value={selectedFile} 
              id="upload"/>
            </Form.Group>
            <button onClick={refreshPage} className="postsubmit" type="submit">Submit</button>
      </Form>
        </>
      
    )
  }