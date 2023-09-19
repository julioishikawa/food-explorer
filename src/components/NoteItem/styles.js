import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.2rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: 8px;

  padding-right: 1.6rem;

  > button {
    display: flex;
    align-items: center;

    border: none;
    background: none;

    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  }

  > div,
  input {
    padding: 0.8rem 0.8rem 0.8rem 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    font-size: 1.6rem;
    font-weight: 400;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
