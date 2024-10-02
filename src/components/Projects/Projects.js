import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import todoList from "../../Assets/Projects/todo.webp";
import weather from "../../Assets/Projects/WeatherDemo.png";
import uphaar from "../../Assets/Projects/Uphaar.png";
import alumni from "../../Assets/Projects/AlumniPortal.jpg";
import inventory from "../../Assets/Projects/images.jpeg";

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
              imgPath={todoList}
              isBlog={false}
              title="Todo-List"
              description="A simple todo-list using React-js and using Sql for the database"
              ghLink="https://github.com/Saksham6543/Todo-List"
               demoLink="https://todolistingg.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="WeatherIllustrator"
              description="Weather Web App using React js with vite and by using external api openweatherapi."
              ghLink="https://github.com/Saksham6543/WeatherApp"
              demoLink="https://weatherillustrator.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uphaar}
              isBlog={false}
              title="Uphaar"
              description="Online gifting Website for ordering different types of gifts for different occassions using ReactJs,SpringBoot and Sql Workbench."
              ghLink="https://github.com/Saksham6543/Uphaar"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alumni}
              isBlog={false}
              title="Alumni Portal"
              description="The alumni portal fosters stronger connections between alumni and students, streamlining networking, job matching, and mentorship opportunities. It also enables secure donations and personalized content to enhance community engagement and support. "
              ghLink="https://github.com/Saksham6543/AlumniPortal"
              demoLink="https://frolicking-llama-bfcc2d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory Management"
              description="The Inventory Management Portal automates stock tracking, product management, and orders, providing real-time updates and analytics for seamless, efficient inventory control and decision-making. "
              ghLink="https://github.com/Saksham6543/Inventory-Management-"
               demoLink="https://monashinventory.netlify.app/"
            />
          </Col>
/*
          /
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
