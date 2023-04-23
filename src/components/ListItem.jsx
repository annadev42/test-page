import styled from "styled-components";

const StyledDiv = styled.div`
  margin-bottom: 10px;
  font: 25px Helvetica;
  color: ${({ color }) => color};
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${({ color }) => color};
  }
`;

export const ListItem = ({ children, color, onMouseOver, onMouseLeave }) => {
  return (
    <StyledDiv
      color={color}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </StyledDiv>
  );
};
