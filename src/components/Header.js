import React from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';

function Header(props) {


  return (

    <Navbar collapseOnSelect  expand="sm">
      <a className="navbar-brand " href="/">Wilson Birch</a>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="navbar-nav ml-auto">
        <Nav.Item>
          <Nav.Link eventKey="1" as={Link} to="/">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Nav.Link eventKey="2" as={Link} to="/portfolio">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Nav.Link eventKey="3" as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Header;

