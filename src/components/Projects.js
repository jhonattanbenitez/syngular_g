import React from "react";
import Title from "./Title";
import Project from "./Project";
/* import projects from "../constants/projects"; */
import { Link } from "gatsby";

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={index} index={index} project={project} />;
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          Proyectos
        </Link>
      )}
    </section>
  );
};

export default Projects;
