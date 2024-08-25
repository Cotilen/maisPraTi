import LoginHeader from "../components/Login/LoginHeader";
import LoginForm from "../components/Login/LoginForm";
import LoginFooter from "../components/Login/LoginFooter";
import bg from "../assets/bg.jpg"
import styled from "styled-components";


const Main = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  background-image: url(${bg});
  gap: 1vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
`
export default function Login() {
  return (
    <>
      <Main>
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </Main>
    </>
  );
}
