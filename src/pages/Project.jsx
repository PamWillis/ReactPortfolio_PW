import { Card } from 'react-bootstrap';
import myImage from '../assets/images/Recipe.png';


export default function Project() {
  const RecipeBox = "https://github.com/Michaelepigott/RecipeProject";
  return (
<Card>
<a href={RecipeBox} target="_blank" rel="noopener noreferrer">
  <Card.Img
    variant="top"
    src={myImage}
    alt="Card Image"
    style={{ height: '100%', width: '100%' }}
  /></a>
  <Card.Body>
    <Card.Title>The Recipe Box</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card>
  )
}
