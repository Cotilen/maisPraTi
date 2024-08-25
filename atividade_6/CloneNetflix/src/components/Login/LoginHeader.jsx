import netflix from "../../assets/netflixHeader.svg";
import styled from "styled-components";
export default function LoginHeader() {
  const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    & img {
      max-height: 40px;
      margin-top: 1.5rem;
      margin-left: 15%;
    }
  `;
  return (
    <Header>
      <img src={netflix} />
    </Header>
  );
}
