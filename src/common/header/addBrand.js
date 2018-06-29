import { Modal, Button, Form, Input } from "antd";
import React, { Component } from "react";
import axios from "./../../axios";
const FormItem = Form.Item;
class AddBrand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            confirmLoading: false
        };
    }
    handleOk = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ confirmLoading: true });
                axios
                    .post("/v1/brand", {
                        ...this.props.form.getFieldsValue()
                    })
                    .then(resp => {
                        console.log(resp);
                        this.setState({
                            confirmLoading: false,
                            visible: false
                        });
                    });
            }
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false,
            confirmLoading: false
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                sm: { span: 4, push: 2 }
            },
            wrapperCol: {
                sm: { span: 16, push: 2 }
            }
        };
        return (
            <React.Fragment>
                <Button
                    ghost
                    onClick={() => {
                        this.setState({ visible: true });
                    }}
                >
                    新增项目
                </Button>
                <Modal
                    title="新增项目"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <FormItem {...formItemLayout} label="品牌名称">
                            {getFieldDecorator("name", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your password!"
                                    }
                                ]
                            })(<Input />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="品牌代码">
                            {getFieldDecorator("code")(<Input />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="品牌描述">
                            {getFieldDecorator("remake")(<Input />)}
                        </FormItem>
                    </Form>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Form.create()(AddBrand);
