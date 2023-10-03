import { useState, useEffect } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import { Container } from "./styles";

export function QuantityCounter({ onUpdate }) {
  const [quantity, setQuantity] = useState(1);

  function handleMinus() {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1);
      return;
    }
  }

  function handlePlus() {
    setQuantity((prevState) => prevState + 1);
  }

  function numberMapper(number) {
    if (number < 10) {
      return `0${number}`;
    }

    return number;
  }

  useEffect(() => {
    onUpdate(quantity);
  }, [quantity]);

  return (
    <Container>
      <button aria-label="Minus quantity button" onClick={handleMinus}>
        <FiMinus size={20} />
      </button>

      <p>{numberMapper(quantity)}</p>

      <button aria-label="Plus quantity button" onClick={handlePlus}>
        <FiPlus size={20} />
      </button>
    </Container>
  );
}
