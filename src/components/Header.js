import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Toggle } from "../components/Toggle";
import { useDarkMode } from "../styles/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

function Header() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <Container>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Main>
          <Logo>Agence Web</Logo>
          <Link to="/" className="link-deco">
            Home
          </Link>
          <Link to="/about" className="link-deco">
            About
          </Link>
          <Link to="/works" className="link-deco">
            Works
          </Link>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </Main>
      </ThemeProvider>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  width: 100%;
  padding-top:20px
`;
const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .link-deco {
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    :hover {
      transform:scale(1.5);
      color:#bb86fc;
    }
  }
`;
const Logo = styled.div`
  font-weight: 900;
  color: #cc03fe;
font-size:2.5rem;
`;
