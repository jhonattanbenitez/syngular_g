import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const Blog = ({ post, index }) => {
  const { slug, featuredImage, title, excerpt, date } = post.node;
  const img = getImage(featuredImage.node.localFile.childImageSharp);

  return (
    <Link to={`/blogs/${slug}`} key={index}>
      <article>
        {featuredImage && <GatsbyImage image={img} alt={title} />}
        <div className="blog-card">
          <h4>{title}</h4>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          <div className="blog-footer">
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

/* Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  featuredImage: PropTypes.object.isRequired,
}; */

export default Blog;
