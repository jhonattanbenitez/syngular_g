import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Instagram from "../components/Instagram";
import Blogs from "../components/Blogs";
import { graphql } from "gatsby";

export default ({ data }) => {
  const {
    allWpPost: { edges: projects },
    allInstagramContent: { edges: instagram },
    blogs: { edges: posts },
  } = data;

  return (
    <Layout>
      <Hero />
      <Services />
      <Projects projects={projects} title="Últimos proyectos" showLink />
      <Instagram instagram={instagram} title="Últimos posts" showLink />
      <Blogs posts={posts} title="Blog post" showLik />
    </Layout>
  );
};
// markup

export const query = graphql`
  {
    allWpPost(
      limit: 2
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "Branding" } } } }
      }
    ) {
      edges {
        node {
          id
          title
          content
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
    allInstagramContent(limit: 5) {
      edges {
        node {
          caption
          media_url
          permalink
          localImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    blogs: allWpPost(
      limit: 2
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
