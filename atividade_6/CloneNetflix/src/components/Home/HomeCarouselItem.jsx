import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import Modal from "../Modal";
import results from "../../../mock.json"

const Container = styled.div`
  padding-left: 2rem;
  color: white;
  width: 100%;
  height: auto;
  padding-bottom: 3rem;
`;

const H1 = styled.h1`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const MovieCard = styled.div`
  padding-right: 1rem;

  @media (max-width: 1024px) {
    & img {
      width: 350px;
      height: auto;
      object-fit: cover;
    }
  }
`;
const HomeCarouselItem = ({ genero, lista, setMovieClick }) => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (data) =>{
    setMovieClick(data);
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 4.5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1700 },
      items: 3.5,
    },

    mediumDesktop: {
      breakpoint: { max: 1700, min: 1300 },
      items: 2.5,
    },

    miniDesktop: {
      breakpoint: { max: 1300, min: 1024 },
      items: 2,
    },
    largeTablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2.7,
    },

    largeTablet: {
      breakpoint: { max: 768, min: 425 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  const searchMoviesDiscover = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzVmYmQ3NDkwMmQ3YjEwYTkyYmIxNTVhZDZkMmVhMCIsIm5iZiI6MTcyMTc0NjgyOS40NzM5NDEsInN1YiI6IjY2OWZhYjc5NWY0MDc3M2RhMTUyY2Y3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10zM16yoy_EokbjVH-et46DdRBmGZauwgyQ5tlp-Zbs",
        },
      };
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-br&page=${page}&sort_by=popularity.desc&with_genres=${genero.id}`,
        options
      );
      if (page == 1) {
        setMovies(response.data.results);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchMoviesDiscover();
  }, [page]);

  const handleAfterChange = (previousSlide, { currentSlide, slidesToShow }) => {
    const isLastSlide = currentSlide + slidesToShow === movies.length;
    if (isLastSlide) {
      setPage(() => page + 1);
    }
  };
  return (
    <Container>
      <H1>{genero.name}</H1>
      <Carousel responsive={responsive} afterChange={handleAfterChange}>
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} onClick={() => handleClick(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={`${movie.Title} Poster`}
              />{" "}
              <h3>{movie.title}</h3>
            </MovieCard>
          ))}
      </Carousel>
    </Container>
  );
};

export default HomeCarouselItem;
