import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  .dish-wrapper {
    padding: 3.2rem 5.6rem 5rem;
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

    display: flex;
    flex-direction: column;

    .dish-wrapper {
      padding: 3.2rem 12rem 5rem;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 31.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .button-desktop {
    display: none;
  }

  .dish-image {
    width: 26.4rem;
    height: 26.4rem;

    margin: 1.6rem 0;

    border-radius: 50%;
    object-fit: cover;
  }

  .infos-wrapper {
    h1 {
      text-align: center;
      font-size: 2.7rem;
      font-weight: 500;
    }

    p {
      margin: 2.4rem 0;

      text-align: center;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2.5rem;

      margin-bottom: 4.8rem;
    }

    .quantity-wrapper {
      height: 3.8rem;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2.2rem;

      .quantity {
        display: flex;
        align-items: center;

        cursor: pointer;

        svg {
          width: 2.7rem;
          height: 2.7rem;
        }

        p {
          margin: 0 1.4rem;

          font-size: 2.2rem;
          font-weight: bold;
          font-family: "Roboto", sans-serif;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
      }

      span {
        width: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.6rem;

        font-size: 2.2rem;
        font-weight: bold;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        > svg {
          width: 2.7rem;
          height: 2.7rem;
        }
      }

      .dish-button,
      .edit-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;

        width: 100%;
        height: 3.8rem;

        padding: 0 2.4rem;

        border: 0;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

        &:disabled {
          opacity: 0.5;
        }

        p {
          font-size: 1rem;
          font-weight: 500;

          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        img {
          width: 1.8rem;
          height: 1.8rem;
        }
      }

      .edit-button {
        width: 31.6rem;
        height: 4.8rem;

        font-size: 1.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  @media screen and (min-width: 1368px) {
    width: 100%;

    margin-top: 4.2rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 4.7rem;

    .button-mobile {
      display: none;
    }

    .dish-image {
      width: 39rem;
      height: 39rem;

      margin: 0;
    }

    .infos-wrapper {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        text-align: start;

        font-size: 4rem;
      }

      p {
        font-size: 2.4rem;
        text-align: start;
      }

      .tags {
        justify-content: flex-start;
        gap: 1.5rem;

        span {
          display: flex;

          height: 3.2rem;
          align-items: center;
        }
      }

      .quantity-wrapper {
        height: 4.8rem;
        gap: 3.2rem;

        .quantity p {
          font-size: 2rem;
        }

        .quantity svg {
          width: 2.4rem;
          height: 2.4rem;
        }

        .dish-button {
          min-width: 16.2rem;
          height: 4.8rem;

          .button-desktop {
            display: flex;

            margin: 0;

            font-size: 1.4rem;
          }
        }

        .edit-button {
          width: 13.1rem;
        }
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

  @media screen and (min-width: 1368px) {
    margin: 0 2px 0 0;
  }
`;
