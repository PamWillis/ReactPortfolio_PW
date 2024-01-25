import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

// import './ProjectCard.css'; // Import your CSS file for styling

const ProjectCard = ({ title, description, items, imageUrl, link }) => {
  return (
    <Card className="mb-4 card-size">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={title}
          className="card-image"
        />
        <button className="btn btn-primary">View Project</button>
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;