import React from "react";
import styled from "styled-components";

const StyledIconBoxRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 5px;
`;

const IconBoxRow = props => {
  return <StyledIconBoxRow {...props}>{props.children}</StyledIconBoxRow>;
};

export default IconBoxRow;
