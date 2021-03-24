import React from 'react';
import { Navbar, Nav, Collapse } from 'bootstrap-4-react';
import {Link} from 'react-router-dom';

function HeaderNavbar() {
    return (
        <Navbar id="navbg" expand="lg" light bg="light" mb="3">
        <Navbar.Brand href="/"><img id="logo" src="images/logotwo.png" alt="logo" /></Navbar.Brand>
        <Navbar.Toggler target="#navbarColor1" />
        <Collapse navbar id="navbarColor1">
          <Nav pills flex="column sm-row" className="navclass">
          <Nav.ItemLink href="/">Main</Nav.ItemLink>
          <Nav.ItemLink href="/questions">Ask a Techie</Nav.ItemLink>
          <Nav.ItemLink href="/jobs">Jobs</Nav.ItemLink>
          <Nav.ItemLink href="/signup">Sign up | Login</Nav.ItemLink>
         </Nav>
        </Collapse>
      </Navbar>
    )
}

export default HeaderNavbar;
