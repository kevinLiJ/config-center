import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login } from "./../../../actions/login";
import { Form, Icon, Input, Button, Card } from "antd";
import "./index.less";
const FormItem = Form.Item;
class LoginComponent extends Component {
    state = {};
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login({ ...values, remember: 0 });
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <Card className="loginCard" title="设置中心">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator("account", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your account!"
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="user"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder="Username"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator("password", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your Password!"
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(login, dispatch)
    };
}

export default connect(undefined, mapDispatchToProps)(
    Form.create()(LoginComponent)
);
