import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
