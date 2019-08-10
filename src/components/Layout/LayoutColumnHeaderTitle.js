import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../Button';

const StyledLayoutColumnHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${StyledButton} {
    margin-left: 15px;
  }
`;

const LayoutColumnHeaderTitle = (props) => {
  return (
    <StyledLayoutColumnHeaderTitle {...props}>
      {props.children}
    </StyledLayoutColumnHeaderTitle>
  );
};

export default LayoutColumnHeaderTitle;
