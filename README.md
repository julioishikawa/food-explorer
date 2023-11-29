# Food Explorer

O Food Explorer é uma aplicação de um restaurante que foi focada na simplicidade, então é uma aplicação fácil de se manusear, porque contém todas as informações necessárias para que o cliente consiga fazer seus pedidos de uma forma fácil e sem nenhuma dúvida.

## Demonstração

<p>
  <img width="800" height="400" src="./demo.gif">
</p>

## Funcionalidades 🔧

- Login/Logout
- Cadastro do usuário
- Barra de pesquisa (Lista/KeyDown 'enter')
- Menu Mobile
- Listagem de pratos por categorias
- Usuário cliente e Usuário administrador
- Criação/Edição/Exclusão de pratos (Somente administradores)
- Detalhes do prato
- Favoritos
- Carrinho
- Local de pagamento com endereço e as opções para pix/cartão de crédito

## Tecnologias(libs) usadas ⚡️

- Axios
- JWT decode
- React
- React Icons
- React Router Dom
- Styled Components
- Swiper
- ViteJS

## Instalação 💡
Crie uma pasta para clonar o projeto e siga os seguintes passos.

Dentro da pasta que você criou, você vai abrir o seu prompt de comando e escolher qual método de clonagem que você irá utilizar:
```
// Método HTTPS

$ git clone https://github.com/shuharib0t/food-explorer.git
$ npm install
$ npm run dev

ou

// Método SSH

$ git clone git@github.com:shuharib0t/food-explorer.git
$ npm install
$ npm run dev
```

A aplicação está online para testes: https://food-explorer-test.netlify.app/

## IMPORTANTE

Após a criação de um endereço/cartão de crédito, os dados são salvos no usuário logado porém a aplicação crasha, provavelmente por ser um servidor grátis, recomendo você clonar a aplicação para fazer os testes.

Para fazer os testes da aplicação no seu computador você vai precisar baixar a [API](https://github.com/shuharib0t/api-food-explorer) do Food-Explorer e também fazer uma simples configuração no front-end:

Dentro da pasta 'src' você vai entrar em 'services' e abrir a file 'api.js', após ter feito isso você vai substituir a configuração que vai estar na 'baseURL' por essa:

```
export const api = axios.create({
  baseURL: "http://localhost:3333",
});

```

Pronto, após ter feito esse passo a passo a aplicação deverá estar funcionando corretamente.

Feito por [shuharib0t](https://www.linkedin.com/in/julio-ishikawa-449417213/) 👋.
