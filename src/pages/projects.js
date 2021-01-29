import React from "react"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Carousel from "react-bootstrap/Carousel"
import MatchesPicture from "../assets/img/Matches-Screen.jpg"
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import Layout from "../components/layout"

export default function Projects() {
  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      This link is on its way in the next website update!
    </Tooltip>
  )

  return (
    <Layout>
      <h1>Projects</h1>
      <h2>Click anywhere on a project summary to see the full details</h2>
      <br />

      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Container>
              <Row xs={1} sm={2}>
                <Col>
                  {" "}
                  <h2>
                    Tennis Match
                    <span role="img" aria-label="tennis raquet emoji">
                      🎾
                    </span>
                  </h2>
                  <p>
                    The final project of the Northcoders bootcamp! Putting a
                    sporty spin on swiping right to let users find other players
                    in their local area. Will you find your tennis match?
                  </p>
                </Col>
                <Col>
                  <div>
                    <p>Tech Stack:</p>
                    <Badge pill variant="primary">
                      React Native
                    </Badge>{" "}
                    <Badge pill variant="info">
                      Expo
                    </Badge>{" "}
                    <Badge pill variant="primary">
                      Axios
                    </Badge>{" "}
                    <Badge pill variant="warning">
                      PSQL
                    </Badge>{" "}
                    <Badge pill variant="warning">
                      Firebase
                    </Badge>{" "}
                    <Badge pill variant="danger">
                      Express
                    </Badge>{" "}
                    <Badge pill variant="danger">
                      Knex
                    </Badge>{" "}
                    <Badge pill variant="light">
                      Heroku
                    </Badge>{" "}
                    <Badge pill variant="light">
                      Jest Testing
                    </Badge>
                  </div>
                </Col>
              </Row>
            </Container>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Container>
                <Row xs={1} lg={2}>
                  <Col>
                    <p>
                      TeamMates: Benjamin Karst, Michael Squires, Alice Horsey
                    </p>
                    <p>
                      The idea for Tennis Match came from my team mate Ben, who
                      wanted to design an app that would allow him to find
                      others to play against without needing to join up to a
                      local club.
                    </p>
                    <p>
                      In the MVP of the app we decided the core features would
                      be profile and authentication creation, the ability to set
                      preferences to find the best suited matches, and a
                      messaging functionality so users can chat to arrange a
                      game!
                    </p>
                    <p>
                      We had 2 and half weeks to complete this MVP. The first
                      week was just before the Christmas break and we spent this
                      spiking out React-Native and potential libraries we might
                      use
                    </p>
                  </Col>
                  <Col>
                    <Container>
                      <div style={{ maxWidth: "300px" }}>
                        <Carousel>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={MatchesPicture}
                              alt="First slide"
                            />
                            <Carousel.Caption>
                              <h3>First slide label</h3>
                              <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                              </p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={MatchesPicture}
                              alt="Third slide"
                            />

                            <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={MatchesPicture}
                              alt="Third slide"
                            />

                            <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur.
                              </p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                      </div>{" "}
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <Container>
              <Row xs={1} sm={2}>
                <Col>
                  {" "}
                  <span role="img">
                    <h2>
                      The Northcoder News{" "}
                      <span role="img" aria-label="newspaper emoji">
                        📰
                      </span>
                    </h2>
                  </span>
                  <p>
                    A reddit-style website with both front and back-end built
                    from scratch. Come catch up on the latest Northcoders news!
                  </p>
                </Col>
                <Col>
                  <p>Tech Stack:</p>
                  <div>
                    <Badge pill variant="primary">
                      React
                    </Badge>{" "}
                    <Badge pill variant="primary">
                      Axios
                    </Badge>{" "}
                    <Badge pill variant="warning">
                      PSQL
                    </Badge>{" "}
                    <Badge pill variant="danger">
                      Express
                    </Badge>{" "}
                    <Badge pill variant="danger">
                      Knex
                    </Badge>{" "}
                    <Badge pill variant="danger">
                      NodeJS
                    </Badge>{" "}
                    <Badge pill variant="light">
                      Heroku
                    </Badge>{" "}
                    <Badge pill variant="light">
                      Jest Testing
                    </Badge>
                  </div>
                </Col>
              </Row>
            </Container>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Row xs={1} md={2}>
                <Col>
                  Hello from the first column. My purpose is to explain the
                  project and it's challenges and what what their is still to
                  do! I also need to provide a link to the github code and, if
                  the project is hosted, a link to the page it is hosted on
                </Col>
                <Col>
                  Hello from the second column. My purpose is to house a little
                  Carousel of images from the project
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <Container>
              <Row xs={1} sm={2}>
                <Col>
                  {" "}
                  <span role="img">
                    {" "}
                    <h2>
                      Student Tracker
                      <span role="img" aria-label="magnifying glass emoji">
                        🔍
                      </span>
                    </h2>
                  </span>
                  <p>
                    A smaller sprint from the front-end block currently
                    undergoing a makeover to trial CSS styling in React and
                    getting to grips with testing React!
                  </p>
                </Col>
                <Col>
                  <div>
                    <p>Tech Stack: </p>
                    <Badge pill variant="primary">
                      React
                    </Badge>{" "}
                    <Badge pill variant="primary">
                      Axios
                    </Badge>{" "}
                  </div>{" "}
                </Col>
              </Row>
            </Container>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Row xs={1} md={2}>
                <Col>
                  Hello from the first column. My purpose is to explain the
                  project and it's challenges and what what their is still to
                  do! I also need to provide a link to the github code and, if
                  the project is hosted, a link to the page it is hosted on
                </Col>
                <Col>
                  Hello from the second column. My purpose is to house a litle
                  Carousel of images from the project
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <Container>
              <Row>
                <Col>
                  {" "}
                  <h2>Mini Projects</h2>
                  <p>
                    A pick'n'mix of small projects for getting to grips with
                    each bit of technology and spiking out of
                    libraries/frameworks for larger projects!
                  </p>
                </Col>
                <Col>
                  {" "}
                  <p>
                    Tech Stack:
                    <div>
                      <Badge pill variant="dark">
                        A little bit of everything!
                      </Badge>
                    </div>
                  </p>
                </Col>
              </Row>
            </Container>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              {" "}
              <span>
                For CSS mini projects, check out my Codepen:{" "}
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Button variant="danger">Go to Codepen</Button>
                </OverlayTrigger>
              </span>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Layout>
  )
}

/*

        <Row>
              <Col>Hello from the first column. My purpose is to explain the project and it's challenges and what what there is still to do! I also need to provide a link to the github code and, if the project is hosted, a link to the page it is hosted on</Col>
              <Col>Hello from the second column. My purpose is to house a little Carousel of images from the project</Col>
            </Row>
*/
