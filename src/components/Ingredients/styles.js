import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;
