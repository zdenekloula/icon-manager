import React from 'react';
import styled from 'styled-components';
import { theme } from '../../config'

const StyledLayoutSearch = styled.input`
  height: 100%;
  font-weight: 700;
  background: transparent;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 20px;
  width: 100%;
  color: #fff;
  height: 45px;
  margin-top: 10px;
  background: ${theme.backgroundTertiary}

  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.54);
  }

  &:focus {
    outline: 0;
  }
`;

const LayoutSearch = (props) => {
  const handleInput = (event) => props.onChange(event);
  
  return (
      <StyledLayoutSearch type="text" {...props} placeholder="Filter..." onChange={(event) => handleInput(event)} />
  );
};

export default LayoutSearch;
