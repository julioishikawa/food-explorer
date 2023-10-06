import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCreditCard, FiX, FiCopy, FiMapPin } from "react-icons/fi";

import { useCart } from "../../hooks/cart";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { ProductItem } from "../../components/ProductItem";
import { Input } from "../../components/Input";
import { PixInput } from "../../components/PixInput";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import EmptyCartImage from "../../assets/empty-cart.svg";
import PixIcon from "../../assets/pix-icon.svg";
import QRCode from "../../assets/qrcode.svg";

import {
  Container,
  Scrollbar,
  Section,
  Content,
  Wrapper,
  Adress,
  EmptyCart,
} from "./styles";

export function Cart() {
  const navigate = useNavigate();

  const { cart, removeFromCart, getCartTotalPrice } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("");

  const totalPrice = getCartTotalPrice();

  function handlePayment() {
    setPayment(true);
  }

  function handleMethodChange(method) {
    setPaymentMethod(method);
  }

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
                <Adress>
                  <div>
                    <FiMapPin size={25} />

                    <span>
                      endereço
                      cadastradoooooOOOOOOOOOOOOOcadastradoooooOOOOOOOOOOOOOcadastradoooooOOOOOOOOOOOOOcadastradoooooOOOOOOOOOOOOOcadastradoooooOOOOOOOOOOOOOcadastradoooooOOOOOOOOOOOOOcadastradoooooOOOOOOOOOOOOOcadastradoooooOOOOOOOOOOOOO
                    </span>

                    <button onClick={() => handleMethodChange("adress")}>
                      alterar
                    </button>
                  </div>

                  {paymentMethod === "adress" && (
                    <div className="adress-wrapper">
                      <FiX onClick={() => handleMethodChange("")} />

                      <Input placeholder="Endereço e número" />

                      <button>salvar</button>
                    </div>
                  )}
                </Adress>

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

                      <div id="payment-type">
                        <div onClick={() => handleMethodChange("credit")}>
                          <FiCreditCard size={25} />
                          <span>Cartão de crédito</span>
                        </div>

                        <button onClick={() => handleMethodChange("alt")}>
                          alterar
                        </button>
                      </div>
                    </div>

                    <div className="payment-info">
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

                            <PixInput
                              value="ckddkSODKJKF@*928219"
                              icon={FiCopy}
                            />

                            <Button title="Copiar código" />
                          </div>
                        </div>
                      )}

                      {paymentMethod === "alt" && (
                        <div className="credit-card">
                          <FiX onClick={() => handleMethodChange("")} />

                          <Input
                            type="text"
                            id="card-number"
                            label="Número do cartão"
                            placeholder="0000 0000 0000 0000"
                          />

                          <Input
                            type="text"
                            id="card-name"
                            label="Nome do cartão"
                            placeholder="Maria Silva"
                          />

                          <div>
                            <Input
                              type="text"
                              id="card-expiration"
                              label="Validade"
                              placeholder="04/25"
                            />

                            <Input
                              type="text"
                              id="card-cvc"
                              label="CVC"
                              placeholder="000"
                            />
                          </div>
                          <Button title="Salvar cartão" />
                        </div>
                      )}
                    </div>
                  </div>

                  <Button title="Realizar pagamento" />
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
