import React from 'react';
import styled from 'styled-components';
import { theme } from '../../config'

const StyledLayoutColumnHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 35px 20px 20px;
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
