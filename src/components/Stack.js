import React from "react";
import styled from "styled-components";

const StyledStack = styled.div`
  & > * {
    margin: 0 16px 0 0;
    &:last-child {
      margin: 0;
    }
  }
`;

const Stack = props => {
  const { className, children, ...otherProps } = props;
  return <StyledStack {...otherProps}>{children}</StyledStack>;
};

export default Stack;
