import React from "react";
import styled from "styled-components";

const StyledExpansionPanelList = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

function ExpansionPanelList({ children }) {
  return <StyledExpansionPanelList>{children}</StyledExpansionPanelList>;
}

export default ExpansionPanelList;
