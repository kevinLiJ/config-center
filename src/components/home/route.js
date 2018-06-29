import Loadable from "react-loadable";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Spin } from "antd";

const loading = () => (
    <div className="global_mark">
        <Spin />
    </div>
);
// 控制台
const ConsoleComponent = Loadable({
    loader: () => import("./console"),
    loading: loading
});

// 基础信息
const BaseInfoComponent = Loadable({
    loader: () => import("./baseInfo"),
    loading: loading
});
// 品牌设置
const BrandSettingComponent = Loadable({
    loader: () => import("./brandSetting"),
    loading: loading
});
// 开户设置
const OpenAccountSettingComponent = Loadable({
    loader: () => import("./openAccountSetting"),
    loading: loading
});
// 品牌设置
const NotFoundComponent = Loadable({
    loader: () => import("./notFound"),
    loading: loading
});
class HomeRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={ConsoleComponent} />
                <Route path="/baseInfo" component={BaseInfoComponent} />
                <Route path="/brandSetting" component={BrandSettingComponent} />
                <Route
                    path="/openAccountSetting"
                    component={OpenAccountSettingComponent}
                />
                <Route path="/notFound" component={NotFoundComponent} />
                <Redirect to="/notFound" />
            </Switch>
        );
    }
}

export default HomeRouter;
