import React from "react";
import styled from "styled-components";

const StyledIconLibraryBoxItem = styled.div`
  vertical-align: top;
  text-align: left;
  letter-spacing: normal;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  max-width: 350px;
  box-sizing: border-box;
  padding: 0 10px 20px 10px;
`;

const IconLibraryBoxItem = props => {
  return (
    <StyledIconLibraryBoxItem {...props}>
      {props.children}
    </StyledIconLibraryBoxItem>
  );
};

export default IconLibraryBoxItem;
