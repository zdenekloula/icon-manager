import React from 'react';
import styled from 'styled-components';
//import { theme } from '../../config'

const StyledLayoutColumnFooter = styled.div`
  width: 100%;
`;

const LayoutColumnFooter = (props) => {
  return (
    <StyledLayoutColumnFooter {...props}>
      {props.children}
    </StyledLayoutColumnFooter>
  );
};

export default LayoutColumnFooter;
