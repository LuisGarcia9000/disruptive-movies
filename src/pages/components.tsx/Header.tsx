import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface HeaderProps {
  genres: string[];
  onSearchEvent: (text: string) => void;
  onSearchByGenreEvent: (genre: string) => void;
  onFilterByDateEvent: (startDate: Date, endDate: Date) => void;
}

export default function Header({
  genres,
  onSearchEvent,
  onSearchByGenreEvent,
  onFilterByDateEvent
}: HeaderProps) {
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState(new Date("2021-01-01"));
  const [endDate, setEndDate] = useState(new Date());

  const handleOnSearchClick = () => {
    onSearchEvent && onSearchEvent(searchText);
  };

  const handleSearchByGenre = (genre: string) => {
    onSearchByGenreEvent && onSearchByGenreEvent(genre);
  };

  const handleOnFilterClick = () => {
    onFilterByDateEvent && onFilterByDateEvent(startDate, endDate);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Container>
            <Row>
              <Col md={12}>
                <Row>
                  <Col></Col>
                  <Col md={1}>
                    <NavDropdown title={"Genres"} id="collasible-nav-dropdown">
                      {genres.map((it) => (
                        <NavDropdown.Item
                          onClick={() => handleSearchByGenre(it)}
                        >
                          {it}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  </Col>
                  <Col md={3}>
                    <Form
                      className="d-flex"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                      <Button
                        variant="outline-success"
                        onClick={handleOnSearchClick}
                      >
                        Search
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col md={6} />
              <Col>
                <Row>
                  <Col className="justify-content-center">
                    <span>Release Date:</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    from:{" "}
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => date && setStartDate(date)}
                    />
                  </Col>
                  <Col>
                    to:{" "}
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => date && setEndDate(date)}
                    />
                  </Col>
                  <Col>
                    <Button
                      variant="outline-success"
                      onClick={handleOnFilterClick}
                    >
                      Filter
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
