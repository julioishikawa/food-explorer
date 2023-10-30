import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    width: 100%;

    padding: 2rem 3.2rem;
  }

  .box {
    margin-top: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    .notfound-img {
      width: 27.2rem;
      height: 32.6rem;
    }

    h1 {
      font-size: 2rem;
      font-weight: 500;
    }
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

  @media screen and (min-width: 900px) {
    ::-webkit-scrollbar {
      width: 8px;
    }

    main {
      width: 100%;
      padding: 3.2rem 5.2rem;
    }

    .box {
      .notfound-img {
        width: 34.4rem;
        height: 39.6rem;
      }

      h1 {
        font-size: 2.4rem;
        font-weight: 500;
      }
    }
  }

  @media screen and (min-width: 1368px) {
    main {
      width: 100%;
      padding: 3.2rem 12rem;
    }

    .box {
      .notfound-img {
        width: 41.4rem;
        height: 46.6rem;
      }

      h1 {
        font-size: 3rem;
        font-weight: 500;
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

  overflow-y: auto;

  @media screen and (min-width: 900px), screen and (min-width: 1368px) {
    margin: 0 2px 0 0;
  }
`;
