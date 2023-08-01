import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import tindog from "../../Assets/Projects/tindog.png";
import todolist from "../../Assets/Projects/todolist.png";
import diceegame from "../../Assets/Projects/diceegame.png";
import drumkit from "../../Assets/Projects/drumkit.png";
import simongame from "../../Assets/Projects/simongame.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={tindog}
              isBlog={false}
              title="TinDog"
              description="TinDog is a simple web application built with HTML, CSS, and Bootstrap that allows users to browse and connect with other dog owners in their area."
              ghLink="https://github.com/Chinmay2660/Tindog"
              demoLink="https://chinmay2660.github.io/Tindog/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="ToDoList"
              description="ToDoList is a simple and intuitive To-Do List application built with HTML, CSS, and JavaScript. The application allows users to manage their daily tasks by adding and deleting."
              ghLink="https://github.com/Chinmay2660/ToDoList"
              demoLink="https://crazy-elk.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diceegame}
              isBlog={false}
              title="DiceeGame"
              description="DiceeGame is a web-based game where users can roll two dice and see who gets the higher score. The game is built with HTML, CSS, and JavaScript and includes animations for the dice rolls."
              ghLink="https://github.com/Chinmay2660/DiceeGame"
              demoLink="https://chinmay2660.github.io/DiceeGame/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumkit}
              isBlog={false}
              title="DrumKit"
              description="DrumKit is a web application that allows users to play drum sounds by clicking on images of drums or using the corresponding keyboard keys. The application is built with HTML, CSS, and JavaScript and includes seven different drum sounds."
              ghLink="https://github.com/Chinmay2660/DrumKit"
              demoLink="https://chinmay2660.github.io/DrumKit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simongame}
              isBlog={false}
              title="SimonGame"
              description="Simon Game is a classic memory game built with HTML, CSS, and JavaScript. The game has four colored buttons that light up and play a sound in a specific pattern, and the player must repeat the pattern by clicking the buttons in the correct order. The game starts with a simple pattern and increases in complexity as the player progresses."
              ghLink="https://github.com/Chinmay2660/SimonGame"
              demoLink="https://chinmay2660.github.io/SimonGame/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="DSA By Abdul Bari"
              description="This repository contains implementations of popular data structures and algorithms in C++ based on the teachings of Abdul Bari, an expert in the field of computer science and engineering. The implementations are meant to serve as a reference for those looking to improve their understanding of data structures and algorithms."
              ghLink="https://github.com/Chinmay2660/DSA-By-Abdul-Bari"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
