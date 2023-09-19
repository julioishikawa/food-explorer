import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 16.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  padding: 1rem;
  margin-bottom: 2.6rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.8rem;

  transition: animation 500ms;
  animation: downtop 500ms;

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

  .image-wrapper {
    border-bottom-width: 1px;
    border-right-style: solid;
    border-right-color: ${({ theme }) => theme.COLORS.DARK_1000};

    > img {
      width: 14rem;
      height: 14rem;
      object-fit: cover;

      padding: 1.6rem;

      border-radius: 50%;
    }
  }

  @media (min-width: 1368px) {
    height: 15rem;

    margin-bottom: -2px;

    border-radius: 0;

    border-right-width: 0;
  }
`;

export const Content = styled.div`
  width: 20.5rem;
  max-height: 12rem;

  padding: 0 1.6rem;

  display: flex;
  flex-direction: column;

  align-items: center;

  overflow: hidden;
  text-overflow: ellipsis;

  > h1 {
    font-weight: 700;
    font-size: 2rem;

    margin-bottom: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > p {
    margin: 15px 0 30px 0;

    max-height: 53px;

    text-align: left;
    font-weight: 400;
    font-size: 16px;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  > section {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    font-size: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }
`;
