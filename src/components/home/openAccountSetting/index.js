import React, { Component } from "react";
import axios from "./../../../axios";
import { connect } from "react-redux";
import { Form, Col, Row, Upload, Button, Icon, Card, Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;

class OpenAccountSetting extends Component {
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
                console.log("Received values of form: ", values);
                this.props.form.validateFields((err, values) => {
                    if (!err) {
                        this.props.form.setFields({
                            sys_account_agreement: {
                                value: values.sys_account_agreement[0].url
                            }
                        });
                        axios
                            .post("/v1/config/open_account_setting", {
                                type: "kv",
                                ...this.props.form.getFieldsValue(),
                                brand: this.props.currBrand
                            })
                            .then(resp => {
                                console.log(resp);
                            });
                    }
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
            <Card title="开户设置" type="inner" className="main_card">
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col span={14}>
                            <FormItem {...formItemLayout} label="可选服务器">
                                {getFieldDecorator(
                                    "sys_account_traderservertype",
                                    {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    "Please input your E-mail!"
                                            }
                                        ]
                                    }
                                )(
                                    <CheckboxGroup>
                                        <Checkbox value="mt4">MT4</Checkbox>
                                        <Checkbox value="mt5">MT5</Checkbox>
                                    </CheckboxGroup>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={9} push={1} className="form_item_tip">
                            用户注册提交的申请中可以勾选的交易工具
                        </Col>
                    </Row>
                    <Row>
                        <Col span={14}>
                            <FormItem {...formItemLayout} label="可选币种">
                                {getFieldDecorator("sys_account_currency", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "Please input your E-mail!"
                                        }
                                    ]
                                })(
                                    <CheckboxGroup>
                                        <Checkbox value="mt4">MT4</Checkbox>
                                        <Checkbox value="USD">USD</Checkbox>
                                        <Checkbox value="NZD">NZD</Checkbox>
                                        <Checkbox value="GBP">GBP</Checkbox>
                                        {/* <Checkbox value="CAD">CAD</Checkbox>
                                        <Checkbox value="EUR">EUR</Checkbox>
                                        <Checkbox value="SGD">SGD</Checkbox>
                                        <Checkbox value="AUD">AUD</Checkbox>
                                        <Checkbox value="JPY">JPY</Checkbox> */}
                                    </CheckboxGroup>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={9} push={1} className="form_item_tip">
                            用户注册提交的申请中可勾选的账号币种
                        </Col>
                    </Row>
                    <Row>
                        <Col span={14}>
                            <FormItem {...formItemLayout} label="可选账号类型">
                                {getFieldDecorator("sys_account_accounttype", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "Please input your E-mail!"
                                        }
                                    ]
                                })(
                                    <CheckboxGroup>
                                        <Checkbox value="STD">STD</Checkbox>
                                        <Checkbox value="ECN">ECN</Checkbox>
                                        <Checkbox value="VIP">VIP</Checkbox>
                                        <Checkbox value="低点差">
                                            低点差
                                        </Checkbox>
                                    </CheckboxGroup>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={9} push={1} className="form_item_tip">
                            用户注册提交的申请中可勾选的账户类型
                        </Col>
                    </Row>
                    <Row>
                        <Col span={14}>
                            <FormItem {...formItemLayout} label="协议文件">
                                {getFieldDecorator("sys_account_agreement", {
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
                                        {fileList.length > 0
                                            ? null
                                            : uploadButton}
                                    </Upload>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={9} push={1} className="form_item_tip">
                            显示在页面左上角（推荐尺寸：240*42
                            px[像素]，格式：jpg/png/bmp）
                        </Col>
                    </Row>
                    <FormItem wrapperCol={{ span: 12, offset: 11 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </FormItem>
                </Form>
            </Card>
        );
    }
}

const mapStateToProps = state => ({ currBrand: state.CurrBrand });
export default connect(mapStateToProps)(Form.create()(OpenAccountSetting));
