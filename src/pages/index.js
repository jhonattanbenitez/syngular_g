import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import { graphql } from "gatsby";

export default ({ data }) => {
  const {
    allWpPost: { nodes: projects },
  } = data;

  return (
    <Layout>
      <Hero />
      <Services />
      <Projects projects={projects} title="Últimos proyectos" showLink />
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
  }
`;
