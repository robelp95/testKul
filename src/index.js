import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {Switch} from 'react-router';
import {LandingPage} from "./LandingPage/LandingPage";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#643CA3'
        }
    }
});


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path="/">
                  <LandingPage/>
              </Route>
              <Route path="/:app">
                  <MuiThemeProvider theme={theme}>
                      <App />
                  </MuiThemeProvider>
              </Route>
          </Switch>

      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.register();

