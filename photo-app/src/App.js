import React from 'react';
import { observer } from 'mobx-react';
import { Home, Login } from "./pages";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';

const history = createBrowserHistory();

const App = observer(() => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
})

export default App;
