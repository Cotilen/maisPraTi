import play from "/playButton.png";
import info from "/info.png";
import result from "../../../mock.json";
import styled from "styled-components";
import Modal from "../Modal";
import { useState } from "react";

export default function HomeHighlight({generos}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const bg = `https://image.tmdb.org/t/p/w1280${result.results[0].backdrop_path}`;

  const Container = styled.div`
    background-image: url(${bg});
    background-size: cover;
    width: 100%;
    height: 70dvh;
    min-height: 70dvh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: white;
    padding-left: 2rem;
    & p {
      font-size: 1rem;
      width: 600px;
    }
  `;

  const Button = styled.button`
    background: grey;
    margin-bottom: 1rem;
    margin-right: 1rem;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    padding: 0.7rem;
    margin-top: 20px;
  `;

  const Icon = styled.img`
  height: 1rem;
  `
  return (
    <>
      <Container>
        <h1>{result.results[0].title}</h1>
        <p>{result.results[0].overview}</p>
        <div>
          <Button type="button" onClick={openModal}>
            <Icon src={play} /> Assistir
          </Button>
          <Button type="button">
            <Icon src={info} /> Mais Informações
          </Button>
        </div>
        {isModalOpen && <Modal closeModal={closeModal} json={result.results[0]} generos={generos}/>}
      </Container>
    </>
  );
}
