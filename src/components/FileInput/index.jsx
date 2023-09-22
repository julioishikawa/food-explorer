import { Container } from "./styles";

import { FiShare } from "react-icons/fi";

export function FileInput({ id, label, placeholder, mouseOverText, onChange }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <label htmlFor={id} title={mouseOverText}>
        <FiShare size={24} />
        <span>{placeholder}</span>
        <input onChange={onChange} type="file" id={id} />
      </label>
    </Container>
  );
}
