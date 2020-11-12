import React from 'react';
import Home from "./pages/home";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'theme-ui';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
