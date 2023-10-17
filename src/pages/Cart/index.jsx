import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiCreditCard, FiX, FiCopy, FiMapPin } from "react-icons/fi";

import { useCart } from "../../hooks/cart";

import { useCreditCards } from "../../hooks/credit_cards";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { ProductItem } from "../../components/ProductItem";
import { Input } from "../../components/Input";
import { NewAddress } from "../../components/NewAddress";
import { NewPix } from "../../components/NewPix";
import { NewCreditCard } from "../../components/NewCreditCard";
import { UpdateCreditCard } from "../../components/UpdateCreditCard";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Error } from "../../components/Error";

import EmptyCartImage from "../../assets/empty-cart.svg";
import PixIcon from "../../assets/pix-icon.svg";

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

  const { getAllCreditCards } = useCreditCards();

  const { creditCards } = useCreditCards();

  const [paymentMethod, setPaymentMethod] = useState("");

  const totalPrice = getCartTotalPrice();

  function handleMethodChange(method) {
    setPaymentMethod(method);
  }

  function handleDetails(id) {
    navigate(`/cart/${id}`);
    handleMethodChange("update-card");
  }

  function handleCloseCreditCard() {
    navigate(`/cart`);
    handleMethodChange("");
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
                <Address>
                  <div className="address-wrapper">
                    <FiMapPin size={25} />

                    <span>{}</span>

                    <button onClick={() => handleMethodChange("address")}>
                      alterar
                    </button>
                  </div>

                  {paymentMethod === "address" && (
                    <div className="address-wrapper-active">
                      <FiX onClick={() => handleMethodChange("")} />

                      <NewAddress />
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

                            <button
                              onClick={() => handleDetails(creditCard.id)}
                            >
                              alterar
                            </button>
                          </div>
                        ))}
                    </div>

                    <Button
                      title="Adicionar cartão"
                      className="add-card"
                      onClick={() => handleMethodChange("new-card")}
                    />

                    {paymentMethod === "pix" && (
                      <div className="pix-wrapper">
                        <FiX onClick={() => handleMethodChange("")} />

                        <NewPix />
                      </div>
                    )}

                    {paymentMethod === "update-card" && (
                      <div className="credit-card">
                        <FiX onClick={() => handleCloseCreditCard("")} />

                        <UpdateCreditCard />
                      </div>
                    )}

                    {paymentMethod === "new-card" && (
                      <div className="credit-card">
                        <FiX onClick={() => handleMethodChange("")} />

                        <NewCreditCard />
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
