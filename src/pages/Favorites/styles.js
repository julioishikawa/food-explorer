import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    width: 42.8rem;

    flex: 1;

    padding: 3.2rem;

    background: ${({ theme }) => theme.COLORS.DARK_400};

    > h1 {
      margin-top: 2.8rem;

      font-size: 3.2rem;
      font-weight: 500;
      line-height: 140%;
    }
  }

  @media screen and (min-width: 1024px) {
    > main {
      width: min(100%, 112rem);
    }
  }

  @media screen and (min-width: 1368px) {
    > main {
      width: 100%;
      padding: 3.2rem 12rem;
    }
  }
`;

export const FavoritesList = styled.ul`
  margin-top: 1.6rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1.6rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 2.4rem;
  }
`;

export const EmptyFavorites = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3rem;

  text-align: center;

  & img {
    width: min(100%, 40rem);

    margin-top: 8rem;
  }

  & h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
    font-weight: 500;

    & span {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
`;