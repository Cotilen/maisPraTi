import styled from "styled-components";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  width: 500px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 48px 68px;
  min-height: 70vh;
  & h1 {
    color: white;
  }
  & a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  & div {
    width: 100%;
  }

  @media (max-width: 425px){
    width: 310px;
    padding: 10px 10px;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  color: white;
  background: rgb(23, 22, 21);
  font-size: 1rem;

`;
const InputContainer = styled.div`
  width: 100%;
  border: 1px solid white;
  border-radius: 4px;

`;
const Button = styled.button`
  width: 100%;
  background: rgb(193, 17, 25);
  color: white;
  border: black;
  font-size: 1rem;
  font-weight: 500;
  min-height: 2.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  font-size: 1rem;
  & input {
    height: 1rem;
    width: 1rem;
  }
`;

export default function LoginForm() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {toggleAuthLogin} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setPassword("password")
  setUsername("admin")
    if (username === "admin" && password === "password") {
      toggleAuthLogin()
      navigate("/home")
    } else {
      alert("Invalid credentials"); 
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <h1>Entrar</h1>
      </div>
      <InputContainer>
        <Input
          type="text"
          placeholder="Email ou número de celular"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <Button type="submit">Entrar</Button>
      <p>OU</p>
      <Button>Usar um código de acesso</Button>
      <a>Esqueceu a senha?</a>
      <CheckBox>
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">Lembre-se de mim</label>
      </CheckBox>
      <div>
        <p>
          Novo por aqui? <a>Assine Agora</a>.
        </p>
      </div>
    </Form>
  );
}
