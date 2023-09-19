import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 5.6rem;
  border: 0;
  border-radius: 0.5rem;

  font-size: 1.4rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
