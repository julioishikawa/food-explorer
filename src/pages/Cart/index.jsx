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

  const [creditCard, setCreditCard] = useState([]);
  const [number, setNumber] = useState(null);
  const [name, setName] = useState("");
  const [validation, setValidation] = useState(0);
  const [cvc, setCvc] = useState(0);

  const [errors, setErrors] = useState({
    number: false,
    name: false,
    validation: false,
    cvc: false,
  });

  const totalPrice = getCartTotalPrice();

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

        setCreditCard(res.data);
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
    if (!number) {
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

    if (!validation) {
      setErrors((prevState) => ({ ...prevState, validation: true }));
      return;
    } else {
      setErrors((prevState) => ({ ...prevState, validation: false }));
    }

    if (!cvc) {
      setErrors((prevState) => ({ ...prevState, cvc: true }));
      return;
    } else {
      setErrors((prevState) => ({ ...prevState, cvc: false }));
    }

    if (number && name && validation && cvc) {
      api.post("/credit_cards", {
        card_number: number,
        cardholder_name: name,
        expiration_date: validation,
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

                      <div
                        id="payment-type"
                        className={paymentMethod === "credit" ? "active" : ""}
                      >
                        <div onClick={() => handleMethodChange("credit")}>
                          <FiCreditCard size={25} />
                          <span>Cartão de crédito</span>
                          <p>{creditCard}</p>
                        </div>

                        <button>alterar</button>
                      </div>
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

                            <span>*QRCode funcional</span>
                          </div>

                          <CopyInput value="qr.link/SmY3b5" icon={FiCopy} />
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
                            onChange={(e) => setNumber(e.target.value)}
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
                              placeholder="04/25"
                              onChange={(e) => setValidation(e.target.value)}
                              error={errors.validation}
                            />

                            <CreditCardInput
                              type="text"
                              id="card-cvc"
                              label="CVC"
                              placeholder="000"
                              onChange={(e) => setCvc(e.target.value)}
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

                  <Button title="Finalizar pagamento" onClick={addCreditCard} />
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
