import { styled } from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

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

  @media screen and (min-width: 1368px) {
    width: 100%;

    ::-webkit-scrollbar {
      width: 8px;
    }

    .wrapper {
      display: flex;
      flex-direction: row;
      gap: 3rem;

      max-height: 53rem;

      .total {
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  flex: 1;

  margin-top: 3rem;

  text-align: center;

  img {
    width: 30rem;
  }

  .text h2 {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 140%;
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.4rem;
    width: min(100%, 40rem);
    margin-inline: auto;

    strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  button {
    width: 30rem;
    font-size: 1rem;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 40rem;
    }

    .text h2 {
      font-size: 3.8rem;
      font-weight: 700;
    }

    p {
      width: 50rem;
      font-size: 1.8rem;

      strong {
        font-size: 1.8rem;
      }
    }

    button {
      font-size: 1.4rem;
    }
  }
`;

export const Section = styled.div`
  padding: 2.4rem 2.8rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h1,
  .cart-title {
    padding-bottom: 1rem;

    text-align: center;
    font-size: 2rem;
    font-weight: 500;
  }

  .cart-title {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  @media screen and (min-width: 1368px) {
    padding: 2.4rem 13.4rem;

    h1,
    .cart-title {
      font-size: 2.4rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-height: 52rem;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;

  .cart-items {
    overflow-y: auto;

    padding-right: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  @media screen and (min-width: 1368px) {
    height: 100%;

    padding: 3rem;

    gap: 2.4rem;
  }
`;

export const Adress = styled.button`
  padding: 2rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  p {
    width: 100%;
    max-height: 2.5rem;

    text-align: left;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;

  .payment {
    display: flex;
    flex-direction: column;

    margin-bottom: 1.6rem;
  }

  .payment-type {
    padding: 2rem;

    font-size: 1.4rem;
    font-weight: 500;

    border: 0;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }

  .payment-type:nth-child(2) {
    border-width: 1px;
    border-top-style: solid;
    border-top-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  .payment-type:nth-child(3) {
    border-width: 1px 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  .payment-type:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
  }

  @media screen and (min-width: 1368px) {
    padding: 3rem;
  }
`;

export const Scrollbar = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1368px) {
    margin: 0 2px 0 0;
  }
`;
