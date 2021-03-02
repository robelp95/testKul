import React from "react";
import {CheckoutForm} from "./Checkout/CheckoutForm";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import {Redirect, Route} from "react-router-dom";
import {Switch} from 'react-router';
import Home from "./Home";
import Toolbar from "@material-ui/core/Toolbar";

const initialClient = {
    firstName : '',
    lastName: '',
    phoneNumber: null,
    deliveryType: '',
    address1: '',
    address2: '',
    comment: ''
};
const mainFeaturedPost = {
    title: 'Titulo del catalogo de productos',
    description:
        "Descripción del catálogo de productos",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description'
};
function Menu() {
    return (
        <>
            <MainFeaturedPost post={mainFeaturedPost} />
            <CheckoutForm initialClient={initialClient} />
        </>
    );
}

function App() {
  return (
      <div>
          <Header />
          <Toolbar /> {/* Fix altura del contenido */}
          <div>
              <Switch>
                  <Route exact from="/login" render={props => <Home page="Login" {...props}/>}/>
                  <Route exact from="/cliente" render={props => <Home page="CRM cliente" {...props}/>}/>
                  <Route exact from="/ajustes" render={props => <Home page="Ajustes cliente" {...props}/>}/>
                  <Route exact from="/partner" render={props => <Home page="CRM partner" {...props}/>}/>
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
