import React from "react";
// import "./Resume.css";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Resume_Chinmay_Bhoir.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Resume() {
  return (
    <div>
      <Container fluid className="resume-btn resume-btn-inner">
        <Row
          style={{
            justifyContent: "left",
            position: "relative",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
