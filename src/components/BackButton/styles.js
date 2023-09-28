import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;

  padding-top: 2rem;

  font-size: 2.4rem;
  font-weight: 500;
  text-decoration: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: transparent;

  border: 0;

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 3.2rem;

    font-weight: bold;
  }
`;
