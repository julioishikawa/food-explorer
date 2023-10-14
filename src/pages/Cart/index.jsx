import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiCreditCard, FiX, FiCopy, FiMapPin } from "react-icons/fi";

import { useCart } from "../../hooks/cart";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { ProductItem } from "../../components/ProductItem";
import { Input } from "../../components/Input";
import { CopyInput } from "../../components/CopyInput";
import { CreditCardInput } from "../../components/CreditCardInput";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Error } from "../../components/Error";

import EmptyCartImage from "../../assets/empty-cart.svg";
import PixIcon from "../../assets/pix-icon.svg";
import QRCode from "../../assets/qrcode.svg";

import {
  Container,
  Scrollbar,
  Section,
  Content,
  Wrapper,
  Address,
  EmptyCart,
} from "./styles";

export function Cart() {
  const navigate = useNavigate();

  const { cart, removeFromCart, getCartTotalPrice } = useCart();

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const [creditCards, setCreditCards] = useState([]);

  const [number, setNumber] = useState(null);
  const [formattedNumber, setFormattedNumber] = useState("");

  const [name, setName] = useState("");

  const [expiration, setExpiration] = useState("");
  const [isExpirationValid, setIsExpirationValid] = useState(false);

  const [cvc, setCVC] = useState("");
  const [isCVCValid, setIsCVCValid] = useState(false);

  const [errors, setErrors] = useState({
    number: false,
    name: false,
    expiration: false,
    cvc: false,
  });

  const totalPrice = getCartTotalPrice();

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

  const handleCreditCardChange = (e) => {
    const { value } = e.target;

    const sanitizedValue = value.replace(/\s+/g, "");

    const trimmedValue = sanitizedValue.slice(0, 16);

    let formattedValue = trimmedValue.match(/\d{1,4}/g);

    if (formattedValue) {
      formattedValue = formattedValue.join(" ");
    } else {
      formattedValue = "";
    }

    setNumber(trimmedValue);
    setFormattedNumber(formattedValue);
  };

  function handleMethodChange(method) {
    setPaymentMethod(method);
  }

  function handleAddAddress() {
    if (!address) {
      setErrors((prevState) => ({ ...prevState, address: true }));
      return;
    } else {
      setErrors((prevState) => ({ ...prevState, address: false }));
    }
  }

  async function getAllCreditCards() {
    try {
      async function fetchCreditCards() {
        const res = await api.get("/credit_cards");

        setCreditCards(res.data);
      }

      fetchCreditCards();
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("Não foi possível buscar o cartão de crédito.");
      }
    }
  }

  function addCreditCard() {
    if (!number || number.length !== 16) {
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

    if (number && name && expiration && cvc) {
      api.post("/credit_cards", {
        card_number: number,
        cardholder_name: name,
        expiration_date: expiration,
        cvc,
      });

      alert("Cartão adicionado com sucesso!");
      window.location.reload();
    } else {
      alert("Não foi possível adicionar o cartão");
    }
  }

  useEffect(() => {
    getAllCreditCards();
  }, []);

  return (
    <Container>
      <Header />

      <Scrollbar>
        <Section>
          <BackButton />

          {cart.length === 0 ? (
            <EmptyCart>
              <img src={EmptyCartImage} alt="Ícone de carrinho vazio" />

              <div className="text">
                <h2>Seu carrinho está vazio</h2>
                <p>
                  Adicione pratos clicando no botão <strong>Incluir</strong> na
                  página de pratos.
                </p>
              </div>

              <Button title="Buscar pratos" onClick={() => navigate("/")} />
            </EmptyCart>
          ) : (
            <div className="cart-wrapper">
              <Content>
                <div>
                  <h1 className="cart-title">Carrinho</h1>

                  <ul className="cart-items">
                    {cart.map((product) => (
                      <ProductItem
                        id={product.id}
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        quantity={product.quantity}
                        buttonText="Remover"
                        onClick={() => {
                          removeFromCart(product.id);
                        }}
                      />
                    ))}
                  </ul>
                </div>
                <span className="total">
                  Total:{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalPrice)}
                </span>
              </Content>

              <div className="infos-wrapper">
                {errors.address && (
                  <Error title="Você precisa adicionar um nome no prato" />
                )}
                <Address>
                  <div className="address-wrapper">
                    <FiMapPin size={25} />

                    <span>{address}</span>

                    <button onClick={() => handleMethodChange("address")}>
                      alterar
                    </button>
                  </div>

                  {paymentMethod === "address" && (
                    <div className="address-wrapper-active">
                      <div className="x" onClick={() => setAddress("")}>
                        <FiX onClick={() => handleMethodChange("")} />
                      </div>

                      <Input
                        type="text"
                        placeholder="Endereço e número"
                        onChange={(e) => setAddress(e.target.value)}
                        error={errors.address}
                      />

                      <div
                        className="save"
                        onClick={() => handleMethodChange("")}
                      >
                        <button onClick={handleAddAddress}>salvar</button>
                      </div>
                    </div>
                  )}
                </Address>

                <Wrapper>
                  <div className="payment">
                    <h1>Forma de pagamento</h1>

                    <div className="payment-methods">
                      <div
                        id="payment-type"
                        onClick={() => handleMethodChange("pix")}
                      >
                        <div>
                          <img src={PixIcon} alt="Ícone do pix" />
                          <span>Pix</span>
                        </div>
                      </div>

                      {creditCards &&
                        creditCards.map((creditCard) => (
                          <div
                            id="payment-type"
                            className={
                              paymentMethod === `credit${creditCard.id}`
                                ? "active"
                                : ""
                            }
                          >
                            <div
                              onClick={() =>
                                handleMethodChange(`credit${creditCard.id}`)
                              }
                            >
                              <FiCreditCard size={25} />
                              <span>Cartão de crédito</span>
                              <p>
                                {creditCard.card_number.toString().slice(-4)}
                              </p>
                            </div>

                            <button>alterar</button>
                          </div>
                        ))}
                    </div>

                    <Button
                      title="Adicionar cartão"
                      className="add-card"
                      onClick={() => handleMethodChange("alt")}
                    />

                    {paymentMethod === "pix" && (
                      <div className="pix-wrapper">
                        <FiX onClick={() => handleMethodChange("")} />
                        <div className="pix">
                          <div className="qrcode-wrapper">
                            <img
                              src={QRCode}
                              alt="QRCode de shuharib0t no github"
                            />

                            <span>*QRCode ilustrativo</span>
                          </div>

                          <CopyInput
                            value="https://github.com/shuharib0t"
                            icon={FiCopy}
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === "alt" && (
                      <div className="credit-card">
                        <FiX onClick={() => handleMethodChange("")} />

                        <div className="credit-cards-infos">
                          <CreditCardInput
                            type="text"
                            id="card-number"
                            label="Número do cartão"
                            placeholder="0000 0000 0000 0000"
                            value={formattedNumber}
                            onChange={handleCreditCardChange}
                            error={errors.number}
                          />

                          <CreditCardInput
                            type="text"
                            id="card-name"
                            label="Nome do cartão"
                            placeholder="Maria Silva"
                            onChange={(e) => setName(e.target.value)}
                            error={errors.name}
                          />

                          <div>
                            <CreditCardInput
                              type="text"
                              id="card-expiration"
                              label="Validade"
                              value={expiration}
                              placeholder="00/00"
                              onChange={handleExpirationDateChange}
                              error={errors.expiration}
                            />

                            <CreditCardInput
                              type="text"
                              id="card-cvc"
                              label="CVC"
                              value={cvc}
                              placeholder="CVC"
                              onChange={handleCVCChange}
                              error={errors.cvc}
                            />
                          </div>
                          <Button
                            title="Salvar cartão"
                            onClick={addCreditCard}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <Button title="Finalizar pagamento" />
                </Wrapper>
              </div>
            </div>
          )}
        </Section>

        <Footer />
      </Scrollbar>
    </Container>
  );
}
