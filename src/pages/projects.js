import React from "react"
import "./projects.css"
// React-bootstrap
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Carousel from "react-bootstrap/Carousel"
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import Layout from "../components/layout"
//
import Footer from "../components/footer"
import MatchesPicture from "../assets/img/Matches-Screen.jpg"
import MessagingPicture from "../assets/img/Messaging.jpg"
import CreateProfilePicture from "../assets/img/tm-create-profile.png"
//
import LoginScreen from "../assets/img/tracker-login.png"
import DashboardScreen from "../assets/img/tracker-dashboard.png"

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

      <Accordion defaultActiveKey="0" style={{paddingBottom: `50px`}}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Container>
              <Row xs={1} sm={2}>
                <Col>
                  <h2>
                    Tennis Match
                    <span role="img" aria-label="tennis raquet emoji">
                      🎾
                    </span>
                  </h2>
                  <p className="pr-description">
                    The final project of the Northcoders bootcamp! Putting a
                    sporty spin on swiping right to let users find other players
                    in their local area. Will you find your tennis match?
                  </p>
                </Col>
                <Col>
                  <div className="tech-stack">
                    <p>Tech Stack:</p>
                    <p>
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
                    </Badge></p>
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
                    <h3>TeamMates:</h3>
                    <ul id="team-list">
                      <li>
                        {" "}
                        Benjamin Karst -{" "}
                        <a
                          href="https://www.linkedin.com/in/benjamin-karst/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        Michael Squires -{" "}
                        <a
                          href="https://www.linkedin.com/in/michael-squires-3b797a104/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        Alice Horsey -{" "}
                        <a
                          href="https://www.linkedin.com/in/alice-horsey-23aa661bb/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </a>{" "}
                      </li>
                    </ul>

                    <p>
                      The idea for Tennis Match came from my team mate Ben, who
                      wanted to design an app that would allow him to find
                      others to play against without needing to join up to a
                      local club.
                    </p>
                    <h3>MVP Version</h3>
                    <ul>
                      <li>
                        Profile authentication and registration (Firebase)
                      </li>
                      <li>Set partner preferences</li>
                      <li>Swiping element for matching</li>
                      <li>Messaging functionality</li>
                      <li>Reset / Modify preferences</li>
                    </ul>
                    <h3>Future Changes</h3>
                    <ul>
                      <li>Move all database storage to Firebase</li>
                      <li>Complete the real-time messaging functionality</li>
                      <li>Expand map functionality</li>
                    </ul>
                    <h3>Source Code</h3>
               <ul>
                 <li>Back-End Repo <a href="https://github.com/michael-squires/be-tennis-matcher" target="_blank" rel="noopener noreferrer">here</a></li>
                 <li>Front-End Repo <a href="https://github.com/eccelm/fe-tennis-matcher" target="_blank" rel="noopener noreferrer">here</a></li>
                 <li>Or copy/paste: 
                   <ul> <li>  https://github.com/michael-squires/be-tennis-matcher</li> <li>https://github.com/eccelm/fe-tennis-matcher</li></ul>
                 </li>
               </ul>
                    <h3>Watch the Demo</h3>
                    <p>
                      Find the YouTube demo video by clicking on the link{" "}
                      <a
                        href="https://www.youtube.com/watch?v=U1hoOsNirNM"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                      </a>
                      , or copy/paste the address into your browser:
                      <ul><li>  https://www.youtube.com/watch?v=U1hoOsNirNM</li></ul>
                    
                    </p>
                  </Col>
                  <Col className="my-auto">
                    <div style={{ maxWidth: "300px", margin: `auto` }}>
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={MatchesPicture}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={CreateProfilePicture}
                            alt="Screenshot of the profile creation screen of the Tennis Match app"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={MessagingPicture}
                            alt="Messages screen of Tennis Match app"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>{" "}
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
                  <p className="pr-description">
                    A reddit-style website with both front and back-end built
                    from scratch. Come catch up on the latest Northcoders news!
                  </p>
                </Col>
                <Col>
                
                  <div className="tech-stack">
                  <p>Tech Stack:</p>
                  <p>
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
                    </Badge></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Container>
              <Row xs={1} md={2}>
                <Col>
             <h3>About</h3>
          <p>This full-stack project combines the RESTful API built in the final sprint for the back-end block of the Northcoders bootcamp with a React Front-End. </p>
          <p>Hosted version coming soon!</p>
           
                </Col>
                <Col>
                <h3>Source Code</h3>
               <ul>
                 <li>Back-End Repo <a href="https://github.com/eccelm/nc-news-backend" target="_blank" rel="noopener noreferrer">here</a></li>
                 <li>Front-End Repo <a href="https://github.com/eccelm/NC-News-React-FrontEnd" target="_blank" rel="noopener noreferrer">here</a></li>
                 <li>Or copy/paste: 
                   <ul> <li>  https://github.com/eccelm/nc-news-backend</li> <li>https://github.com/eccelm/NC-News-React-FrontEnd</li></ul>
                 </li>
               </ul>
                </Col>
              </Row>
              </Container>
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
                  <p className="pr-description">
                    A smaller sprint from the front-end block currently
                    undergoing a makeover to trial CSS styling in React and
                    getting to grips with testing React!
                  </p>
                </Col>
                <Col>
                <div className="tech-stack">
                    <p>Tech Stack: </p>
                    <p>
                    <Badge pill variant="primary">
                      React
                    </Badge>{" "}
                    <Badge pill variant="primary">
                      Axios
                    </Badge>{" "} </p>
                  </div>{" "}
                </Col>
              </Row>
            </Container>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
            <Container>
              <Row xs={1} md={2}>
                <Col>
                <h3>Planned Improvements</h3>
               <p>Originally a shorter sprint from the Northcoders bootcamp, I am planning to continue to add to it to develop new skills and practise the following:</p>
               <ul>
                 <li>Figma prototype mocking</li>
                 <li>Styled Components (CSS)</li>
                 <li>Writing tests for React</li>
                 <li>Using Async / Await with Axios</li>
               </ul>

               <h3>Source Code</h3>
               <ul>
                 <li>Github Repo <a href="https://github.com/eccelm/NC-React-Tracker-Project" target="_blank" rel="noopener noreferrer">here</a></li>
                 <li>Or copy/paste: <ul><li>https://github.com/eccelm/NC-React-Tracker-Project</li></ul></li>
               </ul>
                </Col>
                <Col>
                 
                  <div style={{ maxHeight: "350px", margin: `auto` }}> 
                  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={LoginScreen}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={DashboardScreen}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
                  </div>
                </Col>
              </Row>
              </Container>
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
                  <p className="pr-description">
                    A pick'n'mix of small projects for getting to grips with
                    each bit of technology and spiking out of
                    libraries/frameworks for larger projects!
                  </p>
                </Col>
                <Col>
                  {" "}
             
                    <div className="tech-stack">
                    <p>
                    Tech Stack: </p>
                    <p>
                      <Badge pill variant="dark">
                        A little bit of everything!
                      </Badge></p>
                    </div>
                 
                </Col>
              </Row>
            </Container>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Container >
                {" "}
                <span >
                  For CSS mini projects, check out my Codepen:{" "}
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button variant="danger">Go to Codepen</Button>
                  </OverlayTrigger>
                </span>
              </Container>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion >
   
    </Layout>
  )
}

/*

        <Row>
              <Col>Hello from the first column. My purpose is to explain the project and it's challenges and what what there is still to do! I also need to provide a link to the github code and, if the project is hosted, a link to the page it is hosted on</Col>
              <Col>Hello from the second column. My purpose is to house a little Carousel of images from the project</Col>
            </Row>
*/
