import styled from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  @media (min-width: 1368px) {
    width: 100%;
  }
`;

export const Banner = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  margin: 4.4rem 1.6rem 3.8rem 3.6rem;

  padding: 0 2.2rem 2.2rem 0;

  width: 37.6rem;
  height: 12rem;

  border-radius: 3px;
  background-image: linear-gradient(0deg, #00131c, #091e26);

  img {
    width: 19.1rem;
    height: 14.9rem;

    position: absolute;
    top: -30px;
    left: -30px;
  }

  .infos {
    h2 {
      width: 20.5rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    p {
      width: 20.5rem;
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1368px) {
    width: 100%;
    height: 26rem;

    margin: 17.2rem 0 1.4rem 0;

    padding: 0 0 2.2rem 0;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 63.3rem;
      height: 40.6rem;

      top: -146px;
      left: -54px;
    }

    .infos {
      margin-left: 50rem;

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
  width: 41.8rem;
  padding: 0 2.4rem 0 2.4rem;

  .meals {
    display: flex;
    flex-direction: column;

    .carousel {
      cursor: pointer;

      overflow: hidden;
      text-overflow: ellipsis;

      position: relative;

      .arrow-left {
        position: absolute;

        left: 0;
        top: 231px;

        z-index: 1;

        svg {
          width: 24px;
          height: 24px;
        }
      }

      .arrow-right {
        font-size: 2rem;

        position: absolute;

        right: 0;
        top: 231px;

        z-index: 1;

        svg {
          width: 24px;
          height: 24px;
        }
      }

      .inner {
        display: flex;
        gap: 2.7rem;

        margin-bottom: 2.4rem;
      }
    }
  }

  h3 {
    margin-bottom: 2.4rem;

    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (min-width: 1368px) {
    width: 100%;

    padding: 0;

    display: flex;
    flex-direction: column;

    .inner {
      padding-bottom: 2.4rem;
    }
  }
`;

export const Wrapper = styled.div`
  width: 41.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1368px) {
    width: 100%;

    padding: 0 12.2rem;
  }
`;

export const Scrollbar = styled.div`
  margin: 2px 2px 2px 0;

  overflow-y: auto;
`;
