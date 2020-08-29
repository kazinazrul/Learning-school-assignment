
import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import '../../bootstrap.min.css';
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#course-academy">Learning School</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#programs">Courses</Nav.Link>
          <Nav.Link href="#programs">Programs</Nav.Link>
          <Nav.Link href="#careers">Careers</Nav.Link>
          <Nav.Link href="#for-enterprise">Enterprise</Nav.Link>
        </Nav>
        
      </Navbar>
    </div>
  );
};

export default Header;