import { useState } from "react";
import HomeCarouselItem from "./HomeCarouselItem";
import Modal from "../Modal";

const HomeListCarousel = ({ generos }) => {
  const [movie, setMovie] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleClick = (movie) => {
    setMovie(movie);
    console.log(movie);
    openModal();
  }
 
  return (
    <>
      {generos &&
        generos.generos.map((genero) => (
          <HomeCarouselItem key={genero.id} genero={genero} lista={generos} setMovieClick={handleClick}/>
        ))}
         {isModalOpen && <Modal closeModal={closeModal} json={movie} generos={generos}/>}
    </>
  );
};

export default HomeListCarousel;
