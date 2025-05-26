import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Bloom Boutique',
    description: 'Designed a static flower shop UI using React.js for practice purposes, showcasing clean layout, product cards, and responsive design.',
    imageUrl: 'bloom.png',
    demoLink: '/erp.mp4',
    repoLink: 'https://github.com/Urmila208/Bloom-Boutique',
  },
  {
    title: 'Jobster WebApplication',
    description: 'Developed a Job Management REST API with Node.js, Express, and MongoDB, featuring JWT-based authentication, user updates, job CRUD, filtering, sorting, pagination, and statistics with Mongoose aggregation',
    imageUrl: 'jobs.png',
    demoLink: '',
    repoLink: 'https://github.com/Urmila208/jobster-api',
  },
  {
    title: 'TaskMate',
    description: ' A task management app using React.js with full CRUD functionality.Implemented localStorage for data persistence, enabling users to add, edit and delete tasks across sessions',
    imageUrl: 'task.png',
    demoLink: '',
    repoLink: 'https://github.com/Urmila208/Taskmate',
  },
   {
    title: 'ERP Software',
    description: 'A blogging platform with rich text editor, comments, and user profiles, developed with React and Express.',
    imageUrl: 'erp.png',
    demoLink: '',
    repoLink: 'https://github.com/yourusername/blog-platform',
  },
   {
    title: 'Yatra',
    description: 'A blogging platform with rich text editor, comments, and user profiles, developed with React and Express.',
    imageUrl: 'ytra.png',
    demoLink: '',
    repoLink: 'https://github.com/yourusername/blog-platform',
  },
   {
    title: 'E comerce API',
    description: 'A blogging platform with rich text editor, comments, and user profiles, developed with React and Express.',
    imageUrl: 'https://projectsly.com/images/blog/project-management-system-overview.png?v=1670514978795773617',
    demoLink: 'https://your-demo-link.com/blog-platform',
    repoLink: 'https://github.com/yourusername/blog-platform',
  },
   {
    title: 'Store API',
    description: 'A blogging platform with rich text editor, comments, and user profiles, developed with React and Express.',
    imageUrl: 'https://projectsly.com/images/blog/project-management-system-overview.png?v=1670514978795773617',
    demoLink: 'https://your-demo-link.com/blog-platform',
    repoLink: 'https://github.com/yourusername/blog-platform',
  },
  
];

const Project = () => {
  return (
   
    <section className="projects-section">
      <h2 className="section-title">🚀 My Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, imageUrl, demoLink, repoLink }, idx) => (
          <div className="project-card" key={idx}>
            <img src={imageUrl} alt={`${title} png`} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{title}</h3>
              <p className="project-description">{description}</p>
              <div className="project-links">
                {/* <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a> */}
                <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
   
  );
};

export default Project;
