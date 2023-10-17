import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

import { InfosInput } from "../InfosInput";
import { Button } from "../Button";

import { Container } from "./styles";

export function UpdateCreditCard() {
  const params = useParams();

  const navigate = useNavigate();

  const [number, setNumber] = useState("");

  const [name, setName] = useState("");

  const [expiration, setExpiration] = useState("");
  const [isExpirationValid, setIsExpirationValid] = useState(true);

  const [cvc, setCVC] = useState("");
  const [isCVCValid, setIsCVCValid] = useState(true);

  const [errors, setErrors] = useState({
    number: false,
    name: false,
    expiration: false,
    cvc: false,
  });

  const handleCVCChange = (e) => {
    const inputCVC = e.target.value;

    const formattedCVC = inputCVC.replace(/\D/g, "");

    const trimmedCVC = formattedCVC.slice(0, 3);

    const isValidLength = trimmedCVC.length === 3;

    if (isValidLength) {
      setCVC(trimmedCVC);
    } else {
      setCVC(formattedCVC);
    }

    setIsCVCValid(isValidLength);
  };

  const handleExpirationDateChange = (e) => {
    const inputExpirationDate = e.target.value;

    const formattedExpirationDate = inputExpirationDate.replace(/\D/g, "");

    const trimmedExpirationDate = formattedExpirationDate.slice(0, 4);

    const month = trimmedExpirationDate.slice(0, 2);
    const year = trimmedExpirationDate.slice(2, 4);

    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    const isMonthValid =
      /^[0-1]*\d$/.test(month) && +month >= 1 && +month <= 12;
    const isYearValid = /^\d{2}$/.test(year);

    const isValidDate =
      isMonthValid &&
      isYearValid &&
      (+year > currentYear || (+year === currentYear && +month > currentMonth));

    if (isValidDate) {
      setExpiration(`${month}/${year}`);
    } else {
      setExpiration(trimmedExpirationDate);
      setIsExpirationValid(false);
    }

    setIsExpirationValid(isValidDate);
  };

  const handleNumberChange = (e) => {
    const { value } = e.target;

    const sanitizedValue = value.replace(/\s+/g, "");

    const trimmedValue = sanitizedValue.slice(0, 16);

    let formattedValue = trimmedValue.match(/\d{1,4}/g);

    if (formattedValue) {
      formattedValue = formattedValue.join(" ");
    } else {
      formattedValue = "";
    }

    setNumber(formattedValue);
  };

  function handleDeleteCreditCard() {
    const confirmed = window.confirm(
      "Você tem certeza que quer excluir este cartão de crédito?"
    );

    if (confirmed) {
      api.delete(`/credit_cards/${params.id}`);
      alert("Cartão de crédito excluido com sucesso!");
      navigate("/cart");
      window.location.reload();
    } else {
      return;
    }
  }

  function handleEditCreditCard() {
    if (!number || number.length !== 19) {
      setErrors((prevState) => ({ ...prevState, number: true }));
      return;
    } else {
      setErrors((prevState) => ({ ...prevState, number: false }));
    }

    if (!name) {
      setErrors((prevState) => ({ ...prevState, name: true }));
      return;
    } else {
      setErrors((prevState) => ({ ...prevState, name: false }));
    }

    if (!expiration || !isExpirationValid) {
      setErrors((prevState) => ({ ...prevState, expiration: true }));
      return;
    } else {
      setErrors((prevState) => ({ ...prevState, expiration: false }));
    }

    if (!cvc || !isCVCValid) {
      setErrors((prevState) => ({ ...prevState, cvc: true }));
      return;
    } else {
      setErrors((prevState) => ({ ...prevState, cvc: false }));
    }

    api
      .put(`/credit_cards/${params.id}`, {
        card_number: number,
        cardholder_name: name,
        expiration_date: expiration,
        cvc,
      })
      .then(() => {
        alert("Cartão atualizado com sucesso!");
        window.location.reload();
        navigate("/cart");
      })
      .catch((e) => {
        if (e.response) {
          alert(e.response.data.message);
        } else {
          alert("Não foi possível atualizar o cartão.");
        }
      });
  }

  useEffect(() => {
    async function fetchCreditCards() {
      const creditCardId = params.id;
      const { data } = await api.get(`/credit_cards/${creditCardId}`);

      setNumber(data.card_number);
      setName(data.cardholder_name);
      setExpiration(data.expiration_date);
      setCVC(data.cvc);
    }

    fetchCreditCards();
  }, []);

  return (
    <Container>
      <InfosInput
        type="text"
        id="card-number"
        label="Número do cartão"
        placeholder="0000 0000 0000 0000"
        value={number}
        onChange={handleNumberChange}
        error={errors.number}
      />

      <InfosInput
        type="text"
        id="card-name"
        label="Nome do cartão"
        placeholder="Maria Silva"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />

      <div>
        <InfosInput
          type="text"
          id="card-expiration"
          label="Validade"
          value={expiration}
          placeholder="00/00"
          onChange={handleExpirationDateChange}
          error={errors.expiration}
        />

        <InfosInput
          type="text"
          id="card-cvc"
          label="CVC"
          value={cvc}
          placeholder="CVC"
          onChange={handleCVCChange}
          error={errors.cvc}
        />
      </div>

      <div>
        <Button title="Salvar cartão" onClick={handleEditCreditCard} />
        <Button title="Excluir cartão" onClick={handleDeleteCreditCard} />
      </div>
    </Container>
  );
}
