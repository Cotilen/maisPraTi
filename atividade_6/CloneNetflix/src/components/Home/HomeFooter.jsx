import facebook from "/facebook.png";
import instagram from "/instagram.png";
import twitter from "/twitter.png";
import youtube from "/youtube.png";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  & ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  & p {
    color: grey;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  & button {
    background-color: transparent;
    border: 1px solid grey;
    color: grey;
    cursor: pointer;
    &:hover {
      border: 1px solid white;
      color: white;
    }
  }
`;

const Icon = styled.img`
  -webkit-filter: invert(1);
  filter: invert(1);
  height: 3vh;
`;

export default function HomeFooter() {
  return (
    <Footer>
      <div>
        <ul>
          <li>
            <Icon src={facebook} />
          </li>
          <li>
            <Icon src={instagram} />
          </li>
          <li>
            <Icon src={twitter} />
          </li>
          <li>
            <Icon src={youtube} />
          </li>
        </ul>
        <p>Audiodescrição</p>
        <p>Relações com investidores</p>
        <p>Avisos legais</p>
        <button>Código do serviço</button>
      </div>
      <div>
        <p>Central de Ajuda</p>
        <p>Carreiras</p>
        <p>Preferências de cookies</p>
      </div>
      <div>
        <p>Cartão pré-pago</p>
        <p>Termos de Uso</p>
        <p>Informações corporativas</p>
      </div>
      <div>
        <p>Impresa</p>
        <p>Privacidade</p>
        <p>Entre em contato</p>
      </div>
    </Footer>
  );
}
