import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const Form = styled.form`
    width: 317px;
    border-radius: 4px;
    color: rgba(255, 255, 255, 0.7);
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
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
  `;
  const Input = styled.input`
    width: 282px;
    height: 25px;
    padding: 16px 16px 8px 16px;
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

  return (
    <Form>
      <div>
        <h1>Entrar</h1>
      </div>
      <InputContainer>
        <Input type="text" placeholder="Email ou número de celular" />
      </InputContainer>
      <InputContainer>
        <Input type="text" placeholder="Senha" />
      </InputContainer>
      <Button onClick={""}>Entrar</Button>
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
