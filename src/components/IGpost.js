import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { FaShareSquare } from "react-icons/fa";

const IGpost = ({ post, index }) => {
  console.log(post.node.localImage.childImageSharp);

  return (
    <article className="project">
      {post && (
        <GatsbyImage
          image={post.node.localImage.childImageSharp.gatsbyImageData}
          alt="alt"
          className="project-img"
        />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <p>{post.node.caption}</p>
      </div>
    </article>
  );
};

export default IGpost;
