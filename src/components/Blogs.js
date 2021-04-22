import React from "react";
import Title from "./Title";
import Blog from "./Blog";
import { Link } from "gatsby";

const Blogs = ({ posts, title, showLik }) => {
  return (
    <section>
      <Title title={title} />
      <div className="section-center blogs-center">
        {posts.map((post, index) => {
          return <Blog key={index} post={post} index={index} />;
        })}
      </div>
      {showLik && (
        <Link to="/blog" className="btn center-btn">
          Blog
        </Link>
      )}
    </section>
  );
};

export default Blogs;
