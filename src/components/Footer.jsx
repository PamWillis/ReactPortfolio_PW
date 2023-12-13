import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const linked = "https://www.linkedin.com/in/pam-willis-66a96a25";
  const github = "https://github.com/PamWillis";
  return (
    <footer>
      <a href={linked} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin icon"></i></a>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github icon"></i>
      </a>
    </footer>
  );
}

export default Footer;