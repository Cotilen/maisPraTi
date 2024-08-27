import { useState } from "react";
import HomeFooter from "../components/Home/HomeFooter";
import HomeHeader from "../components/Home/HomeHeader";
import HomeHighlight from "../components/Home/HomeHighlight";
import styled from "styled-components";
import HomeCarouselItem from "../components/Home/HomeCarouselItem";
import mock from "../../mock.json"
import HomeListCarousel from "../components/Home/HomeListCarousel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: black;
`;

const generos ={
  generos:[
    { "name": "Ação", "id": 28 },
    { "name": "Aventura", "id": 12 },
    { "name": "Animação", "id": 16 },
    { "name": "Comédia", "id": 35 },
    { "name": "Crime", "id": 80 },
    { "name": "Documentário", "id": 99 },
    { "name": "Drama", "id": 18 },
    { "name": "Família", "id": 10751 },
    { "name": "Fantasia", "id": 14 },
    { "name": "História", "id": 36 },
    { "name": "Terror", "id": 27 },
    { "name": "Música", "id": 10402 },
    { "name": "Mistério", "id": 9648 },
    { "name": "Romance", "id": 10749 },
    { "name": "Ficção científica", "id": 878 },
    { "name": "Cinema TV", "id": 10770 },
    { "name": "Thriller", "id": 53 },
    { "name": "Guerra", "id": 10752 },
    { "name": "Faroeste", "id": 37 }
  ]
  
}

export default function Home() {
  return (
    <>
      <Container>
        <HomeHeader />
        <HomeHighlight generos={generos} />
        <HomeListCarousel generos={generos}/>
        <HomeFooter />
      </Container>
    </>
  );
}
