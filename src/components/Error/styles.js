import styled from "styled-components";

export const Container = styled.span`
  width: 100%;

  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  animation: top-down 500ms 300ms backwards;

  @keyframes top-down {
    0% {
      opacity: 0;
      transform: translateY(-15px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
