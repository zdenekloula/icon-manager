import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../context/AppContext";
import ThemeToggle from "../ThemeToggle";

const Header = styled.div`
  padding: 20px;
  margin-bottom: 0;
`;

const LogoContainer = styled.div`
  & > svg {
    fill: ${props => props.theme.primary};
  }
`;

const LibraryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LibraryLink = styled.a`
  position: relative;
  display: block;
  padding: 10px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  color: ${props => props.theme.fontColor};
  text-decoration: none;
  background: ${({ isActive, theme }) =>
    isActive
      ? `linear-gradient(-45deg, ${theme.backgroundSecondary}, transparent)`
      : "transparent"};
  transition: background 0.3s ease;
  ${({ isActive, theme }) =>
    isActive &&
    `
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      background: ${theme.primary};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      width: 4px;
      height: 100%;
    }
  `}
`;

const LibraryItem = styled.li`
  &:first-child {
    ${LibraryLink} {
      border-top: 1px solid ${({ theme }) => theme.borderColor};
    }
  }
`;

const ToggleContainer = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;
`;

const LayoutColumnLibrary = props => {
  const {
    librariesData,
    //updateLibrariesData,
    activeLibrary,
    setActiveLibrary,
  } = useContext(AppContext);

  /* const appendTestLibrary = () => {
    let testLibrary = {
      name: "Test Library",
    };
    updateLibrariesData([...librariesData, testLibrary]);
  }; */

  return (
    <div>
      <Header>
        <LogoContainer>
          <svg
            width="30"
            height="27"
            viewBox="0 0 30 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M29.8505 25.8632L22.9883 13.5789H6.95575L0.0935752 25.8632C-0.0311917 26.0842 -0.0311917 26.3684 0.0935752 26.6211C0.218342 26.8737 0.467876 27 0.748601 27H29.1955C29.4762 27 29.6945 26.8737 29.8505 26.6211C29.9752 26.3684 29.9752 26.1158 29.8505 25.8632Z" />
            <path d="M8.51534 12.8211H21.4287C21.7094 12.8211 21.9278 12.6947 22.0837 12.4421C22.2085 12.2211 22.2085 11.9368 22.0837 11.6842L15.6271 0.378947C15.4711 0.126316 15.2527 0 14.972 0C14.6913 0 14.473 0.126316 14.317 0.378947L7.86031 11.7158C7.73555 11.9368 7.73555 12.2211 7.86031 12.4737C7.98508 12.6947 8.23461 12.8211 8.51534 12.8211ZM12.5391 7.73684C12.5391 6.37895 13.6308 5.27368 14.972 5.27368C16.3133 5.27368 17.405 6.37895 17.405 7.73684C17.405 9.09474 16.3133 10.2 14.972 10.2C13.6308 10.2 12.5391 9.09474 12.5391 7.73684Z" />
          </svg>
        </LogoContainer>
        {/* <button onClick={switchTestTheme}>Switch Theme</button> */}
      </Header>
      <ToggleContainer>
        <ThemeToggle />
      </ToggleContainer>
      <div>
        <LibraryList>
          {librariesData.map((item, index) => (
            <LibraryItem key={index}>
              <LibraryLink
                href="#"
                onClick={() => setActiveLibrary(index)}
                isActive={index === activeLibrary}
              >
                {item.name}
              </LibraryLink>
            </LibraryItem>
          ))}
        </LibraryList>
      </div>
    </div>
  );
};

export default LayoutColumnLibrary;
