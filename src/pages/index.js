import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Instagram from "../components/Instagram";
import { graphql } from "gatsby";

export default ({ data }) => {
  const {
    allWpPost: { nodes: projects },
    allInstagramContent: { edges: instagram },
  } = data;
  console.log(instagram);
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
    allWpPost(limit: 2) {
      nodes {
        content
        id
        title
        excerpt
        featuredImage {
          node {
            sizes
            slug
            guid
          }
        }
      }
    }
    allInstagramContent(limit: 5) {
      edges {
        node {
          caption
          media_url
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
