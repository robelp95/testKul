import React, {useEffect, useMemo, useState} from "react";
import Header from "./Header";
import {Redirect, Route, withRouter} from "react-router-dom";
import {Switch} from 'react-router';
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
    CATEGORY_CONTROLLER_ENDPOINT,
    COIN_CONTROLLER_ENDPOINT,
    CREATE_USER_ENDPOINT,
    GET_USER_BY_MAIL_ENDPOINT,
    NEW_USER,
    PAYKU_CONTROLLER_ENDPOINT,
    UPDATE_USER_DATA_ENDPOINT,
    USER_DATA
} from "./Api/Contants";
import {getHeaders, useNull} from "./utils/utils";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useCommonStyles} from "./utils/commonStyles";
import Home from "./Home";


netlifyIdentity.init({locale: 'es'});

const App = (props) => {
    const [notify, setNotify] = useState({isOpen: false, message: '', type: ''});
    const [state, setState] = useState({user: null});
    const value = useMemo(() => ({ state, setState }), [state, setState]);
    const [loading, setLoading] = useState(false);

    const {history} = props;
    netlifyIdentity.on('logout', () => {
        setState({
            ...state,
            user: null
        });
    });

    const updateUserData = async (user) => {
        let updatedUser = USER_DATA;
        updatedUser.address = user.address;
        updatedUser.brandName = user.brandName;
        updatedUser.base64Image = user.base64Image;
        updatedUser.categoryId = user.categoryId != null ? user.categoryId : user.category.id;
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
            const headers = {headers: getHeaders(state.user.token)};
            const userData = await axios
                .post(UPDATE_USER_DATA_ENDPOINT + parseInt(state.user.id), updatedUser, headers)
                .catch(useNull);
            if (userData){
                const data = userData.data;
                let newUser = state.user;
                newUser.address = data.address;
                newUser.brandName = data.brandName;
                newUser.base64Image = data.base64Image;
                newUser.categoryId = data.categoryId;
                newUser.category = data.category;
                newUser.description = data.description;
                newUser.deliveryCharge = data.deliveryCharge;
                newUser.email = data.email;
                newUser.image = data.image;
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
                setNotify({isOpen:true, message: 'Perfil actualizado correctamente', type:'success'});

            }else{
                setNotify({isOpen:true, message: 'No se pudo actualizar el perfil', type:'error'});
            }
        }catch (e) {
            console.log(e, 'err');
        }
    }

    const fetchInitData = async (user)=>{
        setLoading(true);
        netlifyIdentity.close();
        let activeSuscription = null;
        const headers = {headers: getHeaders(user.token.access_token)};
        console.log("uno");
        let [plans, coins, categories, userData] = await axios.all([
            axios.get(PAYKU_CONTROLLER_ENDPOINT + 'plans', headers).catch(useNull),
            axios.get(COIN_CONTROLLER_ENDPOINT, headers).catch(useNull),
            axios.get(CATEGORY_CONTROLLER_ENDPOINT, headers).catch(useNull),
            axios.get(GET_USER_BY_MAIL_ENDPOINT + user.email, headers).catch(useNull)
        ]);
        console.log("dos");
        if(!userData) {
            let initData = NEW_USER;
            initData.email = user.email;
            const username = user.user_metadata.full_name.replace(/[^a-zA-Z0-9]/g,'a');
            initData.username = username;
            initData.brandName = username;
            userData = await axios.post(CREATE_USER_ENDPOINT, initData, headers);
        }
        activeSuscription = userData && _.find(userData.data.suscription, function (elem) {
            return elem.status === true;
        }) || null;

        userData.data.suscription = activeSuscription;
        userData.data.token = user.token.access_token;
        setState({
            user: userData && userData.data,
            plans: plans && plans.data,
            coins: coins && coins.data,
            categories: categories && categories.data
        });
        setLoading(false);
        history.push('/app/cliente');
    }

    useEffect(async () => {
        const user = netlifyIdentity.currentUser();
        if (user !== null){
            try {
                await fetchInitData(user);
            } catch (err) {
                setLoading(false);
                handleLogout();
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
                setLoading(false);
                handleLogout();
                console.log(e);
            }
        });
    }
    const handleLogout = () => {
        netlifyIdentity.logout();
    }

    const classes= useCommonStyles();

    return (
      <div>

          <UserContext.Provider value={value}>
            <Header
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loading={loading}
            />
          </UserContext.Provider>
          <Toolbar/>
          <Notification notify={notify} setNotify={setNotify}/>
          <div>
              {loading ?
                <div style={{textAlign: "center"}} className={classes.layout}><CircularProgress/></div> :
                  (
                      <UserContext.Provider value={value}>
                          <Switch>
                              <Route exact from="/app" render={() => <Home/>}/>
                              <PrivateRoute exact from="/app/mis-pedidos">
                                  <ClientOrders/>
                              </PrivateRoute>

                              <PrivateRoute exact path="/app/cliente">
                                  <ClientProfile
                                      updateUserData={updateUserData}
                                      setState={setState}
                                      setNotify={setNotify}
                                  />
                              </PrivateRoute>
                              <PrivateRoute
                                  exact from="/app/manage-catalog">
                                  <CreateCatalog
                                      editMode={true}
                                      setNotify={setNotify}
                                      setState={setState}
                                  />
                              </PrivateRoute>
                              <Route
                                  exact from="/:name" render={() => <Menu
                                  notify={notify}
                                  editMode={false}
                                  setNotify={setNotify}
                              />}
                              />
                              <Route path="*">
                                  <Redirect to="/app" />
                              </Route>
                          </Switch>
                      </UserContext.Provider>
                  )
              }

          </div>
          <Copyright/>
      </div>
  )
}

export default withRouter(App);
