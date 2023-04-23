import styled, { css } from "styled-components";
import { BaseElem } from "./BaseElem";

const TargetDiv = styled(BaseElem)`
  top: ${({ top }) => top + "px"};
  bottom: ${({ bottom }) => bottom + "px"};
  right: ${({ right }) => right + "px"};
  left: ${({ left }) => left + "px"};
  background: url(${({ image }) => image}) center no-repeat;
  background-size: 60%;
  -webkit-filter: ${({ color }) => `drop-shadow(0px 4px 2px ${color}50)`};
  filter: ${({ color }) => `drop-shadow(0px 4px 2px ${color}50)`};
  -ms-filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=0, OffY=2, Color='#ff1744')";
  filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=0, OffY=2, Color='#ff1744')";

  &::before {
    content: " ";
    display: block;
    width: 20px;
    height: 20px;
    background: ${({ color }) => color};
    border-radius: 50%;
    opacity: 1;
    transition: all 200ms ease-out;
  }

  ${({ hovered }) =>
    hovered &&
    css`
      &::before {
        transform: scale3d(0, 0, 0);
        opacity: 0;
        background-color: transparent;
      }
    `}
`;

const BoxShadowWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top + "px"};
  bottom: ${({ bottom }) => bottom + "px"};
  right: ${({ right }) => right + "px"};
  left: ${({ left }) => left + "px"};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  ${({
    color,
  }) => `box-shadow: ${color}90 0px 2px 15px, ${color}50 0px 0px 20px,
    ${color}65 0px 0px 15px, ${color}80 0px 0px 10px;`}
`;

export const Elem = ({ hovered, color, top, bottom, left, right, image }) => {
  return (
    <BoxShadowWrapper
      color={color}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      <TargetDiv hovered={hovered} color={color} image={image} />
    </BoxShadowWrapper>
  );
};
