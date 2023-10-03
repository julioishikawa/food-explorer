import styled from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  min-height: 11.4rem;

  display: flex;

  align-items: center;

  gap: 7.5rem;

  padding: 5.6rem 2.8rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  .notes-wrapper::-webkit-scrollbar {
    width: 0;
  }

  #search,
  .search-wrapper,
  .logout,
  .favorites-btn {
    display: none;
  }

  .dishes-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    min-width: 21.6rem;

    height: 5.6rem;

    font-size: 1.4rem;
    font-weight: 100;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: 0;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    &:disabled {
      opacity: 0.5;
    }

    img {
      width: 2.6rem;
      height: 2.2rem;
    }
  }

  @media screen and (min-width: 1368px) {
    width: 100%;
    min-height: 10.4rem;

    padding: 0;

    display: flex;
    align-items: center;
    gap: 3.2rem;

    .favorites-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      margin-right: 3.2rem;

      min-width: 14.6rem;
      height: 5.6rem;

      font-size: 1.4rem;
      font-weight: 100;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      border: 0;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      &:disabled {
        opacity: 0.5;
      }
    }

    .search-wrapper {
      display: flex;
      flex-direction: column;

      width: 100%;

      position: relative;

      #search {
        z-index: 3;
      }

      .notes-wrapper {
        max-height: 44rem;

        overflow-y: auto;

        position: absolute;
        top: 4.5rem;
        right: 1.6rem;
        z-index: 2;

        border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
        border-radius: 0 0 5px 5px;

        background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      }
    }

    #search-mobile,
    .menu-item,
    .nav-item {
      display: none;
    }

    #search,
    .logout,
    .favorites-btn {
      display: flex;
    }

    a {
      svg {
        width: 3.2rem;
        height: 3.2rem;
        margin-right: 12.3rem;
      }
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2.6rem;
    height: 2.6rem;

    cursor: pointer;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0px;
    left: -100%;

    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }

  .nav-menu.active {
    width: 42.8rem;

    display: flex;
    justify-content: space-between;

    background: ${({ theme }) => theme.COLORS.DARK_400};

    left: 0;

    opacity: 1;
    transition: all 0.5s ease;
    z-index: 2;
  }

  ul {
    margin-bottom: 2.6rem;
  }

  .menu-logo {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    padding: 5.6rem 2.8rem 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    h2 {
      font-size: 2.1rem;
      font-weight: 400;
    }
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 2.8rem;

    h2 {
      font-size: 2.1rem;
      font-weight: 400;
    }

    a {
      font-size: 2.4rem;
      font-weight: 300;
    }
  }

  .nav-item:nth-child(2) {
    padding: 3.6rem 2.8rem;
  }

  .nav-links {
    padding: 1rem;
    width: 100%;

    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 2.4rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  .nav-links:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0 0 1rem 1rem;

    cursor: pointer;
  }

  footer {
    width: 100%;
    height: 7.7rem;

    padding: 30px 28px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    h1 {
      font-size: 1.5rem;
      font-weight: bold;

      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    p {
      font-size: 12px;
      font-family: "DM Sans", sans-serif;

      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
  }

  @media screen and (min-width: 1368px) {
    margin-left: 6.5rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 17rem;
  }

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media screen and (min-width: 1368px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0;

    .logo {
      width: 20.4rem;
    }

    img {
      margin-right: 1rem;
    }

    h1 {
      font-size: 2.4rem;
    }
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  .dishes-wrapper,
  .new-dish {
    display: none;
  }

  img {
    width: 2.6rem;
    height: 2.2rem;
  }

  .menu-dishes {
    cursor: pointer;
  }

  .dishes {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    top: -8px;
    right: -10px;

    width: 2rem;
    height: 2rem;

    font-size: 1.4rem;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }

  .nav-dishes {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 100%;
    height: 50vh;

    position: absolute;

    top: 5px;
    right: 5px;

    opacity: 1;
    transition: all 0.5s ease;
    z-index: -1;
  }

  .nav-dishes.active {
    width: 23.8rem;

    display: flex;
    justify-content: space-between;

    border-radius: 1rem;
    background: ${({ theme }) => theme.COLORS.DARK_600};

    opacity: 1;
    z-index: 3;
  }

  .cart-logo {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    padding: 2.4rem;

    border-radius: 5px 5px 0 0;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};

    svg {
      width: 2.6rem;
      height: 2.6rem;

      cursor: pointer;
    }

    h2 {
      font-size: 2.1rem;
      font-weight: 400;
    }
  }

  .cart-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem 2.8rem;

    h2 {
      font-size: 1.6rem;
      font-weight: 400;

      padding: 1rem 0;

      text-align: center;
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  .cart-links {
    width: 100%;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.4rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARK_1000};

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  .cart-links:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 1rem;

    cursor: pointer;
  }

  @media screen and (min-width: 1368px) {
    .dishes-wrapper {
      display: flex;
    }

    .menu-dishes {
      display: none;
    }

    .new-dish {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      min-width: 21.6rem;

      height: 5.6rem;

      font-size: 1.4rem;
      font-weight: 100;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      border: 0;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      &:disabled {
        opacity: 0.5;
      }
    }

    .nav-dishes {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      width: 100%;
      height: 50vh;

      position: absolute;

      top: 10px;
      right: 0;

      opacity: 1;
      transition: all 0.5s ease;
      z-index: -1;
    }

    .nav-dishes.active {
      width: 39.4rem;

      top: 0;
    }
  }
`;
