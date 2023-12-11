// Portfolio.js
import React from 'react';
import ProjectCard from './ProjectCard';
import Recipe from '../assets/images/Recipe.png';
import PAW from '../assets/images/PAWtextEditor.png';

const projects = [
  {
    title: "Recipe Box",
    description: "Interactive Full-Stack Group Project",
    items: ['NodeJS', 'Handlebars', 'Bootstrap', 'MySQL and Sequilize ORM for database'],
    imageUrl: Recipe,
    link: "https://thawing-sea-00451-374dc9c94032.herokuapp.com/",
  },
  {
    title: "PAW Text Editor",
    description: "Description of Project 2.",
    items: ['NodeJS', 'Handlebars', 'Bootstrap', 'MySQL and Sequilize ORM for database'],
    imageUrl: PAW,
    link: "https://progressivewebapp-display.onrender.com/",
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;