import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiHtml5,
  DiBootstrap,
} from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiRedux,
  SiMaterialUi,
  SiMariadb,
  SiMongodb,
  SiCplusplus,
  SiJavascript,
  // SiCloudera,
} from "react-icons/si";

function Techstack() {
  return (
    <Container>
      <h3 className="project-heading" style={{ size: "20px" }}>
        Languages
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiCplusplus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript />
        </Col>
        {/* <Col xs={4} md={2} className="tech-icons">
          <SiCloudera />
        </Col> */}
      </Row>

      <h3 className="project-heading" style={{ size: "20px" }}>
        Web Development
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaCss3Alt />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiBootstrap />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMaterialUi />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMariadb />
        </Col>

        {/* <Col xs={4} md={2} className="tech-icons">
        <SiCucumber />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
      </Col> */}
      </Row>
    </Container>
  );
}

export default Techstack;
