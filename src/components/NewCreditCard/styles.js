import styled from "styled-components";

export const Container = styled.div`
  height: 48rem;

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

  @media screen and (min-width: 900px) {
    height: 40rem;

    gap: 1rem;

    padding: 0 3.4rem;

    button {
      height: 5.6rem;
    }
  }

  @media screen and (min-width: 1368px) {
    height: 37rem;

    padding: 0 5.2rem;

    button {
      height: 5.6rem;
    }
  }
`;
