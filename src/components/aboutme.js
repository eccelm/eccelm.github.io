import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import Tab from "react-bootstrap/Tab"
import Carousel from "react-bootstrap/Carousel"

import ImageThree from "../assets/img/heb.jpg"
import ImageTwo from "../assets/img/cubasunset.jpg"
import ImageOne from "../assets/img/cubaandme.jpg"
export default function About() {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 1250, padding: `0 1rem`, textAlign: `justify` }}>
      <br/>
      <br/>
    

      <h1 className="display-4" id="aboutMe">
        About Me
      </h1>

      <Row xs={1} lg={2}>
        <Col>
          <h4>Journey to coding</h4>{" "}
          <p>
            Originally a Modern Languages grad, I'm swapping <i>la belle langue</i> for
            Javascript and more! The idea of making the switch first sparked in
            my final year of university when through a summer course for
            Humanities students about Data Analytics. I was lucky enough to get
            a mini-internship with <a href="https://www.epraise.co.uk/" target="_blank">Epraise</a> where I was introduced to SQL, and I
            was hooked!
          </p>{" "}
          <br />
          <h4>Northcoders Bootcamp</h4>{" "}
          <p>
            When I was furloughed in April 2020, I spent some time self-teaching
            the basics of HTML / CSS / JavaScript, before taking the plunge and
            signing up to the <a href="https://northcoders.com"  target="_blank">Northcoders 14 week bootcamp for Full Stack
            Development</a> (Oct 2020- Jan 2021). There are 4 blocks to the course: Fundementals,
            Back-End, Front-End and Team Project. Check out
            the list tabs to see more detail of the topics covered.
          </p>{" "}
          <br />
         
        </Col>
        <Col>
        {" "}
          <Container>
            <Tab.Container
              id="list-group-tabs-example"
              defaultActiveKey="#fundementals"
            >
              <h4>Northcoders Tech Stack</h4>
              <Row>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroup.Item action href="#fundementals">
                      Fundementals
                    </ListGroup.Item>
                    <ListGroup.Item action href="#back-end">
                      Back-End
                    </ListGroup.Item>
                    <ListGroup.Item action href="#front-end">
                      Front-End
                    </ListGroup.Item>
                    <ListGroup.Item action href="#best-practises">
                      And More!
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#fundementals">
                      <ul>
                        <li>Scope</li>
                        <li>Closure</li>
                        <li>Higher Order Functions</li>
                        <li>Recursion</li>
                        <li>Prototype Constructors</li>{" "}
                        <li>Class Inheritance</li>
                        <li>Asynchronous Functions</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#back-end">
                      {" "}
                      <ul>
                        <li>Creating Servers</li>
                        <li>Express</li>
                        <li>Axios / Fetch</li>
                        <li>MVC model</li>
                        <li>PostgreSQL database</li>
                        <li>Node Postgres</li>
                        <li>Knex</li>
                        <li>Heroku Hosting</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#front-end">
                      {" "}
                      <ul>
                        <li>Document Object Model</li>
                        <li>Form Validation</li>
                        <li>JSX</li>
                        <li>React</li>
                        <li>React lifeycle</li>
                        <li>Routing / Embedded Routing</li>
                        <li>Optimistic Rendering</li>
                        <li>React Native (project phase)</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#best-practises">
                      {" "}
                      <ul>
                        <li>Test Driven Development</li>
                        <li>Jest / Supertest</li>
                        <li>Pair Programming</li>
                        <li>Error Handling</li>
                        <li>Sprints</li>
                        <li>Trello Kanban Board</li>
                        <li>Figma Wireframing and Prototyping</li>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            <br />
          </Container>
        </Col>
      </Row>
      <Row xs={1} lg={2}>
        <Col>
        <h4>Outside of coding</h4>{" "}
          <p>
            When I'm not working on my coding projects I'm often out enjoying
            the Pennines with Cuba our rescue staffy, or in knitting up
            something to keep warm on the walks in the bracing Yorkshire air!
          </p>
          <br />
          <h4>Role I'm searching for:</h4>{" "}
          <p>
            I am
            completely geographically flexible across the UK and will be
            relocating for my first Junior developer role.
<br/>
            I'm keen to find a role where I can continue to build my knowledge and skills of testing, whether that be as a Junior Tester or through TDD in Front-End/Full Stack Development
          </p>
        </Col>
        <Col>
          <Container>
            <div style={{ maxHeight: "300px", maxWidth: "400px" }}>
              <Carousel indicators={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ImageOne}
                    alt="Martha and her white dog look at the camera on a snowy cobbled bridge in a wood"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ImageTwo}
                    alt="A white dog in a reflective coat is running across a snowy moor with a pale pink and cloudy sunset backdrop"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ImageThree}
                    alt="The woods around the Calder valley above Hebden Bridge in autumn, with the Stoodley Pike monument on the horizon in the distance"
                  />
                </Carousel.Item>
              </Carousel>
            </div>{" "}
          </Container>
        </Col>
      </Row>
      <br />
      <br />
    </div>
  )
}
