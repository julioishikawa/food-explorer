import { styled } from "styled-components";

export const Container = styled.div`
  height: 39rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  .qrcode-wrapper {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 1rem;
    }
  }

  img {
    width: 17rem;
    height: 17rem;
  }

  @media screen and (min-width: 1368px) {
    gap: 2rem;

    img {
      width: 18.4rem;
      height: 18.4rem;
    }
  }
`;
