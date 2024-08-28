import { useState } from "react";
import styled from "styled-components";

const ModalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

`;

const Context = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 5px;
  width: 700px;
  height: 700px;
  color: white;

  & p{
    padding-top: 5px;
  }

  @media(max-width:425px){
    padding: 0;
  }
`;

const Close = styled.span`
  font-size: 3rem;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: end;
`;

const Icon = styled.img`
  width: 100%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const P = styled.p`
  padding-top: 10px;
  text-align: justify;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const Modal = ({ closeModal, json, generos }) => {
  return (
    <ModalDiv>
      <Context>
        <Close onClick={closeModal}>&times;</Close>
        <Icon src={`https://image.tmdb.org/t/p/w1280${json.backdrop_path}`} />
        <Text>
          <h2>{json.title}</h2>
          <P>{json.overview}</P>
          <Items>
            <p>Data de lançamento: {json.release_date}</p>
            <p>Nota média: {json.vote_average}</p>
            <p>Popularidade: {json.popularity}</p>
            <p>Generos: {generos.generos.filter(genero => json.genre_ids.some(id => genero.id === id)).map(item => `${item.name},  `)}</p>
          </Items>
        </Text>
      </Context>
    </ModalDiv>
  );
};

export default Modal;
