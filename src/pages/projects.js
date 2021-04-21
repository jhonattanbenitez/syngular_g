import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
/* import SEO from "../components/SEO"; */

const ProjectsPage = ({ data }) => {
  const {
    allWpPost: { edges: projects },
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
    allWpPost(
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
  }
`;

export default ProjectsPage;
