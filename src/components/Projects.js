import React from "react";
import Title from "./Title";
import Project from "./Project";
import projects from "../constants/projects";
import { Link } from "gatsby";

const Projects = () => {
  return (
    <section className="section projects">
      <Title title="proyectos" />
      <div className="section-cemter projects-center">
        {projects.map((project, index) => {
          return (
            <Project key={project.id} index={index} {...project}>
              Proyecto
            </Project>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
