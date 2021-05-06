import React, {useEffect, useMemo, useState} from "react";
import Header from "./Header";
import {Redirect, Route} from "react-router-dom";
import {Switch} from 'react-router';
import Home from "./Home";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "./Checkout/Menu";
import ClientProfile from "./Client/ClientProfile";
import CreateCatalog from "./Client/CreateCatalog";
import Notification from "./ShoppingCart/Notification";
import ClientOrders from "./Client/ClientOrders";
import Copyright from "./utils/Copyright";
import netlifyIdentity from 'netlify-identity-widget';
import {UserContext} from './Context/UserContext';
import * as _ from 'lodash';
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import {
    API_HEADERS,
    CATEGORY_CONTROLLER_ENDPOINT,
    COIN_CONTROLLER_ENDPOINT,
    CREATE_USER_ENDPOINT,
    GET_USER_BY_MAIL_ENDPOINT,
    NEW_USER,
    PAYKU_CONTROLLER_ENDPOINT,
    UPDATE_USER_DATA_ENDPOINT,
    USER_DATA
} from "./Api/Contants";

netlifyIdentity.init({locale: 'es'});

const  App = () => {
    const [notify, setNotify] = useState({isOpen: false, message: '', type: ''});
    const [state, setState] = useState({user: null});
    const value = useMemo(() => ({ state, setState }), [state, setState]);
    netlifyIdentity.on('logout', () => {
        setState({
            ...state,
            user: null
        });
    });

    function useNull() {
        return null;
    }

    const updateUserData = async (user) => {
        let updatedUser = USER_DATA;
        updatedUser.address = user.address;
        updatedUser.brandName = user.brandName;
        updatedUser.base64Image = null;
        updatedUser.categoryId = user.category.id;
        updatedUser.description = user.description;
        updatedUser.deliveryCharge = parseInt(user.deliveryCharge);
        updatedUser.email = user.email;
        updatedUser.minDelivery = parseInt(user.minDelivery);
        updatedUser.name = user.name;
        updatedUser.open = user.open;
        updatedUser.opening = user.opening;
        updatedUser.orderViaId = state.user.orderVia.id;
        updatedUser.paymentInstructions = user.paymentInstructions;
        updatedUser.phoneNumber = user.phoneNumber;
        updatedUser.username = state.user.username;

        try {
            const userData = await axios
                .post(UPDATE_USER_DATA_ENDPOINT + parseInt(state.user.id), updatedUser)
                .catch(useNull);
            if (userData){
                const data = userData.data;
                let newUser = state.user;
                newUser.address = data.address;
                newUser.brandName = data.brandName;
                newUser.base64Image = data.base64Image;
                newUser.categoryId = data.categoryId;
                newUser.description = data.description;
                newUser.deliveryCharge = data.deliveryCharge;
                newUser.email = data.email;
                newUser.minDelivery = data.minDelivery;
                newUser.name = data.name;
                newUser.open = data.open;
                newUser.opening = data.opening;
                newUser.orderViaId = data.orderViaId;
                newUser.paymentInstructions = data.paymentInstructions;
                newUser.phoneNumber = data.phoneNumber;
                newUser.username = data.username;

                setState({
                    ...state,
                    user: newUser
                });
            }
        }catch (e) {
            console.log(e, 'err');
        }
    }

    const fetchInitData = async (user)=>{
        let activeSuscription = null;
        let [plans, coins, categories, userData] = await axios.all([
            axios.get(PAYKU_CONTROLLER_ENDPOINT + 'plans').catch(useNull),
            axios.get(COIN_CONTROLLER_ENDPOINT).catch(useNull),
            axios.get(CATEGORY_CONTROLLER_ENDPOINT).catch(useNull),
            axios.get(GET_USER_BY_MAIL_ENDPOINT + user.email).catch(useNull)
        ]);
        if(!userData) {
            let initData = NEW_USER;
            initData.email = user.email;
            initData.username = user.user_metadata.full_name;
            initData.brandName = user.user_metadata.full_name;
            userData = await axios.post(CREATE_USER_ENDPOINT, initData, API_HEADERS);
        }
        activeSuscription = userData && _.find(userData.data.suscription, function (elem) {
            return elem.status === true;
        }) || null;

        userData.data.suscription = activeSuscription;
        setState({
            user: userData && userData.data,
            plans: plans && plans.data,
            coins: coins && coins.data,
            categories: categories && categories.data
        });
    }

    useEffect(async () => {
        const user = netlifyIdentity.currentUser();
        if (user !== null){
            try {

                await fetchInitData(user);
            } catch (err) {
                console.log(err.message, 'err');
            }
        }
    }, []);

    const handleLogin = () => {
        netlifyIdentity.open();
        netlifyIdentity.on('login', async user => {
            try {
                await fetchInitData(user);
            }catch (e) {
                console.log(e);
            }
        });
    }
    const handleLogout = () => {
        netlifyIdentity.logout();
    }

  return (
      <div>

          <UserContext.Provider value={value}>
            <Header
                handleLogin={handleLogin}
                handleLogout={handleLogout}
            />
          </UserContext.Provider>
          <Toolbar/>
          <Notification notify={notify} setNotify={setNotify}/>
          <div>
              <UserContext.Provider value={value}>
                  <Switch>
                      <Route exact from="/home" render={props => <Home page="Landing Page" {...props}/>}/>
                      <PrivateRoute exact from="/mis-pedidos">
                          <ClientOrders/>
                      </PrivateRoute>

                      <PrivateRoute exact path="/cliente">
                          <ClientProfile
                              updateUserData={updateUserData}
                              setState={setState}
                              setNotify={setNotify}
                          />
                      </PrivateRoute>
                      <PrivateRoute
                          exact from="/manage-catalog">
                          <CreateCatalog
                              editMode={true}
                              setNotify={setNotify}
                              setState={setState}
                          />
                      </PrivateRoute>
                      <Route
                          exact from="/:name" render={props => <Menu
                          notify={notify}
                          editMode={false}
                          setNotify={setNotify}
                          {...props}/>}
                      />
                      <Route path="*">
                          <Redirect to="/home" />
                      </Route>
                  </Switch>
              </UserContext.Provider>
          </div>
          <Copyright/>
      </div>
  )
}

export default App;
