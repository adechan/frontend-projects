import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

function Cards({ projects }) {
  return (
    <div className="cards">
      {projects?.length !== 0 &&
        projects?.map((project) => (
          <Card
            key={project.id}
            image={project.image}
            languages={project.languages}
            title={project.title}
            githubUrl={project.githubUrl}
            demo={project.demo}
          />
        ))}
    </div>
  );
}

export default Cards;
