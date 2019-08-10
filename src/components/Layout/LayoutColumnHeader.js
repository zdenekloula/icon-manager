import React from 'react';
import styled from 'styled-components';
//import { theme } from '../../config'

const StyledLayoutColumnHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
padding: ${(props) => props.columnProjects ? "20px 35px 0 25px" : "20px 35px 20px 20px"};
  background: ${(props) => props.theme.backgroundSecondary};
  z-index: 99;
`;

const LayoutColumnHeader = (props) => {
  return (
    <StyledLayoutColumnHeader {...props}>
      {props.children}
    </StyledLayoutColumnHeader>
  );
};

export default LayoutColumnHeader;
