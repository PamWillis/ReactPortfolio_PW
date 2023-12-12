// import { Card } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';



const ProjectCard = ({ title, description, items, imageUrl, link }) => {
  return (
    <Card className='projCard'>
      <a href={link} target="_blank" rel="noopener noreferrer">
      <Card.Img
      variant="top"
      src={imageUrl}
      alt={title} 
      style={{ height: '100%', width: '100%' }}/>
        View Project
      </a><br></br>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className='bulletCon'>
      <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </div>
    </Card>
  );
};

export default ProjectCard;
