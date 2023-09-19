import { Container } from "./styles";

export function Textarea({ text, error, ...rest }) {
  return <Container {...rest}>{text}</Container>;
}
