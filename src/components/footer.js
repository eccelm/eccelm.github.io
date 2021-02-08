import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function Footer() {
  return (
    <div>
      <Navbar className="justify-content-end"  bg="danger" variant="dark" expand="sm" fixed="bottom">
   
          <Nav  >
            <Nav.Link href="" active={true}>LinkedIn</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  )
}
export default Footer
