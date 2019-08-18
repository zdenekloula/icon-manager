import React from "react";
import styled from "styled-components";

const LayoutColumnsContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const LayoutResizeableColumns = React.forwardRef((props, ref) => {
  return (
    <LayoutColumnsContainer {...props} ref={ref}>
      {props.children}
    </LayoutColumnsContainer>
  );
});

export default LayoutResizeableColumns;
