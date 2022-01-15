import { useEffect, useRef, useState } from "react";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import { isMobile } from "react-device-detect";

import MovieData from "../data/moviedata.json";
import Favourites from "./components.tsx/Favorites";
import Header from "./components.tsx/Header";
import MovieCard from "./components.tsx/MovieCard";
import { Movie } from "./types/interfaces";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>(MovieData);
  const [favourites, setFavourities] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    const aux = new Set<string>();
    MovieData.forEach((movie) =>
      movie.info.genres?.forEach((it) => aux.add(it))
    );
    setGenres(Array.from(aux));
  }, [MovieData]);

  const onHandleSearch = (searchText: string) => {
    const results = MovieData.filter((it) =>
      it.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setMovies(results);
  };

  const onHandleSearchByGenre = (searchText: string) => {
    const results = MovieData.filter((it) =>
      it.info.genres?.includes(searchText)
    );
    setMovies(results);
  };

  const onHandleFilterByDate = (startDate: Date, endDate: Date) => {
    const startDateAsTime = startDate.getTime();
    const endDateAsTime = endDate.getTime();

    const filtered = MovieData.filter((movie) => {
      if (movie.info.release_date) {
        const releaseDateAsTime = new Date(movie.info.release_date).getTime();
        return (
          releaseDateAsTime >= startDateAsTime &&
          releaseDateAsTime <= endDateAsTime
        );
      }
      return false;
    });

    setMovies(filtered);
  };

  const handleAddToFavourity = (movie: Movie) => {
    console.log("handleAddToFavourity");
    setFavourities([...favourites, movie]);
  };

  const movieCards = movies.map((movie, index) => (
    <Col key={index} md={3} className="mb-5">
      <MovieCard movie={movie} onMarkAsFavourity={handleAddToFavourity} />
    </Col>
  ));

  return (
    <Container>
      <Header
        genres={genres}
        onSearchEvent={onHandleSearch}
        onSearchByGenreEvent={onHandleSearchByGenre}
        onFilterByDateEvent={onHandleFilterByDate}
      />
      <CardGroup>
        <Row>{movieCards}</Row>
      </CardGroup>

      {!isMobile && <Favourites favourites={favourites} />}
    </Container>
  );
};

export default Main;
