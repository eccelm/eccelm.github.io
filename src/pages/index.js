import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
// react-bootstrap required components
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"
import ProfileImage from "../assets/img/testprofile.png"
//Components
import Layout from "../components/layout"
import About from "../components/aboutme"
export default function Home() {
  return (
    <Layout>
      <br />
      <div className="text-center text-dark shadow-lg p-3 mb-5 bg-light rounded" style={{minHeight: `40vh`}}id="home">
      <br />
        <br />
        <br /> 
        <h1 className="display-3">Martha Eccles</h1>
        <h2 className="display-4">Junior Developer</h2>
        <hr />
        <Button href="https://github.com/eccelm" variant="outline-dark">
          Github
        </Button>{" "}
        <Button
          href="https://www.linkedin.com/in/marthaeccles/"
          variant="outline-info"
        >
          LinkedIn
        </Button>
    
      </div>
      <div className="d-flex text-center text-dark shadow-lg p-3 mb-5 bg-light rounded">
      <Row xs={1} md={2}>
          <Col className="my-auto">
          <Container>
            <Image src={ProfileImage} thumbnail fluid/>
            </Container>
          </Col>
          <Col className="my-auto">
            <p>Thanks for visiting my Portfolio !</p>
            <p>
              You can browse through my projects to date, see what I've been
              learning since graduating from Northcoders in the blog, or if you
              just want to find out a bit more about me, keep scrolling down!
            </p>
          </Col>
        </Row>
      </div>
      <About />
    </Layout>
  )
}
