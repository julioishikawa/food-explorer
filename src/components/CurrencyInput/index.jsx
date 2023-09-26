import CurrencyFormat from "react-currency-input-field";

import { Container } from "./styles";

export function CurrencyInput({ onValueChange, error, ...rest }) {
  return (
    <Container>
      <CurrencyFormat
        style={{ border: error ? "1px solid red" : "" }}
        {...rest}
        required
        minLength={1}
        id="currencyInput"
        intlConfig={{ locale: "pt-BR", currency: "BRL" }}
        onValueChange={onValueChange}
        allowNegativeValue={false}
        decimalScale={2}
      />
    </Container>
  );
}
