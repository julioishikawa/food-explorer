import { Container } from "./styles";

export function PixInput({ icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      <div className="input-wrapper">
        <input {...rest} />
        <button>{Icon && <Icon size={20} />}</button>
      </div>
    </Container>
  );
}
