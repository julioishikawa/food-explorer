import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.5rem;

  li:hover {
    background-color: aliceblue;
  }

  img {
    height: 7.2rem;
    width: 7.2rem;
    object-fit: cover;

    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    button {
      width: fit-content;

      margin-top: 1.2rem;

      background: transparent;
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
      font-family: Roboto;
      font-size: 1.2rem;
      line-height: 160%;

      border: 0;

      transition: 0.2s;

      &:hover {
        text-decoration: underline;
        filter: brightness(1.3);
      }
    }
  }

  .dish-info {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    a {
      text-decoration: none;
    }

    h3 {
      font-size: 2rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      .quantity {
        white-space: nowrap;
      }

      .title {
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .title,
      .quantity {
        font-size: 2rem;
        font-weight: 500;
      }
    }

    > span {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: Roboto;
      font-size: 1.2rem;
    }
  }
`;
