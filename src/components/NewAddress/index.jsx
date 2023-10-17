import { InfosInput } from "../InfosInput";
import { Button } from "../Button";

import { Container } from "./styles";

export function NewAddress() {
  return (
    <Container>
      <InfosInput
        type="text"
        id="card-name"
        label="Nome do cliente (quem irá receber o pedido)"
        placeholder="Ex: Maria Silva"
      />

      <InfosInput
        type="text"
        id="card-state"
        label="Estado"
        placeholder="Ex: São Paulo"
      />

      <InfosInput
        type="text"
        id="card-neighborhood"
        label="Bairro"
        placeholder="Ex: Pinheiros"
      />

      <InfosInput
        type="text"
        id="card-street"
        label="Endereço"
        placeholder="Ex: R: Bandeirantes"
      />

      <InfosInput
        type="text"
        id="card-house-number"
        label="Número"
        placeholder="Ex: 000-0"
      />

      <InfosInput
        type="text"
        id="card-complement"
        label="Complemento"
        placeholder="Ex: Perto do mercado"
      />

      <div className="buttons">
        <Button title="Salvar endereço" />
        <Button title="Excluir endereço" />
      </div>
    </Container>
  );
}
