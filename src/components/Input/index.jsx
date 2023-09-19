import { Container } from "./styles";

export function Input({ icon: Icon, error, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      <input style={{ border: error ? "1px solid red" : "" }} {...rest} />
    </Container>
  );
}
