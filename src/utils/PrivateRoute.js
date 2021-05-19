import React, {useContext} from "react";
import {Redirect, Route} from "react-router";
import {UserContext} from "../Context/UserContext";

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
                            pathname: "/app",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;