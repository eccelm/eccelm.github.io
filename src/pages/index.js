import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Jumbotron from "react-bootstrap/Jumbotron"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Dropdown from "react-bootstrap/Dropdown"
export default function Home() {
  return (
    <>
      <Navbar bg="danger" variant="dark" expand="sm" fixed="top">
        <Navbar.Brand>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-nav" />
        <Navbar.Collapse id="responsive-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Projects" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">All Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.2">
                React Native Final Project
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">
                React Reddit Clone
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">
                React Student Tracker
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">About Me</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron fluid>
        <Container>
          <h1>Martha Eccles</h1>
          <h2>Junior Developer</h2>
        </Container>
      </Jumbotron>
    </>
  )
}
