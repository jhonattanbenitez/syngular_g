import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
/* import SEO from "../components/SEO"; */

const ComponentName = ({ data }) => {
  const { content, title, desc } = data.blog;
  console.log(data);
  return (
    <Layout>
      {/*  <SEO title={title} description={desc} /> */}
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: wpPost(slug: { eq: $slug }) {
      content
      title
      excerpt
    }
  }
`;

export default ComponentName;
