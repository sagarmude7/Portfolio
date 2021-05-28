import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sagar Mude </span>
            from <span className="purple"> Wardha, India.</span>
            <br />I am currently 2nd year B.Tech student of Information
            Technology at VJTI, Mumbai
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Digital Marketing
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#FF85A3" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sagar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
