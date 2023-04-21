import styled, { css } from "styled-components";
import heart from "../../resourses/heart_3.png";
import { BaseElem } from "./BaseElem";

const TargetDiv = styled(BaseElem)`
  top: 0;
  left: 0;
  background: url(${heart}) center no-repeat;
  background-size: 60%;
  -webkit-filter: drop-shadow(0px 4px 2px #ff174450);
  filter: drop-shadow(0px 4px 2px #ff174450);
  -ms-filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=0, OffY=2, Color='#ff1744')";
  filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=0, OffY=2, Color='#ff1744')";

  &::before {
    content: " ";
    display: block;
    width: 20px;
    height: 20px;
    background: ${({ bg }) => (bg ? bg : "blue")};
    border-radius: 50%;
    opacity: 1;
    transition: all 200ms ease-out;
  }
  ${(props) =>
    props.hovered &&
    css`
      &::before {
        opacity: 0;
        background-color: transparent;
      }
    `}
`;

const ShadowWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: #ff174490 0px 0px 15px, #ff174450 0px 0px 20px,
    #ff174465 0px 0px 15px, #ff174480 0px 0px 10px;
`;

export const Elem1 = ({ hovered, bg }) => {
  return (
    <ShadowWrap>
      <TargetDiv hovered={hovered} bg={bg} />;
    </ShadowWrap>
  );
};
