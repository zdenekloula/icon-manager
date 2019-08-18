import React from "react";
import styled from "styled-components";

const StyledIconBoxListWrapper = styled.div`
  display: block;
  height: calc(100vh - 360px);
  overflow-x: hidden !important;
  padding: 0 15px 0 0;
`;

const IconBoxListWrapper = props => {
  return (
    <StyledIconBoxListWrapper {...props}>
      {props.children}
    </StyledIconBoxListWrapper>
  );
};

export default IconBoxListWrapper;
