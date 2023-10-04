import { styled } from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  .has-value {
    background-color: red;
  }

  @media screen and (min-width: 1368px) {
    width: 100%;

    ::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

export const Section = styled.div`
  padding: 1rem 3.2rem 5.3rem;

  .new-order-desktop {
    display: none;
  }

  .button {
    width: 36.4rem;
    height: 4.8rem;

    margin: 3.2rem 0 0 0;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  @media screen and (min-width: 1368px) {
    padding: 3.2rem 12.4rem 11.6rem;

    .new-order-mobile {
      display: none;
    }

    .new-order-desktop {
      display: flex;
    }

    .button-wrapper {
      display: flex;

      justify-content: flex-end;

      .button {
        max-width: 17.2rem;
      }
    }
  }
`;

export const Form = styled.div`
  width: 36.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h1 {
    margin-top: 2.4rem;

    font-size: 3.2rem;
    font-weight: 500;
  }

  p {
    margin-top: 8px;
  }

  .box {
    display: flex;
    flex-direction: column;

    input {
      width: 36.4rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  .tags {
    padding: 8px;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;

    input {
      width: 11.2rem;
      text-align: center;

      background-color: transparent;
    }
  }

  .button {
    margin: 0.8rem 0 0 0;
  }

  @media screen and (min-width: 1368px) {
    width: 100%;

    display: flex;
    gap: 3.2rem;

    .name {
      width: 100%;

      .box {
        width: 100%;

        input {
          width: 100%;
        }
      }
    }

    .ingredients {
      width: 100%;
    }

    .price input {
      width: 25.1rem;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  p {
    margin: 0 0 1.6rem;
  }

  @media screen and (min-width: 1368px) {
    width: 100%;

    flex-direction: row;

    gap: 3.2rem;
  }
`;

export const DishImage = styled.div`
  max-width: 36.4rem;
  display: flex;
  flex-direction: column;

  input {
    display: none;
  }

  .dish-image {
    border-radius: 0.8rem;
  }

  @media screen and (min-width: 1368px) {
    min-width: 23.5rem;

    label {
      min-width: 23rem;
    }

    .image {
      width: 100%;
    }
  }
`;

export const Scrollbar = styled.div`
  overflow-y: auto;

  @media screen and (min-width: 1368px) {
    margin: 0 2px 0 0;
  }
`;
