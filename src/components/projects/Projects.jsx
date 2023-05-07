import React from "react";
import "./projects.css";

const Projects = () => {
  const data = [
    {
      image: "",
      title: "Fitness Website",
      repo: "https://github.com/rmekelschot/fitness-website",
      demo: "https://rmekelschot.github.io/fitness-website",
    },
  ];

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {data.map((data, i) => {
          return (
            <article className="project__item" key={i}>
              <div className="project__item-image">
                <img src={data.image} alt={data.title} />
              </div>
              <h3>{data.title}</h3>
              <div className="project__item-cta">
                <a
                  href={data.repo}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={data.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
