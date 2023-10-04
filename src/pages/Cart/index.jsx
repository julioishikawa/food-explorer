import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../hooks/cart";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { ProductItem } from "../../components/ProductItem";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import EmptyCartImage from "../../assets/empty-cart.svg";
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

  const [payment, setPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("pix");

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
              <img src={EmptyCartImage} alt="Empty cart icon" />

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
            <div className="wrapper">
              <Content>
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
                <span className="total">
                  Total:{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalPrice)}
                </span>
              </Content>

              <Wrapper>
                <Adress>
                  <p>
                    Endereço: endereço
                    cadastradooooooooooooooooooooooooooooooooooooooooooo
                  </p>
                </Adress>

                <div className="payment">
                  <h1>Forma de pagamento</h1>

                  <button className="payment-type">Pix</button>

                  <button className="payment-type">Cartão de crédito</button>
                </div>

                <Button title="Confirmar pedido" />
              </Wrapper>
            </div>
          )}
        </Section>

        <Footer />
      </Scrollbar>
    </Container>
  );
}
