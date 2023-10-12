import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border-radius: 0.5rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  > input {
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: 0;
    border-radius: 0.5rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  > svg {
    margin-left: 1.4rem;
  }
`;
