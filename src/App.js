import React, { useState } from 'react';
import { Router } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components'
import { Main, SideNav, TopNav } from 'common';
import { GlobalStyle, Themes, History } from 'utils';

const lightTheme = () => ({
  ...Themes['common'],
  ...Themes['light'],
});

const darkTheme = () => ({
  ...Themes['common'],
  ...Themes['dark'],
});

const ThemeToggle = styled.div `
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 1
`;


const ThemeToggleBtn = styled.button `
  padding: 6px 10px;
  border: 1px solid #8bc5b2;
  font-size: 12px;
  outline: 0;
  font-weight: 500;
  background-color: ${props => (props.currentTheme === true) ? "#8bc5b2" : "#ffffff"};

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

function App() {
  const [theme, setTheme] = useState(lightTheme())
  const setDarkTheme = () => setTheme(darkTheme())
  const setLightTheme = () => setTheme(lightTheme())

  return (
    <Router history={History}>
      <ThemeToggle>
        <ThemeToggleBtn 
          onClick={setLightTheme}
          currentTheme={theme.type === 'light'}
          >
            Make it light
        </ThemeToggleBtn>
        <ThemeToggleBtn 
          onClick={setDarkTheme}
          currentTheme={theme.type === 'dark'}
          >
            Make it dark
        </ThemeToggleBtn>
      </ThemeToggle>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SideNav/>
        <TopNav/>
        <Main/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
