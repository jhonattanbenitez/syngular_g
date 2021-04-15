import React from "react";

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title || "titulo"}</h2>
    </div>
  );
};

export default Title;
