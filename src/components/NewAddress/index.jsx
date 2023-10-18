import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { InfosInput } from "../InfosInput";
import { Button } from "../Button";

import { Container } from "./styles";

export function NewAddress() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  const [errors, setErrors] = useState({
    name: false,
    neighborhood: false,
    street: false,
    number: false,
    complement: false,
  });

  function handleAddAddress() {
    if (!name) {
      setErrors((prevState) => ({ ...prevState, name: true }));
      return;
    } else {
      setErrors((prevState) => ({ ...prevState, name: false }));
    }

    if (!neighborhood) {
      setErrors((prevState) => ({ ...prevState, neighborhood: true }));
      return;
    } else {
      setErrors((prevState) => ({ ...prevState, neighborhood: false }));
    }

    if (!street) {
      setErrors((prevState) => ({ ...prevState, street: true }));
      return;
    } else {
      setErrors((prevState) => ({ ...prevState, street: false }));
    }

    if (!number) {
      setErrors((prevState) => ({ ...prevState, number: true }));
      return;
    } else {
      setErrors((prevState) => ({ ...prevState, number: false }));
    }

    api
      .post("/address", {
        name,
        neighborhood,
        street,
        number,
        complement,
      })
      .then(() => {
        window.location.reload();
        navigate("/cart");
      })
      .catch((e) => {
        if (e.response) {
          alert(e.response.data.message);
        } else {
          alert("Não foi possível adicionar o endereço.");
        }
      });
  }

  return (
    <Container>
      <InfosInput
        type="text"
        id="card-name"
        label="Nome do cliente (quem irá receber o pedido)"
        placeholder="Maria Silva"
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />

      <span>
        *supondo que o "food explorer" tenha um restaurante na sua cidade.
      </span>

      <InfosInput
        type="text"
        id="card-neighborhood"
        label="Bairro"
        placeholder="Pinheiros"
        onChange={(e) => setNeighborhood(e.target.value)}
        error={errors.neighborhood}
      />

      <InfosInput
        type="text"
        id="card-street"
        label="Endereço"
        placeholder="R: Bandeirantes"
        onChange={(e) => setStreet(e.target.value)}
        error={errors.street}
      />

      <InfosInput
        type="text"
        id="card-house-number"
        label="Número"
        placeholder="000-0"
        onChange={(e) => setNumber(e.target.value)}
        error={errors.number}
      />

      <InfosInput
        type="text"
        id="card-complement"
        label="Complemento (opcional)"
        placeholder="Perto do mercado"
        onChange={(e) => setComplement(e.target.value)}
        error={errors.complement}
      />

      <div className="buttons">
        <Button title="Salvar endereço" onClick={handleAddAddress} />
        <Button title="Excluir endereço" />
      </div>
    </Container>
  );
}
