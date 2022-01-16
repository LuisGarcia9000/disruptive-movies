import { Accordion, Card, Col, Row } from "react-bootstrap";
import { Movie } from "../types/interfaces";

interface FavouritesProps {
  favourites: Movie[];
}

export default function Favourites({ favourites }: FavouritesProps) {
  return (
    // <div className={`fixed-bottom w-100 bg-info`}>
    //   <h2>Favoritos</h2>
    //   <Row>
    //     {favourites.map((it) => (
    //       <Col md={1}>
    //         <Card className="bg-dark text-white">
    //           <Card.Img src={it.info.image_url} alt="Card image" />
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    // </div>

    <div className={`fixed-bottom w-100 bg-info`}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Favoritos</Accordion.Header>
          <Accordion.Body>
            <Row>
              {favourites.map((it) => (
                <Col md={1}>
                  <Card className="bg-dark text-white">
                    <Card.Img src={it.info.image_url} alt="Card image" />
                  </Card>
                </Col>
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
