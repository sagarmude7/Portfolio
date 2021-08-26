import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ResumePdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Team Leader of BookXchanger Project"
              date="January 2021 - May 2021"
              content={[
                "Manages all the major task like collecting the resources and ideas to the documentation part of the Project. And worked with team members to improve the features of website.",
                "Worked on different features of website and mostly the frontend part of BookXchanger website.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Digital Marketing Executive [Technovanza-2020]"
              content={[
                "Planning, monitoring, and managing the organization presence on social media",
              ]}
            />
            <Resumecontent
              title="Public Relation Executive [Technovanza-2020]"
              content={[
                "Work with the PR Manager to create, manage, execute and evaluate all Guest Lectures at Technovanza.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech in Information Technology [VJTI, Mumbai] "
              date="2019 - Present"
              content={[`CGPA: 8.13 (Till 4th Sem)`]}
            />
            <Resumecontent
              title="12th BOARD [Dr. Babasaheb Ambedkar College, Nagpur]"
              date="2017 - 2019"
              content={["Precentage: 74.8%"]}
            />
            <Resumecontent
              title="10th BOARD [Agragami Highschool, Wardha] "
              date="2007 - 2017"
              content={["Precentage: 96.4%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Higgest rating on Codechef 1627",
                "Completed 30 days of Google Cloud Program",
                "Udacity and AWS ML Scholarship Recipient",
                "Event Manager of Culturul Fest(Pratibimb)",
                "Participant in DSC-WOW Hackathon 2020",
                "Student Volunteer at ISRO, IMD, LIGO and BARC exhibition",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
