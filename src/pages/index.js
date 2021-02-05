import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
// react-bootstrap required components
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"
import ImageOne from "../assets/img/cubaandme.jpg"
import ProfileImage from "../assets/img/marthaprofile.jpg"
//Components
import Layout from "../components/layout"
import About from "../components/aboutme"
export default function Home() {
  return (
    <Layout>
      <br />
      <div className="text-center text-dark shadow-lg p-3 mb-5 bg-light rounded" id="home">
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
        <br />
        <br />
        <br />
      </div>
      <div className="d-flex justify-content-center text-center text-dark shadow-lg p-3 mb-5 bg-light rounded">
      <Row xs={1} md={2}>
          <Col>
          <Container fluid>
            <Image src={ProfileImage} thumbnail fluid/>
            </Container>
          </Col>
          <Col className="">
            {" "}
            <p className="text-center">Thanks for visiting my Portfolio !</p>
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
