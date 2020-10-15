import React from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import logo from './assets/react_logo.svg';

function Header(props) {


  return (

    <Navbar collapseOnSelect  expand="sm">
      <a className="navbar-brand " href="/React_Portfolio/">Wilson Birch</a><img src={logo} className="App-logo" alt="logo" />
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="navbar-nav ml-auto">
        <Nav.Item>
          <Nav.Link eventKey="1" as={Link} to="/React_Portfolio/">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Nav.Link eventKey="2" as={Link} to="/React_Portfolio/portfolio">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Nav.Link eventKey="3" as={Link} to="/React_Portfolio/contact">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Header;

