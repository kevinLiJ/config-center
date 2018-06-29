import Loadable from "react-loadable";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Spin } from "antd";

const loading = () => (
    <div className="global_mark">
        <Spin />
    </div>
);
const LoginComponent = Loadable({
    loader: () => import("./login"),
    loading: loading
});

class LoginRoute extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={LoginComponent} />
                <Redirect to="/" />
            </Switch>
        );
    }
}

export default LoginRoute;
