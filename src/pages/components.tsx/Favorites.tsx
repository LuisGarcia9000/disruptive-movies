import { Card, Col, Row } from "react-bootstrap";
import { Movie } from "../types/interfaces";

interface FavouritesProps {
  favourites: Movie[];
}

export default function Favourites({ favourites }: FavouritesProps) {
  return  (
    <div className={`fixed-bottom w-100 bg-secondary`}>
      <h2>Favoritos</h2>
      <Row>
        {favourites.map((it) => (
          <Col md={1}>
            <Card className="bg-dark text-white">
              <Card.Img src={it.info.image_url} alt="Card image" />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
