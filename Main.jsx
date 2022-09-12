import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import About from "./Component/About";
import Nopage from "./Component/Nopage";

const Main = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" style={{marginBottom:"1.5rem"}}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Quick News
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </Router>
  );
};

export default Main;
