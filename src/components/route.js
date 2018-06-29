import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Spin } from "antd";
import Home from "./home";
import Login from "./login";
import { VerificationLogin } from "./../actions/login";
import { bindActionCreators } from "redux";

class RootRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        this.props.VerificationLogin();
    }
    render() {
        let isLogin = this.props.loginInfo.status;
        return (
            <React.Fragment>
                <Route
                    path="/"
                    render={() => {
                        // return isLogin ? <Home /> : <Login />;
                        if (isLogin === null) {
                            return (
                                <div className="global_mark">
                                    <Spin size="large" />
                                </div>
                            );
                        } else if (isLogin === true) {
                            return <Home />;
                        } else {
                            return <Login />;
                        }
                    }}
                />
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return { loginInfo: state.LoginInfo };
}
function mapDispatchToProps(dispatch) {
    return {
        VerificationLogin: bindActionCreators(VerificationLogin, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps, undefined, {
    pure: false
})(RootRoute);
