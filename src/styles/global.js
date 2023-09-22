import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  .hide {
    display: none;
  }

  .sr-only {
    position: absolute ;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;
  }

  body, input, span, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  h1, h2, h3, h4, p, label {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    outline: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  button, a {
    font-family: 'Poppins', sans-serif;

    font-size: 1.4rem;
    outline: none;
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-decoration: none;
  }

  *[role="button"] {
    cursor: pointer;
  }

  button, 
  a {
    cursor: pointer;
    transition: filter 0.3s;
  }

  button:hover, 
  a:hover {
    filter: brightness(0.9);
  }
`;
