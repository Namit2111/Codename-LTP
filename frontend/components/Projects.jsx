import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
