import React from "react";

const ProjectCard = ({ title, description, technologies, image, demoUrl, repoUrl }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">Repository</a>
        </div>
    );
};

export default ProjectCard;