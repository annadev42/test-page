import styled, { css } from "styled-components";

export const BaseElem = styled.div`
  position: absolute;
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 200ms linear;

  ${(props) =>
    props.hovered &&
    css`
      transform: scale3d(10, 10, 10);
    `}
`;

// export const BaseElem = () => {
//   return <BaseElem />;
// };
