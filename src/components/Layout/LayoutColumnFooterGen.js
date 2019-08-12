import React from 'react';
import styled from 'styled-components';
//import { theme } from '../../config'

const StyledLayoutColumnFooterGen = styled.div`
  text-align: right;
  width: 100%;
  border-top: 1px solid ${({theme}) => theme.borderColor};
  background: ${({theme}) => theme.backgroundTertiary};
  padding: 20px;
`;

const LayoutColumnFooterGen = (props) => {
  return (
    <StyledLayoutColumnFooterGen {...props}>
      {props.children}
    </StyledLayoutColumnFooterGen>
  );
};

export default LayoutColumnFooterGen;
