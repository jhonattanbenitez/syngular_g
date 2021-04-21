import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Instagram from "../components/Instagram";
import { graphql } from "gatsby";

export default ({ data }) => {
  const {
    allWpPost: { edges: projects },
    allInstagramContent: { edges: instagram },
  } = data;
  console.log(instagram);
  console.log(projects);
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects projects={projects} title="Últimos proyectos" showLink />
      <Instagram instagram={instagram} title="Últimos posts" showLink />
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
  }
`;
