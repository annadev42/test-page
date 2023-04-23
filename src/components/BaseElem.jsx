import styled, { css, keyframes } from "styled-components";

export const BaseElem = styled.div`
  position: absolute;
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: transparent;
  transition: all 200ms linear;

  ${(props) =>
    props.hovered &&
    css`
      transform: scale3d(15, 15, 15);
    `}
`;
