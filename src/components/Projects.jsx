import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";

const Projects = () => {

    return (
        <>
            {projects.map((project) => (
                <ProjectCard title={project.title} description={project.description} technologies={project.technologies} image={project.image} demoUrl={project.demoUrl} repoUrl={project.repoUrl} />
            ))}
        </>
    );
};

export default Projects;