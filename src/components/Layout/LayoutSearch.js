import React from 'react';
import styled from 'styled-components';

const StyledLayoutSearch = styled.input`
  height: 100%;
  font-weight: 700;
  background: transparent;
  border: 0;
  font-size: 18px;
  padding: 0 20px;
  width: 100%;
  color: #fff;

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
