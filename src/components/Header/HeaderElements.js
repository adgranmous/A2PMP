import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;
  transition: 0.8s all ease;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ transparentBackground }) =>
    transparentBackground ? "transparent" : "#000"};
`;
