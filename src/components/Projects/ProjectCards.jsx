import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img className="project-card-img" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="project-card-body">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button 
            className="btn-primary-inner"
            variant="primary" 
            href={props.ghLink} 
            target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            className="btn-primary-inner"
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Live"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
