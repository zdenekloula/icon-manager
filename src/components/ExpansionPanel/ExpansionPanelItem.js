import React, { useState, useCallback } from "react";
import styled from "styled-components";

const ExpansionPanelItemHeaderIcon = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 21px;
  height: 21px;
  cursor: pointer;
  color: ${({ theme }) => theme.fontColor};
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: currentColor;
    pointer-events: none;
    transform: translateZ(0);
  }
`;

const ExpansionPanelItemHeader = styled.div`
  display: flex;
  padding: 0 24px 0 24px;
  min-height: 48px;
  cursor: pointer;
  margin: 0;
  outline: none;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const ExpansionPanelItemHeaderContent = styled.div`
  margin: 12px 0;
  display: flex;
  flex-grow: 1;
`;

const StyledExpansionPanelItem = styled.div`
  width: 100%;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  position: relative;
  transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.fontColor};
  &:hover {
    ${ExpansionPanelItemHeaderIcon} {
      color: ${({ theme }) => theme.primary};
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    ${ExpansionPanelItemHeaderIcon} {
      transform: rotate(180deg);
    }
  `}
`;

const ExpansionPanelItemBody = styled.div`
  width: 100%;
  padding: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
  p {
    margin-bottom: 0;
  }
`;

function ExpansionPanelItem({
  children,
  title,
  extended: defaultExtended = false,
}) {
  const [isOpened, makeOpened] = useState(defaultExtended);
  const openPanel = useCallback(() => {
    makeOpened(!isOpened);
  }, [isOpened, makeOpened]);
  return (
    <StyledExpansionPanelItem isOpen={isOpened}>
      <ExpansionPanelItemHeader onClick={openPanel}>
        <ExpansionPanelItemHeaderContent>
          {title}
        </ExpansionPanelItemHeaderContent>
        <ExpansionPanelItemHeaderIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z" />
          </svg>
        </ExpansionPanelItemHeaderIcon>
      </ExpansionPanelItemHeader>
      {isOpened && <ExpansionPanelItemBody>{children}</ExpansionPanelItemBody>}
    </StyledExpansionPanelItem>
  );
}

export default ExpansionPanelItem;
