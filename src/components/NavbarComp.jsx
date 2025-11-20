import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"
const NavbarComp = () => {
  return (
    <Navbar expand="lg" className="navbar shadow-sm ">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-1 text-light ">
          KPMG <span >RealEstate</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto ">
            
            <Nav.Link as={Link} to="/" className="text-light fs-2 ">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/properties" className="text-light fs-2">
              Properties
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" className="text-light fs-2">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
