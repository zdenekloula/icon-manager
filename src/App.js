import React, { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { AppProvider } from "./context/AppContext";
import Manager from "./Manager";

const themes = {
  light: {
    THEME_NAME: "light",
    primary: "#457BF4",
    secondary: "#72195A",
    success: "#149911",
    warning: "#FF8C42",
    danger: "#DD0046",
    primaryFontColor: "#fff",
    backgroundPrimary: "#F8F8F8",
    backgroundSecondary: "#fff",
    backgroundTertiary: "#f2f2f2",
    backgroundDark: "#F8F8F8",
    backgroundInput: "#f2f2f2",
    handleColor: "#E5E5E5",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderColorLight: "rgba(0, 0, 0, 0.05)",
    scrollbarBg: "rgba(0, 0, 0, 0.4)",
    fontColor: "#000",
    modalBackground: "#fff",
    columnHeaderHeight: 60,
    heading: {
      weight: {
        heading1: 700,
        heading2: 500,
        heading3: 400,
        heading4: 400,
        heading5: 400,
      },
      size: {
        heading1: 32,
        heading2: 26,
        heading3: 22,
        heading4: 20,
        heading5: 16,
      },
    },
  },
  dark: {
    THEME_NAME: "dark",
    primary: "#457BF4",
    secondary: "#72195A",
    success: "#149911",
    warning: "#FF8C42",
    danger: "#DD0046",
    primaryFontColor: "#fff",
    backgroundPrimary: "#14141C",
    backgroundSecondary: "#1C1C28",
    backgroundTertiary: "#242633",
    backgroundDark: "#1b1c27",
    backgroundInput: "#0d0e13",
    handleColor: "#30303F",
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderColorLight: "rgba(255, 255, 255, 0.05)",
    scrollbarBg: "rgba(255, 255, 255, 0.4)",
    fontColor: "#fff",
    modalBackground: "#242633",
    columnHeaderHeight: 60,
    heading: {
      weight: {
        heading1: 700,
        heading2: 500,
        heading3: 400,
        heading4: 400,
        heading5: 400,
      },
      size: {
        heading1: 32,
        heading2: 26,
        heading3: 22,
        heading4: 20,
        heading5: 16,
      },
    },
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.fontColor};
  }
  * ::-webkit-scrollbar {
    width: 8px;
  }

  * ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbarBg};
    border-radius: 20px;
  }

  * ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
  }
`;

function App() {
  const getTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "dark";
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(themes[getTheme]);
  const [appData, setAppData] = useState({});

  const [librariesData, setLibrariesData] = useState(null);
  const [activeLibrary, setActiveLibrary] = useState(0);

  const [projectsData, setProjectsData] = useState(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    fetch("/api/init")
      .then(res => res.json())
      .then(jsonRes => {
        setAppData(jsonRes);
        setLibrariesData(jsonRes.libraries);
        setProjectsData(jsonRes.projects);
        setLoading(false);
      });
  }, []);

  const switchTheme = () => {
    const newTheme = getTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(theme === themes["dark"] ? themes["light"] : themes["dark"]);
  };

  const updateLibrariesData = data => {
    setLibrariesData(data);
  };

  const updateProjectsData = data => {
    setProjectsData(data);
  };

  return (
    <AppProvider
      value={{
        theme,
        switchTheme,

        librariesData,
        updateLibrariesData,
        activeLibrary,
        setActiveLibrary,

        projectsData,
        updateProjectsData,
        activeProject,
        setActiveProject,
      }}
    >
      <ThemeProvider theme={theme}>
        <div className="App">
          {!loading && <Manager appData={appData} />}
          <GlobalStyles />
        </div>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
