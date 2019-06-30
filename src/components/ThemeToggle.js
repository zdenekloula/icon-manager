import React, { useContext } from 'react'
import styled from 'styled-components';
import AppContext from '../context/AppContext';

const ToggleContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 26px;
`

const ToggleHandle = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12.5px;
  overflow: hidden;
  background-color: ${({theme}) => theme.handleColor};
  transition: .3s;
  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 2px;
    bottom: 2px;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .4);
    background-color: white;
    transition: .3s;
    z-index: 4;
  }
`;

const ToggleImage = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  opacity: ${({active}) => active ? '1' : '0'};
  transition: 0.25s ease;
  color: ${({theme}) => theme.fontColor};
  & > svg {
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

const ToggleImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12.5px;
  background-color: transparent;
  z-index: 3;
  pointer-events: none;
  & > ${ToggleImage} {
    &:first-child {
      left: 5px;
      opacity: ${({active}) => active ? '1' : '0'};
    }
    &:last-child {
      right: 5px;
      opacity: ${({active}) => active ? '0' : '1'};
    }
  }
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked {
    & + label ${ToggleHandle} {
      //background-color: #00ff00;
    }
    
    & + label ${ToggleHandle}:before {
      transform: translateX(24px);
    }
  }
`;

const ToggleLabel = styled.label`
  z-index: 4;
`;

function ThemeToggle() {
  const { theme, switchTheme } = useContext(AppContext);

  const switchThemeToggle = () => {
    switchTheme()
  }

  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" checked={theme.THEME_NAME === 'dark' ? true : false} onChange={()=>{}} />
      <ToggleLabel onClick={switchThemeToggle}>
        <ToggleHandle/>
        <ToggleImageContainer active={theme.THEME_NAME === 'dark' ? true : false}>
          {/* Moon */}
          <ToggleImage>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"/></svg>
          </ToggleImage>
          {/* Sun */}
          <ToggleImage>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"/></svg>
          </ToggleImage>
        </ToggleImageContainer>
      </ToggleLabel>
    </ToggleContainer>
  )
}

export default ThemeToggle;
