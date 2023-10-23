import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

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

  @media screen and (min-width: 1024px), screen and (min-width: 1368px) {
    ::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

export const Banner = styled.div`
  width: 97%;

  margin: 4.4rem 0 3.8rem;
  padding: 3.6rem 2rem 2.2rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  position: relative;

  border-radius: 3px;
  background-image: linear-gradient(0deg, #00131c, #091e26);

  img {
    width: 19.1rem;
    height: 14.9rem;

    position: absolute;
    top: -28px;
    left: -30px;
  }

  .infos {
    h2 {
      width: 20.2rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    p {
      width: 20.2rem;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }

  @media screen and (min-width: 900px) {
    width: 100%;

    margin: 7.2rem 3.2rem 0 3.2rem;
    padding: 4.8rem 9.8rem;

    img {
      width: 55.6rem;
      height: 21.2rem;

      top: -30px;
      left: -164px;
    }

    .infos {
      h2 {
        width: 32.2rem;
        font-size: 3rem;
        font-weight: 500;
      }

      p {
        width: 32.2rem;
        font-size: 1.6rem;
        font-family: "Roboto", sans-serif;
      }
    }
  }

  @media screen and (min-width: 1368px) {
    width: 100%;

    margin: 17.2rem 0 0 0;
    padding: 8.8rem 10rem 9.2rem 0;

    img {
      width: 65.6rem;
      height: 41.2rem;

      top: -153px;
      left: -62px;
    }

    .infos {
      h2 {
        width: 42.2rem;
        font-size: 4rem;
        font-weight: 500;
      }

      p {
        width: 42.2rem;
        font-size: 1.6rem;
        font-family: "Roboto", sans-serif;
      }
    }
  }
`;

export const Meals = styled.div`
  width: 100%;

  margin-bottom: 2.4rem;

  .meals {
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin-bottom: 2.4rem;

    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media screen and (min-width: 1368px) {
    width: 100%;

    margin-bottom: 4.8rem;
    padding: 0;

    display: flex;
    flex-direction: column;

    .inner {
      padding-bottom: 2.4rem;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  padding: 0 2.4rem 0 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 900px) {
    padding: 0 5.2rem;
  }

  @media screen and (min-width: 1368px) {
    padding: 0 12.2rem;
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
