import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border-radius: 0.5rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    width: 100%;
    height: 4.8rem;

    padding: 1.6rem 1.4rem;

    border-radius: 0.5rem;

    &:focus-within {
      border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
    }

    > input {
      width: 100%;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: transparent;
      border: 0;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    > button {
      width: 1.6rem;
      height: 1.6rem;

      border: 0;
      background-color: transparent;

      svg {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }

  @media screen and (min-width: 1368px) {
    .input-wrapper button {
      width: 2.5rem;
      height: 2.5rem;

      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
`;
