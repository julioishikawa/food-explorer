import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    font-family: Roboto;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .input-wrap {
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.5rem;
    padding-inline: 1.4rem;
    height: 4.8rem;

    > input {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: transparent;
      width: 100%;
      height: 100%;

      border: 0;
    }

    &:focus-within {
      border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  @media screen and (min-width: 1368px) {
    > label {
      font-size: 2rem;
    }
  }
`;
