import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <img src="ff.jpg" width="50" alt="logo" /> IMPSHOP
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Головна
            </NavLink>
            <NavLink to="/Info" className="nav-link">
              Про нас
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
