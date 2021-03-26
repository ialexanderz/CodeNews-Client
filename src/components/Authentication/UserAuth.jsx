import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'bootstrap-4-react';
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import Profile from '../Dashboard/Profile';


export default function UserAuth(props) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [loginemail, setLoginemail] = useState('');
  const [loginpassword, setLoginpassword] = useState('');

  // Error msg
  const [message, setMessage] = useState('');


  const handleRegister = async (e) => {
    try {
      e.preventDefault();

      // Register form
      const registerBody = {
        username: username,
        email: email,
        password: password,
        confirmpassword: confirmpassword
      }

      const registerResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, registerBody);



      const  token = registerResponse.data.token;
      console.log(token)
      localStorage.setItem('jwtToken', token);

      const registerdecoded = jwt_decode(token);
      console.log(registerdecoded);
      props.setCurrentUser(registerdecoded)


    } catch (error) {
      if (error.response.status === 400) {
        console.log(error.response.data.msg);
        setMessage(error.response.data.msg)
      } else {
        console.log(error)
      }
    }
  }



  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      // Login form
      const loginBody = {
        email: loginemail,
        password: loginpassword
      }

      const loginResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, loginBody);

      const token = loginResponse.data.token;
      localStorage.setItem('jwtToken', token);

      const logindecoded = jwt_decode(token);


      props.setCurrentUser(logindecoded)


    } catch (error) {
      // if status is 400
      
      if (error.response.status === 400) {
        console.log(error.response.data.msg);
        setMessage(error.response.data.msg)
      } else {
        console.log(error)
      }
    }
  }

  if (props.currentUser) return <Redirect to='Profile' component={Profile} currentUser={props.currentUser} />

  return (
    <Container>
      <Row>
        {/* Register Form */}
        <Col id="signmeup">
          <h2 className="logintitle">Sign Up</h2>

          <Form id="registerform" onSubmit={handleRegister}>

            <Form.Group>
              <label htmlFor="username">Username</label>
              <Form.Input
                className="formusername"
                type="text"
                id="username"
                placeholder="Enter Username"
                onChange={e => setUsername(e.target.value)}
                value={username}
              />
            </Form.Group>

            <Form.Group>
              <label htmlFor="inputEmail">Email address</label>
              <Form.Input
                className="formemail"
                type="email"
                id="inputEmail"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group>
              <label htmlFor="inputPassword">Password</label>
              <Form.Input
                className="formpassword1"
                type="password"
                id="inputPassword"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>

            <Form.Group>
              <label htmlFor="inputPassword2">Confirm Password</label>
              <Form.Input
                className="formpassword2"
                type="password"
                id="inputPassword2"
                placeholder="Password"
                onChange={e => setConfirmpassword(e.target.value)}
                value={confirmpassword}
              />
            </Form.Group>
            <Button
              className="formbutton"
              primary
              type="submit">Sign up
            </Button>
          </Form>
        </Col>

        {/* Login Form */}
        <Col id="logmein">
          <h2 className="logintitle">Login</h2>
          <Form id="loginform" onSubmit={handleLogin}>
            <Form.Group>
              <label htmlFor="loginEmail">Email address</label>
              <Form.Input
                type="email"
                id="loginEmail"
                placeholder="Enter email"
                onChange={e => setLoginemail(e.target.value)}
                value={loginemail}
              />

            </Form.Group>
            <Form.Group>
              <label htmlFor="loginPassword">Password</label>
              <Form.Input
                type="password"
                id="loginPassword"
                placeholder="Password"
                onChange={e => setLoginpassword(e.target.value)}
                value={loginpassword}
              />
            </Form.Group>
            <Button className="loginbutton" primary type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}



