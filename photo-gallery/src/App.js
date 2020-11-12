import React from 'react';
import { Home, Login } from "./pages";
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
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
