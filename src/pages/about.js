import React from "react";
import Layout from "../components/Layout";
import nosotros from "../constants/nosotros";

const About = () => {
  return (
    <Layout>
      <section className="about-page">
        <h1>
          Unique <br /> Creative <br /> People
        </h1>
        <div className="section-center about-center ">
          {nosotros.map((nos) => {
            return (
              <div>
                <img src={nos.img} alt={nos.name} />
                <h3>
                  {nos.name}{" "}
                  <span className="about-last-name">{nos.last_name}</span>
                </h3>
                <h4>{nos.position}</h4>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default About;
