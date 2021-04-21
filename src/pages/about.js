import React from "react";
import Layout from "../components/Layout";
/* import nosotros from "../constants/nosotros"; */
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const About = ({ data }) => {
  const {
    allWpPost: { edges: nosotros },
  } = data;
  console.log(nosotros);
  return (
    <Layout>
      <section className="about-page section">
        <h1>
          Unique <br /> Creative <br /> People
        </h1>
        <div className="section-center about-center ">
          {nosotros.map((nos, index) => {
            console.log(nos.node.content);
            return (
              <div>
                <article key={index} className="service">
                  {nos.node.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData && (
                    <GatsbyImage
                      image={
                        nos.node.featuredImage.node.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt={nos.node.title}
                    />
                  )}

                  {/* <h3>
                  {nos.node.title}{" "}
                  <span className="about-last-name">{nos.last_name}</span>
                </h3> */}
                  <div
                    className="content-about"
                    dangerouslySetInnerHTML={{ __html: nos.node.content }}
                  />
                  <div className="underline"></div>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "Staff" } } } }
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
export default About;
