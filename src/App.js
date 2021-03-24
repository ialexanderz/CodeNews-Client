import React from 'react';
import JumboText from './components/JumboText/JumboText';
import JumboTextTwo from './components/JumboText/JumboTextTwo';
import Body from './components/Body/Body';
import HeaderNavbar from './components/Header/Navbar/HeaderNav';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import UserAuth from './components/Authentication/UserAuth';
import Jobs from './components/Body/Jobs';
import Questions from './components/Body/Questions';
import Profile from './components/Dashboard/Profile';




function App() {
  return (
    <Router>
      <>
        <Route path="/" exact={true}>
          <HeaderNavbar />
          <JumboText />
          <Body />
        </Route>

        <Route path="/questions">
          <HeaderNavbar />
          <JumboTextTwo />
          <Questions />
        </Route>

        <Route path="/jobs">
          <HeaderNavbar />
          <JumboTextTwo />
          <Jobs />
        </Route>

        <Route path="/signup">
          <HeaderNavbar />
          <JumboTextTwo />
          <UserAuth />
        </Route>

        <Route path="/dashboard">
          <HeaderNavbar />
          <JumboTextTwo />
          <Profile />
        </Route>
        </>
    </Router>
  )
}

export default App;
