import { api } from "../../services/api";

import { Container, Content } from "./styles";
import { Ingredients } from "../Ingredients";

export function Note({ data, ...rest }) {
  const orderImage = `${api.defaults.baseURL}/files/${data.image}`;

  return (
    <Container {...rest}>
      <div className="image-wrapper">
        <img src={orderImage} alt="Order image" />
      </div>
      <Content>
        <h1>{data.name}</h1>

        {data.ingredients && (
          <section>
            {data.ingredients.map((tag) => {
              return <Ingredients key={tag.id} title={tag.title} />;
            })}
          </section>
        )}
      </Content>
    </Container>
  );
}
