import { Card } from 'react-bootstrap';

export default function Project() {
  return (
    <Card>
    <Card.Img variant="top" src="image.jpg" alt="Card Image" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  )
}
