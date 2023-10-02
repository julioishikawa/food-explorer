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

  @media screen and (min-width: 1368px) {
    width: 100%;

    ::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

export const Section = styled.div`
  padding: 2.4rem 2.8rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h1 {
    padding-bottom: 1rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  .back {
    display: flex;
    align-items: center;

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;

  .cart {
    font-size: 4rem;
  }
`;

export const Adress = styled.button`
  padding: 2rem;

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

export const Payment = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 2rem 0;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;

  .payment-type {
    padding: 2rem;

    font-size: 1.4rem;
    font-weight: 500;

    border: 0;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }

  .payment-type:nth-child(2),
  .payment-type:nth-child(3) {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  .payment-type:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
  }
`;

export const Scrollbar = styled.div`
  overflow-y: auto;

  @media screen and (min-width: 1368px) {
    margin: 0 2px 0 0;
  }
`;
