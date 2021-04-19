import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { FaShareSquare } from "react-icons/fa";

const Project = ({ featuredImage, index, title, content, excerpt }) => {
  return (
    <article className="project">
      {/* <StaticImage src={image_url} className="project-img" alt="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>
        <div className="project-desc">
          {description.map((desc) => {
            const {
              how_title,
              how_paragraph,
              context_title,
              context_paragraph,
            } = desc;

            return (
              <div key={desc.id}>
                <h4>{context_title}</h4>
                <p>{context_paragraph}</p>
                <h4>{how_title}</h4>
                <p>{how_paragraph}</p>
              </div>
            );
          })}
        </div>
      </div> */}
      {featuredImage.node.guid && (
        <img src={featuredImage.node.guid} alt="alt" className="project-img" />
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
