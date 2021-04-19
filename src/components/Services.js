import React from "react";
import Title from "./Title";
import services from "../constants/services";

const Services = () => {
  return (
    <div className="section bg-grey">
      <Title title="Servicios" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, paragraph } = service;
          return (
            <article className="service" key={id}>
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <div className="paragraph">
                {paragraph.map((p) => {
                  const { id, title, text } = p;
                  return (
                    <div key={id}>
                      <h5>{title}</h5>
                      <p>{text}</p>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
