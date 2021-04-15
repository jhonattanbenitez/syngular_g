import React from "react";
import { Link } from "gatsby";
import Video from "./Video";

import SocialLinks from "../constants/socialLinks";

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <h1 className="">
            Discover <br /> Evolve <br /> Launch
          </h1>
        </article>
        <div className="hero-video">
          <Video />
        </div>
      </div>
    </header>
  );
};

export default Hero;
