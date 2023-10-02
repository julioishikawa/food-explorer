import { Container } from "./styles";

export function InputSearch({ icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      <div className="input-wrapper">
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </div>
    </Container>
  );
}
