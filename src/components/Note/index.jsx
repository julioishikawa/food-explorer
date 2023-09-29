import { api } from "../../services/api";

import { Container, Content } from "./styles";

export function Note({ data, ...rest }) {
  const orderImage = `${api.defaults.baseURL}/files/${data.image}`;

  return (
    <Container {...rest}>
      <img src={orderImage} alt={`Imagem do prato ${data.name}`} />

      <div className="right-line"></div>

      <Content>
        <h1>{data.name}</h1>
      </Content>
    </Container>
  );
}
