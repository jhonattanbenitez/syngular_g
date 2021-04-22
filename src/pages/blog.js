import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Blogs from "../components/Blogs";
/* import SEO from "../components/SEO"; */

const Blog = ({ data }) => {
  const {
    blogs: { edges: posts },
  } = data;
  console.log(posts);
  return (
    <Layout>
      {/* <SEO title="Blog" /> */}
      <section className="blog-page">
        <Blogs posts={posts} title="Nuestro Blog" />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    blogs: allWpPost(
      filter: { categories: { nodes: { elemMatch: { name: { eq: "post" } } } } }
    ) {
      edges {
        node {
          id
          title
          content
          excerpt
          date(formatString: "DD, MM, YYYY")
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default Blog;
