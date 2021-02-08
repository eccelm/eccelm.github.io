import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function Navigation() {
  return (
    <div>
      <Navbar bg="danger" variant="dark" expand="sm" fixed="top">
        <Navbar.Brand>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-nav" />
        <Navbar.Collapse id="responsive-nav" className="justify-content-end">
          <Nav  >
            <Nav.Link href="/#home" active={true}>Home</Nav.Link>
            <Nav.Link href="/projects"  active={true}>Projects</Nav.Link>
            <Nav.Link href="/blog"  active={true}>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Navigation
