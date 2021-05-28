import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="BookXchanger"
              description="We try to create a platform where you can buy or sell second-hand books without any difficulty. So we try to create a website called BookXchanger with almost all the features that can solve your problems while buying or selling books. We have used MERN stack to make this project."
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Agriculture Analysis of India"
              description="I have created this project for the final submission of IGT. So basically this is a website which uses different data like crop, rainfall, soil and underground water in India. We have use QGIS software to map tha data on map. And then using HTML, CSS and Javascript we mapped it on website. So using this website we try to make analysis of crops in India."
              link="https://github.com/sagarmude7/IGT_Project_Agriculture_India"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Youtube Clone"
              description="I have created this project for my Open Source submission. This webste is basically the frontend clone of Youtube which uses Youtube API to fetch videos from Youtube."
              link="https://github.com/sagarmude7/Youtube-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Mysuru Tourism Website"
              description="I have created this website for DSC-WOW Hackathon. This website is created with basic HTML, CSS and JavaScript. This website helps to increase tourism in Mysore."
              link="https://github.com/sagarmude7/DSCWOW_Mysuru-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Pollution Tracker"
              description="It is a python program that tells the API (Air Pollution Index) and further pollutants level in air of any city in the world. It uses Matplotlib to plot pie chart of pollutants in air."
              link="https://github.com/sagarmude7/Pollution-Tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
