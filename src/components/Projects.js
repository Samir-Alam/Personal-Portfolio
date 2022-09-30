import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import portfolio from "../assets/img/project-img1.png";
import empty from "../assets/img/empty.png";
import Netflix from "../assets/img/Netflix-clone1.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      description: "My Personal Portfolio Website on which you are right now",
      imgUrl: portfolio,
      githubLink: "https://github.com/Samir-Alam/mdSamirPortfolio.github.io",
      CodeLink: "https://samir-alam.github.io/mdSamirPortfolio.github.io/"
    },
    {
      title: "Netflix Clone",
      description: "A clone of Netflix Using React",
      imgUrl: Netflix,
      githubLink: "https://github.com/Samir-Alam/Netflix-Clone",
      CodeLink: 'https://netflix-clone-3a5f1.firebaseapp.com/'
    },
    {
      title: "Nothing",
      description: "Nothing to show here",
      imgUrl: empty,
    },
    {
      title: "Nothing",
      description: "Nothing to show here",
      imgUrl: empty,
    },
    {
      title: "Nothing",
      description: "Nothing to show here",
      imgUrl: empty,
    },
    {
      title: "Nothing",
      description: "Nothing to show here",
      imgUrl: empty,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__slideOutUp": ""}>
                <h2> <i className="fa fa-trophy"></i> Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__slideOutUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Nothing Here. <br />Come Back Later</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Nothing Here</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt = "img" ></img>
    </section>
  )
}