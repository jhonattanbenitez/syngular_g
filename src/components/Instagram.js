import React from "react";
import Title from "./Title";
import IGpost from "./IGpost";
/* import projects from "../constants/projects"; */
import { Link } from "gatsby";

const Instagram = ({ instagram, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {instagram.map((post, index) => {
          console.log(post);
          return (
            <IGpost key={index} index={index} post={post}>
              post
            </IGpost>
          );
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          Ir a instagram
        </Link>
      )}
    </section>
  );
};

export default Instagram;
