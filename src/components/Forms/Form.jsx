import React from 'react';
import { Form } from 'bootstrap-4-react';

export default function Postform(){
    return (
        <>
        <Form>
            <Form.Group>
            <label htmlFor="creator">Username</label>
            <Form.Input className="commentform" type="text" id="creator" placeholder="Username" />
            </Form.Group>
            <Form.Group>
            <label htmlFor="title">Post Title</label>
            <Form.Input className="commentform"  type="text" id="title" placeholder="Post Title" />
            </Form.Group>
            <Form.Group>
            <label htmlFor="comments">Comments</label>
            <Form.Textarea className="commentform"  id="comments" rows="3"></Form.Textarea>
            </Form.Group>
            <Form.Group>
            <label htmlFor="upload">Upload Image</label>
            <Form.File id="upload"/>
            </Form.Group>
            <button className="postsubmit" type="submit">Submit</button>
      </Form>
        </>
      
    )
  }