import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0 5.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background: ${({ theme }) => theme.COLORS.DARK_400};

  animation: left-right-mobile 500ms 300ms backwards;

  @keyframes left-right-mobile {
    0% {
      opacity: 0;
      transform: translateX(-25px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes top-down-middle {
    0% {
      opacity: 0;
      transform: translateY(-15px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes left-right-desktop {
    0% {
      opacity: 0;
      transform: translateX(-25px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    margin-bottom: 7.4rem;

    > img {
      width: 4.4rem;
      height: 4.4rem;
    }

    > h1 {
      font-size: 3.8rem;
      font-weight: bold;
      font-family: "Roboto", sans-serif;
    }
  }

  @media (min-width: 768px) {
    width: 100%;

    padding: 10rem;

    display: flex;
    align-items: center;

    animation: top-down-middle 500ms 300ms backwards;
  }

  @media (min-width: 1368px) {
    width: 100%;

    padding: 9rem 10.8rem 11.2rem 15.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30rem;

    animation: left-right-desktop 500ms 300ms backwards;

    .logo {
      min-width: 32.4rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.9rem;

      > img {
        width: 4.8rem;
        height: 4.8rem;
      }

      > h1 {
        font-size: 4.2rem;
        font-weight: bold;
        font-family: "Roboto", sans-serif;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
  }

  button {
    margin: 3.2rem 0;
  }

  @media (min-width: 768px) {
    padding: 5rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
  }

  @media (min-width: 1368px) {
    padding: 6.4rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    .data:nth-child(1)::before {
      content: "Crie sua conta";

      margin-bottom: 3.2rem;

      display: flex;
      justify-content: center;

      font-size: 3.2rem;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  .data {
    display: flex;
    flex-direction: column;

    .name,
    .email,
    .password {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      margin-bottom: 8px;
    }
  }
`;
