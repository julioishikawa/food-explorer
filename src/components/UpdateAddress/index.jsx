import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

import { InfosInput } from "../InfosInput";
import { Button } from "../Button";

import { Container } from "./styles";

export function UpdateAddress() {
  const params = useParams();

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

  function handleNumberChange(e) {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, "");

    setNumber(numericValue);
  }

  function handleDeleteAddress() {
    const confirmed = window.confirm(
      "Você tem certeza que quer excluir este endereço?"
    );

    if (confirmed) {
      api.delete(`address/${params.id}`);
      navigate("/cart");
      window.location.reload();
    } else {
      return;
    }
  }

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
      .put(`/address/${params.id}`, {
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

  useEffect(() => {
    async function fetchAddress() {
      const addressId = params.id;
      const { data } = await api.get(`/address/${addressId}`);

      setName(data.name);
      setNeighborhood(data.neighborhood);
      setStreet(data.street);
      setNumber(data.number);
      setComplement(data.complement);
    }

    fetchAddress();
  }, []);

  return (
    <Container>
      <InfosInput
        type="text"
        id="card-name"
        label="Nome do cliente (quem irá receber o pedido)"
        placeholder="Maria Silva"
        value={name}
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
        value={neighborhood}
        onChange={(e) => setNeighborhood(e.target.value)}
        error={errors.neighborhood}
      />

      <InfosInput
        type="text"
        id="card-street"
        label="Endereço"
        placeholder="R: Bandeirantes"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        error={errors.street}
      />

      <InfosInput
        type="text"
        id="card-house-number"
        label="Número"
        placeholder="000-0"
        value={number}
        onChange={handleNumberChange}
        error={errors.number}
      />

      <InfosInput
        type="text"
        id="card-complement"
        label="Complemento (opcional)"
        placeholder="Perto do mercado"
        value={complement}
        onChange={(e) => setComplement(e.target.value)}
        error={errors.complement}
      />

      <div className="buttons">
        <Button title="Atualizar" onClick={handleAddAddress} />
        <Button title="Excluir" onClick={handleDeleteAddress} />
      </div>
    </Container>
  );
}
