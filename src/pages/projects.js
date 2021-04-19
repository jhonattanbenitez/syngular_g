import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
/* import SEO from "../components/SEO"; */

const ProjectsPage = ({ data }) => {
  const {
    allWpPost: { nodes: projects },
  } = data;
  console.log(data);
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="Todos nuestros proyectos" />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allWpPost {
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

export default ProjectsPage;
