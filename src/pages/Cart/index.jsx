import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import {
  Container,
  Scrollbar,
  Section,
  Content,
  Payment,
  Adress,
} from "./styles";
import { Button } from "../../components/Button";

export function Cart() {
  return (
    <Container>
      <Header />

      <Scrollbar>
        <Section>
          <Link className="back" to="/">
            <FiChevronLeft /> voltar
          </Link>

          <Content>
            <div className="title">
              <h1>Carrinho</h1>
            </div>
            <div className="cart">pedidos selecionados aqui!</div>
          </Content>

          <Adress>
            <p>
              Endereço: endereço
              cadastradooooooooooooooooooooooooooooooooooooooooooo
            </p>
          </Adress>

          <Payment>
            <h1>Forma de pagamento</h1>

            <button className="payment-type">Pix</button>

            <button className="payment-type">Cartão de crédito</button>

            <button className="payment-type">Boleto</button>
          </Payment>

          <Button title="Confirmar pedido" />
        </Section>
        <Footer />
      </Scrollbar>
    </Container>
  );
}
