import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { format } from "date-fns";
import { Movie } from "../types/interfaces";
import FavouriteIcon from "../../assets/favorite.png";
import MailIcon from "../../assets/mail.png";

interface MovieCardProps {
  movie: Movie;
  onMarkAsFavourity?: (movie: Movie) => void;
  onShareByEmailEvent?: (movie: Movie) => void;
}

export default function MovieCard({
  movie,
  onMarkAsFavourity,
  onShareByEmailEvent,
}: MovieCardProps) {
  const addToFavourite = () => {
    onMarkAsFavourity && onMarkAsFavourity(movie);
  };
  const shareMovieInfo = () => {
    onShareByEmailEvent && onShareByEmailEvent(movie);
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
            {onShareByEmailEvent && (
              <Button variant="light" size="sm" onClick={shareMovieInfo}>
                <Image src={MailIcon} style={{ width: 20, height: 20 }} />
              </Button>
            )}
          </Col>
          <Col>
            {onMarkAsFavourity && (
              <Button variant="light" size="sm" onClick={addToFavourite}>
                <Image src={FavouriteIcon} style={{ width: 20, height: 20 }} />
              </Button>
            )}
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
