import React from "react";
import styled from "styled-components";

const StyledIconBoxRow = styled.div`
  display: flex;
  padding: 0;
  margin-bottom: 20px;
`;

const IconLibraryBoxRow = props => {
  return <StyledIconBoxRow {...props}>{props.children}</StyledIconBoxRow>;
};

export default IconLibraryBoxRow;
