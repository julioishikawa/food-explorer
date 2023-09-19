import { Container } from "./styles";

export function Error({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}
