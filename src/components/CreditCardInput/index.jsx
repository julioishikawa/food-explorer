import { Container } from "./styles";

export function CreditCardInput({ label, id, error, className, ...rest }) {
  return (
    <Container className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <div
        className="input-wrap"
        style={{ border: error ? "1px solid red" : "" }}
      >
        <input id={id} minLength={1} required {...rest} />
      </div>
    </Container>
  );
}
