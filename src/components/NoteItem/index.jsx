import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({ isNew, title, onClick, error, ...rest }) {
  return (
    <Container isNew={isNew}>
      {isNew && <input type="text" title={title} readOnly={!isNew} {...rest} />}

      {!isNew && <div>{title}</div>}

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
