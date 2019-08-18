import React from "react";
import styled from "styled-components";
//import { theme } from '../../config'

const StyledLayoutColumnFooterDrag = styled.div`
  padding: 20px;
  width: 100%;
  border-top: 1px solid ${props => props.theme.borderColorLight};
`;

const LayoutColumnFooterDrag = props => {
  return (
    <StyledLayoutColumnFooterDrag {...props}>
      {props.children}
    </StyledLayoutColumnFooterDrag>
  );
};

export default LayoutColumnFooterDrag;
