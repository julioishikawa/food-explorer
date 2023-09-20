import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import polygon from "../../assets/Polygon.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Error } from "../../components/Error";

import { Container, Content, Infos } from "./styles";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  function handleSignIn() {
    signIn({ email, password });

    if (!email) {
      setErrors((prevState) => ({ ...prevState, email: true }));
    } else {
      setErrors((prevState) => ({ ...prevState, email: false }));
    }

    if (!password) {
      setErrors((prevState) => ({ ...prevState, password: true }));
    } else {
      setErrors((prevState) => ({ ...prevState, password: false }));

      return;
    }
  }

  return (
    <Container>
      <div className="logo">
        <img src={polygon} alt="food explorer logo" />
        <h1>food explorer</h1>
      </div>
      <Content>
        <Infos>
          <div className="data">
            <span className="email">Email</span>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com.br"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />

            {errors.email && (
              <Error title="Você precisa adicionar um email para fazer o login" />
            )}
          </div>

          <div className="data">
            <span className="password">Senha</span>
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />

            {errors.password && (
              <Error title="Você precisa adicionar uma senha para fazer o login" />
            )}
          </div>
        </Infos>

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/registro">Criar uma conta</Link>
      </Content>
    </Container>
  );
}
