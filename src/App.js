import React from "react";
import Header from "./Header";
import {Redirect, Route} from "react-router-dom";
import {Switch} from 'react-router';
import Home from "./Home";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "./Checkout/Menu";
import ClientProfile from "./Client/ClientProfile";

function App() {
  return (
      <div>
          <Header />
          <Toolbar/>
          <div>
              <Switch>
                  <Route exact from="/login" render={props => <Home page="Login" {...props}/>}/>
                  <Route exact from="/cliente" render={props => <ClientProfile {...props}/>}/>
                  <Route exact from="/ajustes" render={props => <Home page="Ajustes cliente" {...props}/>}/>
                  <Route exact from="/partner" render={props => <Home page="CRM partner" {...props}/>}/>
                  <Route exact from="/create-catalog" render={props => <Home page="Create catalog" {...props}/>}/>
                  <Route exact from="/edit-catalog" render={props => <Home page="Edit catalog" {...props}/>}/>
                  <Route exact from="/menu" render={props => <Menu {...props}/>}/>
                  <Route path="*">
                      <Redirect to="/menu" /> {/* Default route */}
                  </Route>
              </Switch>
          </div>
      </div>
  )
}

export default App;
