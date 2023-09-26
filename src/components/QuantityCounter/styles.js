import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 10rem;

  button {
    display: grid;
    place-items: center;
    background: transparent;
    border: none;

    svg {
      color: white;
    }
  }

  p {
    font-family: Roboto;
  }

  @media screen and (min-width: 1368px) {
    p {
      font-weight: 700;
      font-size: 2rem;
    }
  }
`;
