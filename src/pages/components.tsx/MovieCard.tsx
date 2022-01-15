import { Button, Card, Col, Row } from "react-bootstrap";
import { format } from "date-fns";
import { Movie } from "../types/interfaces";

interface MovieCardProps {
  movie: Movie;
  onMarkAsFavourity?: (movie: Movie) => void;
}

export default function MovieCard({
  movie,
  onMarkAsFavourity,
}: MovieCardProps) {
  const addToFavourite = () => {
    onMarkAsFavourity && onMarkAsFavourity(movie);
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.info.image_url} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.info.directors}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text>{movie.info.genres?.join(" ")}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row className="justify-content-between">
          <Col>
            <small className="text-muted">
              {movie.info.release_date &&
                format(
                  new Date(movie.info.release_date).getTime(),
                  "MMM dd yyyy"
                )}
            </small>
          </Col>
          <Col>
            {onMarkAsFavourity && (
              <Button variant="info" size="sm" onClick={addToFavourite}>
                Add to favourite
              </Button>
            )}
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
