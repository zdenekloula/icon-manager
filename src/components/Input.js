import React  from 'react';
import styled from 'styled-components';

const StyledInput = styled((props) => {
  const {
    className,
    children,
    ...other
  } = props;
  return(
      <input className={className} {...other} />
    )
  },
)`
  display: block;
  border: 1px solid ${({theme}) => theme.borderColor};
  padding: 14px 19px 15px;
  background: ${({theme}) => theme.backgroundDark};
  font-size: 14px;
  line-height: normal;
  width: 100%;
  height: 45px;
  border-radius: 2px;
  appearance: none;
  transition: border-color 0.3s;
  color: #fff;
  box-sizing: border-box;
  &:focus {
    outline: 0;
  }
`;

const Input = (props) => {
  const {
    className,
    ...other
  } = props;
  return (
    <StyledInput {...other} />
  )
};

export default Input;
