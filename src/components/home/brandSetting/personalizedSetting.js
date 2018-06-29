import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "./../../../axios";
// import "./index.less";
import { Form, Input, Col, Row, Upload, Button, Icon } from "antd";
const FormItem = Form.Item;

class PersonalizedSetting extends Component {
    constructor() {
        super();
        this.state = {
            fileList: [
                {
                    uid: -1,
                    name: "xxx.png",
                    status: "done",
                    url:
                        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                }
            ]
        };
    }
    normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                this.props.form.setFields({
                    sys_trader_logo: {
                        value: values.sys_trader_logo[0].url
                    },
                    sys_trader_login_bgimg: {
                        value: values.sys_trader_login_bgimg[0].url
                    }
                });
                axios
                    .post("/v1/config/personalized_setting", {
                        type: "kv",
                        ...this.props.form.getFieldsValue(),
                        brand: this.props.currBrand
                    })
                    .then(resp => {
                        console.log(resp);
                    });
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;

        // formItem样式配置
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 }
            }
        };

        // 文件上传相关
        const uploadButton = (
            <Button>
                <Icon type="upload" /> Upload
            </Button>
        );
        const fileList = this.state.fileList;
        const handleChange = ({ fileList }) => this.setState({ fileList });

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={16}>
                        <FormItem {...formItemLayout} label="(trader)系统标题">
                            {getFieldDecorator("sys_trader_title", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your E-mail!"
                                    }
                                ]
                            })(<Input />)}
                        </FormItem>
                    </Col>
                    <Col span={7} push={1} className="form_item_tip">
                        系统标题，浏览器title值
                    </Col>
                </Row>

                <Row>
                    <Col span={16}>
                        <FormItem
                            {...formItemLayout}
                            label="(Trader)登录页背景颜色"
                        >
                            {getFieldDecorator("sys_trader_bgcolor", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please upload your bgcolor!"
                                    }
                                ]
                            })(<Input />)}
                        </FormItem>
                    </Col>
                    <Col span={7} push={1} className="form_item_tip">
                        显示在页面左上角（推荐尺寸：240*42
                        px[像素]，格式：jpg/png/bmp）
                    </Col>
                </Row>
                <Row>
                    <Col span={16}>
                        <FormItem {...formItemLayout} label="(Trader)系统logo">
                            {getFieldDecorator("sys_trader_logo", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please upload your logo!"
                                    }
                                ],
                                initialValue: fileList,
                                getValueFromEvent: this.normFile
                            })(
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    defaultFileList={fileList}
                                    onChange={handleChange}
                                >
                                    {fileList.length > 0 ? null : uploadButton}
                                </Upload>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={7} push={1} className="form_item_tip">
                        上传logo
                    </Col>
                </Row>

                <Row>
                    <Col span={16}>
                        <FormItem
                            {...formItemLayout}
                            label="(Trader)登录页背景图片"
                        >
                            {getFieldDecorator("sys_trader_login_bgimg", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please upload your photo!"
                                    }
                                ],
                                initialValue: fileList,
                                getValueFromEvent: this.normFile
                            })(
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    defaultFileList={fileList}
                                    onChange={handleChange}
                                >
                                    {fileList.length > 0 ? null : uploadButton}
                                </Upload>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={7} push={1} className="form_item_tip">
                        上传logo
                    </Col>
                </Row>

                <Row>
                    <Col span={16}>
                        <FormItem
                            {...formItemLayout}
                            label="(trader)系统访问地址"
                        >
                            {getFieldDecorator("sys_trader_url", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your E-mail!"
                                    }
                                ]
                            })(<Input />)}
                        </FormItem>
                    </Col>
                    <Col span={7} push={1} className="form_item_tip">
                        访问地址
                    </Col>
                </Row>
                <Row>
                    <Col span={16}>
                        <FormItem {...formItemLayout} label="(Trader)客服方式">
                            {getFieldDecorator("sys_trader_customerservice", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your E-mail!"
                                    }
                                ]
                            })(<Input />)}
                        </FormItem>
                    </Col>
                    <Col span={7} push={1} className="form_item_tip">
                        客服方式
                    </Col>
                </Row>
                <FormItem wrapperCol={{ span: 12, offset: 11 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const mapStateToProps = state => ({ currBrand: state.CurrBrand });
export default connect(mapStateToProps)(Form.create()(PersonalizedSetting));
