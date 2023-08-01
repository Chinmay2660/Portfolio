import React from 'react';
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const HireMeButton = () => {
  const handleClick = () => {
    window.location.href = 'mailto:bhoirchinmay2014@gmail.com';
  };

  return (
    <div>
      <Container fluid className="hireMe-btn hireMe-btn-inner">
        <Row
          style={{
            justifyContent: "left",
            position: "relative",
          }}
        >
          <Button variant="primary"
            target="_blank"
            style={{ maxWidth: "250px" }}
            onClick={handleClick}>Hire Me</Button>
        </Row>
      </Container>
    </div>
  );
};

export default HireMeButton;
