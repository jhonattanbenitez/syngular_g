import React from "react";
import Title from "./Title";
import IGpost from "./IGpost";
/* import projects from "../constants/projects"; */

const Instagram = ({ instagram, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {instagram.map((post, index) => {
          return <IGpost key={index} index={index} post={post} />;
        })}
      </div>
      {showLink && (
        <a
          href="https://www.instagram.com/wearesyngular/"
          className="btn center-btn"
        >
          Ir a instagram
        </a>
      )}
    </section>
  );
};

export default Instagram;
