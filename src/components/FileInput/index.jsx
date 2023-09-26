import { FiShare } from "react-icons/fi";

import { Container } from "./styles";

export function FileInput({ id, placeholder, mouseOverText, onChange }) {
  return (
    <Container>
      <label htmlFor={id}></label>
      <label htmlFor={id} title={mouseOverText}>
        <FiShare size={24} />
        <span>{placeholder}</span>
        <input onChange={onChange} type="file" id={id} />
      </label>
    </Container>
  );
}
