import styled from "styled-components";

export default function LoginFooter() {
  const Footer = styled.footer`
    display: flex;
    background: black;
    color: rgba(255, 255, 255, 0.7);
    flex-direction: row;
    min-height: 30vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10%;
    & a {
      text-decoration: underline;
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        cursor: pointer;
      }
    }
  `;
  const DivFooter = styled.div`
  width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    & select{
      width: 200px;
      height: 30px;
      background-color: black;
      color: white;
    }
  `;

  const Perguntas = styled.div`
    display: flex;
    gap: 20%;
    & div {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  `;
  return (
    <Footer>
      <DivFooter>
        <p>Dúvidas? Ligue 0800 591 2876</p>
        <Perguntas>
          <div>
            <a>Perguntas frequentes</a>
            <a>Preferências de cookies</a>
          </div>
          <div>
            <a>Central de ajuda</a>
            <a>Informações corporativas</a>
          </div>
          <div>
            <a>Termos de uso</a>
          </div>
          <div>
            <a>Privacidade</a>
          </div>
        </Perguntas>
        <select>
          <option>Português</option>
          <option>English</option>
        </select>
      </DivFooter>
    </Footer>
  );
}
