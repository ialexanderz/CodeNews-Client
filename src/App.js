import React, {useState, useEffect } from 'react';
import JumboText from './components/JumboText/JumboText';
import JumboTextTwo from './components/JumboText/JumboTextTwo';
import Body from './components/Body/Body';
import HeaderNavbar from './components/Header/Navbar/HeaderNav';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import UserAuth from './components/Authentication/UserAuth';
import Jobs from './components/Body/Jobs';
import Questions from './components/Body/Questions';
import jwt_decode from 'jwt-decode';
import Profile from './components/Dashboard/Profile';
import Userprofile from './components/Profile/Userprofile';



function App() {

  const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    const token = localStorage.getItem('jwtToken')
    if(token) {
      
      const decoded = jwt_decode(token)
      
      setCurrentUser(decoded)
    } else {
      
      setCurrentUser(null)
    }
  }, [])

  
  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken')
      setCurrentUser(null)
    }
  }

  return (
    <>
    <Router>
    <HeaderNavbar currentUser={currentUser} handleLogout={handleLogout} />
      <Switch>
        <Route path="/" exact={true}>
          <JumboText />
          <Body />
        </Route>

        <Route path="/questions">
          <JumboTextTwo />
          <Questions />
        </Route>

        <Route path="/jobs">
          <JumboTextTwo />
          <Jobs />
        </Route>

        <Route 
          path="/signup" 
          render={ (props) =>(
          <> 
            <JumboTextTwo />
            <UserAuth {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser} />
          </>
          )
        }>
          
        </Route>

        <Route path="/dashboard/:id">
          <Userprofile currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App;
