import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Todo App',
    description: 'A full-stack todo application with React, Node.js, and MongoDB. Features user authentication and real-time updates.',
    imageUrl: 'https://www.smartdraw.com/working-smarter/img/how-to-create-a-project-planning-map.svg',
    demoLink: 'https://your-demo-link.com/todo-app',
    repoLink: 'https://github.com/yourusername/todo-app',
  },
  {
    title: 'E-commerce Website',
    description: 'Online store built with MERN stack. Includes product listings, cart, checkout, and payment integration.',
    imageUrl: 'https://www.ntaskmanager.com/wp-content/uploads/2020/01/How-to-manage-a-project-2.png',
    demoLink: 'https://your-demo-link.com/ecommerce',
    repoLink: 'https://github.com/yourusername/ecommerce',
  },
  {
    title: 'Blog Platform',
    description: 'A blogging platform with rich text editor, comments, and user profiles, developed with React and Express.',
    imageUrl: 'https://cdn.pixabay.com/photo/2021/12/29/02/10/idea-6900632_640.png',
    demoLink: 'https://your-demo-link.com/blog-platform',
    repoLink: 'https://github.com/yourusername/blog-platform',
  },
   {
    title: 'Blog Platform',
    description: 'A blogging platform with rich text editor, comments, and user profiles, developed with React and Express.',
    imageUrl: 'https://view.subpage.app/app/company/C532b8873cc5442e2b1f2265b77a7d7dc/domain/MTiT0jFlGh/page/Ma9aQb2DGh/article/M52e59e269bfbc6d871027a280eb17cb21721814253357/hero/M4cd31c583ffb66e17295695c64b440bd1722590762244.webp',
    demoLink: 'https://your-demo-link.com/blog-platform',
    repoLink: 'https://github.com/yourusername/blog-platform',
  },
   {
    title: 'Blog Platform',
    description: 'A blogging platform with rich text editor, comments, and user profiles, developed with React and Express.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dif7cYGf7tep4G3prTY1JxGNTFHqn4nqnQ&s',
    demoLink: 'https://your-demo-link.com/blog-platform',
    repoLink: 'https://github.com/yourusername/blog-platform',
  },
   {
    title: 'Blog Platform',
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
            <img src={imageUrl} alt={`${title} screenshot`} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{title}</h3>
              <p className="project-description">{description}</p>
              <div className="project-links">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
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
