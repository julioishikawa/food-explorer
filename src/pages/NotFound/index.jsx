import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";

import NotFoundIMG from "../../assets/notfound.png";

import { Container, Scrollbar } from "./styles";

export function NotFound() {
  return (
    <Container>
      <Header />

      <Scrollbar>
        <main>
          <BackButton />

          <div className="box">
            <img
              className="notfound-img"
              src={NotFoundIMG}
              alt="imagem de lupa"
            />
            <h1>Página não encontrada.</h1>
          </div>
        </main>

        <Footer />
      </Scrollbar>
    </Container>
  );
}
