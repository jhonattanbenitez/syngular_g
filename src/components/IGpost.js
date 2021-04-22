import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FaInstagramSquare } from "react-icons/fa";

const IGpost = ({ post, index }) => {
  const img = getImage(post.node.localImage.childImageSharp);
  return (
    <article className="project">
      {post && <GatsbyImage image={img} alt="alt" className="project-img" />}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <p>{post.node.caption}</p>
        <div className="project-links">
          <a
            href={post.node.permalink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default IGpost;
