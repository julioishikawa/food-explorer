import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  padding: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: 1.6rem;
  font-weight: 400;

  border: none;
  resize: none;
  border-radius: 0.8rem;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border-radius: 8px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;
