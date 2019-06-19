import React from 'react';
import styled from 'styled-components';
import { theme } from '../../config'

const StyledLayoutColumnHeader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: ${theme.columnHeaderHeight}px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: ${theme.backgroundSecondary};
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
