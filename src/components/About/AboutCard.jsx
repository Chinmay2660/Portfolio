import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chinmay Bhoir </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />I am currently Graduate Engineer Trainee at Jio Platforms
            Limited.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Mobile Games
            </li>
          </ul>

          <p style={{ color: "#7f5af0" }}>
            "Failure is the road to success!"{" "}
          </p>
          <footer className="blockquote-footer">Chinmay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
