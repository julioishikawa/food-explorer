import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import { Container } from "./styles";

export function BackButton({ ...rest }) {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container {...rest} onClick={handleBack}>
      <FiChevronLeft size={20} />
      voltar
    </Container>
  );
}
