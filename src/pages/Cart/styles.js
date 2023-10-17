import { styled } from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  .hide {
    display: none;
  }

  .cart-wrapper {
    width: 100%;

    margin-top: 2.4rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .infos-wrapper {
    width: 100%;

    position: relative;

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

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(0);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 1368px) {
    width: 100%;

    ::-webkit-scrollbar {
      width: 8px;
    }

    .cart-wrapper {
      height: 60.4rem;

      margin-top: 3.2rem;

      display: flex;
      flex-direction: row;
      gap: 3rem;

      .total {
        font-size: 2rem;
        font-weight: 500;
      }
    }

    .infos-wrapper {
      width: 58rem;

      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

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
    font-size: 1.4rem;
  }

  @media screen and (min-width: 1368px) {
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

  .cart-title {
    padding-bottom: 1.6rem;

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

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;

  .cart-items {
    max-height: 30rem;

    margin-top: 1.6rem;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  @media screen and (min-width: 1368px) {
    height: 100%;

    padding: 3rem;

    gap: 2.4rem;

    .cart-items {
      max-height: 42rem;
    }
  }
`;

export const Address = styled.div`
  width: 100%;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  .address-wrapper {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      width: 100%;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    button {
      background-color: transparent;
      border: 0;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .address-wrapper-active {
    width: 100%;
    height: 100%;

    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    position: absolute;
    top: 0;
    z-index: 1;

    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    animation: appear 300ms;

    svg {
      min-width: 1.6rem;
      min-height: 1.6rem;

      cursor: pointer;
    }
  }

  @media screen and (min-width: 1368px) {
    .address-wrapper-active {
      padding: 1.6rem 0.6rem 1.6rem 1.6rem;

      svg {
        min-width: 2rem;
        min-height: 2rem;
      }
    }
  }
`;

export const Wrapper = styled.div`
  height: 50.4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;

  .payment {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    position: relative;

    .payment-methods {
      width: 100%;
      max-height: 220px;

      overflow-y: auto;
    }

    #payment-type {
      width: 100%;
      height: 7rem;
      padding: 2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      cursor: pointer;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: ${({ theme }) => theme.COLORS.DARK_400};

      div {
        width: 100%;
        height: 7rem;

        display: flex;
        align-items: center;
        gap: 1rem;

        span {
          font-size: 1.4rem;
          font-weight: 500;
        }
      }

      button {
        background-color: transparent;
        border: 0;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      img {
        width: 2.5rem;
        height: 2.5rem;
      }

      &.active {
        border-radius: 0.2rem;
        background: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }

    #payment-type:nth-child(1) {
      border-width: 1px 0;
      border-style: solid;
      border-color: ${({ theme }) => theme.COLORS.DARK_1000};
    }

    #payment-type:nth-child(n + 2) {
      border-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: ${({ theme }) => theme.COLORS.DARK_1000};
    }

    #payment-type:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_600};
    }
  }

  .add-card {
    width: 50%;
    height: 3.2rem;
  }

  .pix-wrapper {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    position: absolute;
    top: 4.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    animation: appear 300ms;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      cursor: pointer;
    }
  }

  .credit-card {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    position: absolute;
    top: 4.5rem;

    z-index: 1;

    animation: appear 300ms;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    svg {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1368px) {
    height: 100%;

    button,
    .payment #payment-type div span {
      font-size: 1.6rem;
    }

    .payment-methods {
      padding-right: 1rem;
    }

    .add-card {
      height: 4rem;
    }

    .pix-wrapper {
      top: 5.5rem;

      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    .credit-card {
      top: 5.5rem;

      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
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
