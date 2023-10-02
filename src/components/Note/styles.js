import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 12.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  padding: 1rem 0;
  margin-bottom: 2.6rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.5rem;

  transition: animation 500ms;
  animation: downtop 500ms;

  > img {
    width: 12rem;
    height: 12rem;
    object-fit: cover;

    padding: 1.6rem;

    border-radius: 50%;
  }

  .right-line {
    height: 100%;

    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  @keyframes downtop {
    0% {
      opacity: 0;
      transform: translateY(-1.5rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 1368px) {
    margin-bottom: 0;

    border-width: 1px 0;
    border-radius: 0;
    border-top-style: solid;
    border-top-color: ${({ theme }) => theme.COLORS.CAKE_200};

    .right-line {
      height: 100%;

      border-right-width: 1px;
      border-right-style: solid;
      border-right-color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
`;

export const Content = styled.div`
  width: 20.5rem;
  max-height: 12rem;

  padding: 1rem;

  display: flex;
  flex-direction: column;

  align-items: center;

  overflow: hidden;
  text-overflow: ellipsis;

  > h1 {
    font-weight: 700;
    font-size: 2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
