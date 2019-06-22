import React, {useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from './context/AppContext'
import Manager from './Manager';

const light = {
  "primary": "#457BF4",
  "backgroundPrimary": "#F8F8F8",
  "backgroundSecondary": "#fff",
  "backgroundTertiary": "#f2f2f2",
  "handleColor": "#E5E5E5",
  "borderColor": "rgba(0, 0, 0, 0.1)",
  "scrollbarBg": "rgba(0, 0, 0, 0.4)",
  "fontColor": "#000",
  "columnHeaderHeight": 60,
  "heading": {
    "weight": {
      "heading1": 700,
      "heading2": 500,
      "heading3": 400,
      "heading4": 400,
      "heading5": 400,
    },
    "size": {
      "heading1": 32,
      "heading2": 26,
      "heading3": 22,
      "heading4": 20,
      "heading5": 16,
    }
  }
}

const dark = {
  "primary": "#457BF4",
  "backgroundPrimary": "#14141C",
  "backgroundSecondary": "#1C1C28",
  "backgroundTertiary": "#242633",
  "handleColor": "#30303F",
  "borderColor": "rgba(255, 255, 255, 0.1)",
  "scrollbarBg": "rgba(255, 255, 255, 0.4)",
  "fontColor": "#fff",
  "columnHeaderHeight": 60,
  "heading": {
    "weight": {
      "heading1": 700,
      "heading2": 500,
      "heading3": 400,
      "heading4": 400,
      "heading5": 400,
    },
    "size": {
      "heading1": 32,
      "heading2": 26,
      "heading3": 22,
      "heading4": 20,
      "heading5": 16,
    }
  }
}

const themes = {
  dark: {
    "primary": "#457BF4",
    "backgroundPrimary": "#14141C",
    "backgroundSecondary": "#1C1C28",
    "backgroundTertiary": "#242633",
    "handleColor": "#30303F",
    "borderColor": "rgba(255, 255, 255, 0.1)",
    "scrollbarBg": "rgba(255, 255, 255, 0.4)",
    "fontColor": "#fff",
    "columnHeaderHeight": 60,
    "heading": {
      "weight": {
        "heading1": 700,
        "heading2": 500,
        "heading3": 400,
        "heading4": 400,
        "heading5": 400,
      },
      "size": {
        "heading1": 32,
        "heading2": 26,
        "heading3": 22,
        "heading4": 20,
        "heading5": 16,
      }
    }
  },
  light: {
    "primary": "#457BF4",
    "backgroundPrimary": "#F8F8F8",
    "backgroundSecondary": "#fff",
    "backgroundTertiary": "#f2f2f2",
    "handleColor": "#E5E5E5",
    "borderColor": "rgba(0, 0, 0, 0.1)",
    "scrollbarBg": "rgba(0, 0, 0, 0.4)",
    "fontColor": "#000",
    "columnHeaderHeight": 60,
    "heading": {
      "weight": {
        "heading1": 700,
        "heading2": 500,
        "heading3": 400,
        "heading4": 400,
        "heading5": 400,
      },
      "size": {
        "heading1": 32,
        "heading2": 26,
        "heading3": 22,
        "heading4": 20,
        "heading5": 16,
      }
    }
  }
}

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(dark);
  const [appData, setAppData] = useState({});

  const [librariesData, setLibrariesData] = useState(null);
  const [activeLibrary, setActiveLibrary] = useState(0);

  useEffect(() => {
    fetch('/api/init')
      .then(res => res.json())
      .then(jsonRes => {
        setAppData(jsonRes);
        setLibrariesData(jsonRes.libraries);
        setLoading(false);
      });
  }, []);

  const switchTheme = (value) => {
    setTheme(theme === dark ? light : dark)
  }

  const updateLibrariesData = (data) => {
    setLibrariesData(data);
  }

  return (
    <AppProvider value={{theme, switchTheme, librariesData, updateLibrariesData, activeLibrary, setActiveLibrary }}>
      <ThemeProvider theme={theme}>
        <div className="App">
          { !loading && <Manager appData={appData} />}
        </div>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
