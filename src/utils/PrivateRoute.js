import React, {useContext} from "react";
import {Redirect, Route} from "react-router";
import {UserContext} from "../UserContext";

//TODO FIRST OF ALL
//TODO get user from context on every load

function PrivateRoute({ children, ...rest }) {
    const {state} = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                state.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;