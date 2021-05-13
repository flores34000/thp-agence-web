import React from 'react';
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import CardWork from './pages/CardWork';
 


function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles />
        <Header/>
        <Main>
          <Switch>
              <Route path="/" exact>
                <Home/>
              </Route>
              <Route path="/about" exact>
                <About/>
              </Route>
              <Route path="/works" exact>
                <Works/>
              </Route>
              <Route path="/works/:title" exact>
                <CardWork/>
              </Route>
          </Switch>

        </Main>
        
      </Container>
    </ThemeProvider>
    </Router>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width:100%;
  display: grid;
  grid-template-rows: 38px auto;
`;
const Main = styled.div`
`

