import styled, { css } from "styled-components";

export const BaseElem = styled.div`
  position: absolute;
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: transparent;
  transition: 200ms ease-out;
  transition-property: background-color, background-image, width, height,
    border-radius, transform;
  transition-delay: 200ms;

  ${(props) =>
    props.hovered &&
    css`
      transform: scale3d(15, 15, 15);
    `}
`;
