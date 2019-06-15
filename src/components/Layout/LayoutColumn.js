import React  from 'react';
import styled from 'styled-components';
import { theme } from '../../config'

const StyledLayoutColumn = styled.div`
  position: relative;
  background-color: ${({isFixed}) => isFixed ? theme.backgroundPrimary : theme.backgroundSecondary};
  color: #fff;
  box-sizing: border-box;
  height: 100vh;
  max-height: 100vh;
  user-select: ${({isDragging}) => isDragging && "none"};
  &:first-child {
    padding: ${({isFixed}) => isFixed ? 0 : "24px 29px 24px 24px"};
  }
  &:last-child {
    padding: 24px 24px 24px 29px;
  }
  ${({isFixed}) => isFixed && `
      padding: 0;
      width: 250px;
  ` }
`;

const LayoutColumnInner = styled.div`
  max-height: 100%;
  overflow: auto;
`;

const Handle = styled.div`
  position: absolute;
  left: -5px;
  top: 0;
  width: 10px;
  height: 100%;
  background: ${theme.handleColor};
  cursor: col-resize;
`;

const LayoutColumn = React.forwardRef((props, ref) => {
  return (
      <StyledLayoutColumn {...props}>
        {props.hasHandle &&
          <Handle ref={ref}></Handle>
        }
        <LayoutColumnInner>
          {props.children}
        </LayoutColumnInner>
      </StyledLayoutColumn>
  );
});

export default LayoutColumn;
