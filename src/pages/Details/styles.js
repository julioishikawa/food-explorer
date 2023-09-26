import { styled } from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  .details {
    width: 100%;
    height: 100%;

    padding: 1.6rem 5.6rem 3.3rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;

    .back {
      display: flex;
      align-items: center;

      font-size: 2.4rem;
      font-weight: 500;

      svg {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }

  @media (min-width: 1368px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .details {
      height: 100%;

      padding: 0 12.1rem 3.2rem;

      .back {
        padding-top: 2rem;

        font-weight: bold;
      }
    }
  }
`;

export const Wrapper = styled.div`
  width: 31.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .button-desktop {
    display: none;
  }

  .order-image {
    width: 26.4rem;
    height: 26.4rem;

    margin: 1.6rem 0;

    border-radius: 50%;
    object-fit: cover;
  }

  .order-wrapper {
    width: 31.6rem;

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

    .order {
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

      .order-button,
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

  @media (min-width: 1368px) {
    width: 100%;
    height: 100%;

    margin: 0;

    display: flex;
    flex-direction: row;
    gap: 4.7rem;

    .button-mobile {
      display: none;
    }

    img {
      width: 39rem;
      height: 39rem;

      margin: 0;
    }

    .order-wrapper {
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

      .order {
        height: 4.8rem;
        gap: 3.2rem;

        .quantity p {
          font-size: 2rem;
        }

        .quantity svg {
          width: 2.4rem;
          height: 2.4rem;
        }

        .order-button {
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
