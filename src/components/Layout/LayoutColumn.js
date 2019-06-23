import React  from 'react';
import styled from 'styled-components';

const StyledLayoutColumn = styled.div`
  position: relative;
  background-color: ${({isFixed, theme}) => isFixed ? theme.backgroundPrimary : theme.backgroundSecondary};
  color: #fff;
  box-sizing: border-box;
  height: 100vh;
  max-height: 100vh;
  user-select: ${({isDragging}) => isDragging && "none"};
  &:first-child {
    padding: ${({isFixed}) => isFixed ? 0 : "0"};
  }
  &:last-child {
    //padding: 15px 15px 15px 15px;
    padding: 0;
  }
  ${({isFixed}) => isFixed && `
      padding: 0;
      width: 250px;
  ` }
`;

const LayoutColumnInner = styled.div`
  max-height: 100%;
  overflow: auto;
  &:focus {
    outline: 0;
  }
`;

const Handle = styled.div`
  position: absolute;
  left: -5px;
  top: 0;
  width: 10px;
  height: 100%;
  background: ${(props) => props.theme.handleColor};
  cursor: col-resize;
  z-index: 100;
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
