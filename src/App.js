import React, {useState} from "react";
import Header from "./Header";
import {Redirect, Route} from "react-router-dom";
import {Switch} from 'react-router';
import Home from "./Home";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "./Checkout/Menu";
import ClientProfile from "./Client/ClientProfile";
import CreateCatalog from "./Client/CreateCatalog";
import Notification from "./ShoppingCart/Notification";


const productList = [
    {
        "id": 0,
        "name": "Pequeño Plástico Zapatos",
        "desc": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "price": "328.00",
        "category": "calzado",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 1,
        "name": "Guapo Plástico Raton",
        "desc": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "price": "319.00",
        "category": "calzado",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 2,
        "name": "Ergonómico Hormigon Camiseta",
        "desc": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "price": "206.00",
        "category": "pantalones",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 3,
        "name": "Artesanal Algodón Mesa",
        "desc": "The Football Is Good For Training And Recreational Purposes",
        "price": "507.00",
        "category": "calzado",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 4,
        "name": "Inteligente Metal Pelota",
        "desc": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "price": "499.00",
        "category": "remeras",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 5,
        "name": "Sabroso Granito Queso",
        "desc": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "price": "507.00",
        "category": "pantalones",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 6,
        "name": "Guapo Metal Raton",
        "desc": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "price": "662.00",
        "category": "pantalones",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 7,
        "name": "Ergonómico Acero Bacon",
        "desc": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "price": "279.00",
        "category": "remeras",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 8,
        "name": "Refinado Madera Ordenador",
        "desc": "The Football Is Good For Training And Recreational Purposes",
        "price": "861.00",
        "category": "pantalones",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 9,
        "name": "Guapa Acero Raton",
        "desc": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "price": "764.00",
        "category": "calzado",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 10,
        "name": "Fantástico Ladrillo Pizza",
        "desc": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "price": "805.00",
        "category": "calzado",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 11,
        "name": "Increible Metal Guantes",
        "desc": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "price": "534.00",
        "category": "pantalones",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 12,
        "name": "Rústico Acero Pizza",
        "desc": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "price": "982.00",
        "category": "calzado",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 13,
        "name": "Práctico Acero Pollo",
        "desc": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "price": "147.00",
        "category": "calzado",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 14,
        "name": "Guapa Granito Sopa",
        "desc": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "price": "869.00",
        "category": "remeras",
        "added": false,
        "enabled": true,
        "quantity": 0
    }
    ,
    {
        "id": 15,
        "name": "Práctico Acero Pollo",
        "desc": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "price": "147.00",
        "category": "materiales",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 16,
        "name": "Guapa Granito Sopa",
        "desc": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "price": "869.00",
        "category": "abrigo",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 17,
        "name": "Guapa Granito Sopa",
        "desc": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "price": "869.00",
        "category": "comida",
        "added": false,
        "enabled": true,
        "quantity": 0
    },
    {
        "id": 18,
        "name": "Guapa Granito Sopa",
        "desc": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "price": "869.00",
        "category": "bebidas",
        "added": false,
        "enabled": true,
        "quantity": 0
    }
];
const userData = {
    "id": 0,
    "username": "User.Prueba",
    "name": "Usuario de Prueba",
    "email": "emailfalso@gmail.com",
    "address": "Calle Falsa 123",
    "costumerName": "Usuario Falso",
    "phoneNumber": "+56945344567",
    "category": "Gastronomia",
    "coin": "$",
    "takeOrderVia": "whatsapp",
    "paymentInstructions": "Efectivo o Transferencia",
    "opening": "8 a 20 hs",
    "open": true,
    "brandName": "Nombre de la marca del negocio",
    "description": "Descripcion del catalogo de productos",
    "imagePath": null,
    "catalog": {
        "id":0,
        "products": productList
    },
};
const state =
    {
        "user" :userData,
        "products": productList

    };
function App() {
    const [notify, setNotify] = useState({isOpen: false, message: '', type: ''});

  return (
      <div>
          <Header />
          <Toolbar/>
          <Notification notify={notify} setNotify={setNotify}/>
          <div>
              <Switch>
                  <Route exact from="/login" render={props => <Home page="Login" {...props}/>}/>
                  <Route exact from="/cliente" render={props => <ClientProfile {...props}/>}/>
                  <Route exact from="/ajustes" render={props => <Home page="Ajustes cliente" {...props}/>}/>
                  <Route exact from="/manage-catalog" render={props => <CreateCatalog
                      productList={state["products"]}
                      editMode={true}
                      setNotify={setNotify}
                      userData={userData}
                      {...props}/>}/>
                  <Route exact from="/menu" render={props => <Menu
                      productList={state["products"]}
                      notify={notify}
                      editMode={false}
                      setNotify={setNotify}
                      userData={userData}
                      {...props}/>}/>
                  <Route path="*">
                      <Redirect to="/menu" /> {/* Default route */}
                  </Route>
              </Switch>
          </div>
      </div>
  )
}

export default App;
