import { Container, Logo } from "./styles";
import footerLogo from "../../assets/Polygon-footer.svg";

export function Footer() {
  return (
    <Container>
      <Logo>
        <img src={footerLogo} alt="food explorer logo" />
        <h1>food explorer</h1>
      </Logo>

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
