import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiCreditCard, FiX, FiMoreVertical, FiMapPin } from "react-icons/fi";

import { useCart } from "../../hooks/cart";
import { useCreditCards } from "../../hooks/credit_cards";
import { useAddress } from "../../hooks/address";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { ProductItem } from "../../components/ProductItem";
import { NewAddress } from "../../components/NewAddress";
import { UpdateAddress } from "../../components/UpdateAddress";
import { NewPix } from "../../components/NewPix";
import { NewCreditCard } from "../../components/NewCreditCard";
import { UpdateCreditCard } from "../../components/UpdateCreditCard";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

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
  const { creditCards, getAllCreditCards } = useCreditCards();
  const { addresses, getAllAddresses } = useAddress();

  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(null);

  const totalPrice = getCartTotalPrice();

  const handleAddressClick = (address) => {
    setSelectedAddress(address);
    localStorage.setItem(
      "@food-explorer:selectedAddress",
      JSON.stringify(address)
    );
    handleMethodChange("");
  };

  function handleMethodChange(method) {
    setPaymentMethod(method);
  }

  function handleDetailsAddress(id) {
    navigate(`/cart/${id}`);
    handleMethodChange("update-address");
  }

  function handleDetailsCard(id) {
    navigate(`/cart/${id}`);
    handleMethodChange("update-card");
  }

  function handleClose() {
    navigate(`/cart`);
    handleMethodChange("");
  }

  useEffect(() => {
    getAllCreditCards();
    getAllAddresses();
  }, []);

  useEffect(() => {
    const storedAddress = localStorage.getItem(
      "@food-explorer:selectedAddress"
    );

    if (storedAddress) {
      setSelectedAddress(JSON.parse(storedAddress));
    }
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
                    {selectedAddress && (
                      <span>
                        {`R: ${selectedAddress.street},`}
                        &nbsp;
                        {selectedAddress.number}
                      </span>
                    )}
                    <button onClick={() => handleMethodChange("addresses")}>
                      alterar
                    </button>
                  </div>

                  {paymentMethod === "addresses" && (
                    <div className="address-wrapper-active">
                      <FiX onClick={() => handleMethodChange("")} />

                      <div className="box">
                        {addresses &&
                          addresses.map((address) => (
                            <div className="select-address">
                              <div
                                key={address.id}
                                className="addresses-infos"
                                onClick={() => handleAddressClick(address)}
                              >
                                <a>
                                  <span>
                                    {`R: ${address.street}`}
                                    {", "}
                                    {address.number}
                                  </span>
                                  <br />
                                  <span>{address.neighborhood}</span>
                                </a>
                              </div>

                              <div className="address-options">
                                <FiMoreVertical
                                  onClick={() =>
                                    handleDetailsAddress(address.id)
                                  }
                                />
                              </div>
                            </div>
                          ))}
                        <Button
                          title="Adicionar novo endereço"
                          className="save-address"
                          onClick={() => handleMethodChange("address")}
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "address" && (
                    <div className="new-address-wrapper-active">
                      <FiX onClick={() => handleMethodChange("")} />

                      <NewAddress />
                    </div>
                  )}

                  {paymentMethod === "update-address" && (
                    <div className="new-address-wrapper-active">
                      <FiX onClick={() => handleClose("")} />

                      <UpdateAddress />
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
                              onClick={() => handleDetailsCard(creditCard.id)}
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
                        <FiX onClick={() => handleClose("")} />

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
