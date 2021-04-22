import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { FaShareSquare } from "react-icons/fa";

const Project = ({ project, index }) => {
  const { title, content, featuredImage } = project.node;

  return (
    <article className="project">
      {featuredImage.node.localFile.childImageSharp.gatsbyImageData && (
        <GatsbyImage
          image={featuredImage.node.localFile.childImageSharp.gatsbyImageData}
          alt={title}
          className="project-img"
        />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </article>
  );
};

export default Project;
