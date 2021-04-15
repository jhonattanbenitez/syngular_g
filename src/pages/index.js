import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  );
};

export default IndexPage;
