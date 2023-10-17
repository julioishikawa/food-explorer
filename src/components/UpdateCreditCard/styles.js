import styled from "styled-components";

export const Container = styled.div`
  height: 39rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  padding: 0 1.6rem;

  div {
    width: 100%;
    display: flex;
    gap: 1rem;
  }

  button {
    width: 50%;
    height: 4.4rem;
  }

  @media screen and (min-width: 1368px) {
    height: 38rem;

    gap: 2rem;

    padding: 0 3.2rem;

    button {
      height: 5.6rem;
    }
  }
`;
