import React from 'react';
import Portrait from '../assets/images/Portrait.png';
import '../styles/About.css';

const copy = {
  imageUrl: Portrait,
  Name: "Pam Willis",
  heading: "It's Updating and Ongoing Forever!",
  description: [
    "The Software Engineer Journey: Over the many years I have honed my skills as a Graphic Artist with a great eye for detail. I have turned my skills into code to work with the times. Skills include:",
    "JavaScript, HTML, CSS, React, MySQL, Sequilizer, Front and BackEnd development, use of frameworks including TailWinds and Bootstrap"
  ]
};

const About = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <img
        className="portrait"
        variant="top"
        src={copy.imageUrl}
        alt={copy.Name}
      />
      <h2>{copy.heading}</h2>
      {copy.description.map((description, index) => (
        <p key={index}>{description}</p>
      ))}
    </div>
  );
};

export default About;