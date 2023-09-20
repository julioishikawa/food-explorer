import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import polygon from "../../assets/Polygon.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Error } from "../../components/Error";

import { Container, Content, Infos } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name) {
      setErrors((prevState) => ({ ...prevState, name: true }));
    } else {
      setErrors((prevState) => ({ ...prevState, name: false }));
    }

    if (!email) {
      setErrors((prevState) => ({ ...prevState, email: true }));
    } else {
      setErrors((prevState) => ({ ...prevState, email: false }));
    }

    if (!password || password.length < 6) {
      setErrors((prevState) => ({ ...prevState, password: true }));
      return;
    } else {
      setErrors((prevState) => ({ ...prevState, password: false }));
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate(-1);
      })
      .catch((e) => {
        if (e.response) {
          alert(e.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
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
            <span className="name">Seu nome</span>
            <Input
              placeholder="Exemplo: Maria da Silva"
              type="text"
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
            />

            {errors.name && (
              <Error title="Você precisa adicionar um nome para criar a conta" />
            )}
          </div>

          <div className="data">
            <span className="email">Email</span>
            <Input
              placeholder="Exemplo: exemplo@exemplo.com.br"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />

            {errors.email && (
              <Error title="Você precisa adicionar um email para fazer criar a conta" />
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
              <Error title="Você precisa adicionar uma senha maior que 6 dígitos para criar a conta" />
            )}
          </div>
        </Infos>

        <Button title="Criar conta" onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </Content>
    </Container>
  );
}
