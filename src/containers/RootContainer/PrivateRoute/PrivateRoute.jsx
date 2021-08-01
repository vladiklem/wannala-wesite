import { React } from "react";
import { Route, Redirect } from "react-router-dom";

import { Loader } from "components/";

export const PrivateRoute = ({ isLoading, hasAccess, component: Component, ...props }) => {
    return isLoading ? (
        <Loader />
    ) : (
        <Route {...props}>{hasAccess ? <Component /> : <Redirect to="/" />}</Route>
    );
};
