// Portfolio.js

import ProjectCard from './ProjectCard';
import Recipe from '../assets/images/Recipe.png';
import PWA from '../assets/images/PAWtextEditor.png';
import '../styles/Portfolio.css';


const projects = [
  {
    title: "Recipe Box",
    description: "Interactive Full-Stack Group Project",
    items: ['NodeJS', 'Handlebars', 'Bootstrap', 'MySQL and Sequilize ORM for database'],
    imageUrl: Recipe,
    link: "https://thawing-sea-00451-374dc9c94032.herokuapp.com/",
  },
  {
    title: "Project Web Application",
    description: "Text Editor",
    items: ['PWA', 'IndexedDB', 'Idb', 'Webpack bundling package'],
    imageUrl: PWA,
    link: "https://progressivewebapp-display.onrender.com/",
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className="container">

      <h1>Portfolio</h1>
      <div className="innerContainer">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

      </div>
    </div>
  );
};

export default Portfolio;