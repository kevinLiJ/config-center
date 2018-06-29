import React, { Component } from "react";
import { connect } from "react-redux";
// import "./index.less";
import axios from "./../../../axios";
import {
    Form,
    Input,
    Select,
    Col,
    Row,
    Upload,
    Button,
    Icon,
    Card
} from "antd";
const FormItem = Form.Item;
const Option = Select.Option;

class BaseInfo extends Component {
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
    componentWillMount() {
        console.log(111);
        this.props.form.setFields({
            logoPath: []
        });
    }
    normFile = e => {
        // console.log("Upload event:", e);
        // if (Array.isArray(e)) {
        //     return e[0].url;
        // }
        // return e && e.fileList;
        console.log(e);
        if (e.fileList.length > 0) {
            console.log(e.fileList[0].name);
            return [
                {
                    uid: -1,
                    name: e.fileList[0].name,
                    status: "done",
                    url:
                        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                }
            ];
        }
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.form.setFields({
                    logoPath: {
                        value: values.logoPath[0].response.data
                    },
                    iconPath: {
                        value: values.iconPath[0].response.data
                    }
                });
                // console.log(values);
                axios
                    .post("/v1/config/brand", {
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
        const handleChange = ({ fileList }) => {
            this.setState({ fileList });
        };
        // console.log(this.props.form.getFieldValue("logoPath"));
        return (
            <Card title="基础信息" type="inner" className="main_card">
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col span={16}>
                            {this.props.currBrand}
                            <FormItem {...formItemLayout} label="有效期">
                                {getFieldDecorator("expirydate", {
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
                            项目只能在有效期到达前使用，精确到天
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16}>
                            <FormItem {...formItemLayout} label="品牌名">
                                {getFieldDecorator("brand", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "Please input your E-mail!"
                                        }
                                    ]
                                })(<Input type="text" name="" />)}
                            </FormItem>
                        </Col>
                        <Col span={7} push={1} className="form_item_tip">
                            品牌名称
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16}>
                            <FormItem {...formItemLayout} label="站点名称">
                                {getFieldDecorator("siteName", {
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
                            浏览器标签上显示的品牌名称
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16}>
                            <FormItem
                                {...formItemLayout}
                                label="(admin)品牌Logo"
                            >
                                {getFieldDecorator("logoPath", {
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
                                        action="/v1/upload"
                                        listType="picture-card"
                                        // data={{ brand: this.props.currBrand }}
                                        data={{ brand: "AU" }}
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
                        <Col span={7} push={1} className="form_item_tip">
                            显示在页面左上角（推荐尺寸：240*42
                            px[像素]，格式：jpg/png/bmp）
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col span={16}>
                            <FormItem
                                {...formItemLayout}
                                label="(admin)品牌icon"
                            >
                                {getFieldDecorator("iconPath", {
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
                                        action="/v1/upload"
                                        listType="picture-card"
                                        // data={{ brand: this.props.currBrand }}
                                        data={{ brand: "AU" }}
                                        defaultFileList={fileList}
                                        onChange={handleChange}
                                    >
                                        {this.props.form.getFieldValue(
                                            "iconPath"
                                        ).length.length > 0
                                            ? null
                                            : uploadButton}
                                    </Upload>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={7} push={1} className="form_item_tip">
                            浏览器标签上的站点图标（尺寸：32*32，格式：推荐jpeg、png）
                        </Col>
                    </Row> */}
                    <Row>
                        <Col span={16}>
                            <FormItem
                                {...formItemLayout}
                                label="(admin)登录页背景颜色"
                            >
                                {getFieldDecorator("bgcolor", {
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
                            背景主题色
                        </Col>
                    </Row>{" "}
                    <Row>
                        <Col span={16}>
                            <FormItem
                                {...formItemLayout}
                                label="(admin)登录页背景图片"
                            >
                                {getFieldDecorator("loginBackgroundPath", {
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
                            背景图片
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16}>
                            <FormItem
                                {...formItemLayout}
                                label="(admin)系统访问地址"
                            >
                                {getFieldDecorator("bindDomain", {
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
                            <FormItem {...formItemLayout} label="交易平台">
                                {getFieldDecorator("tradetype", {
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
                            系统支持的交易平台
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16}>
                            <FormItem {...formItemLayout} label="支持国家">
                                {getFieldDecorator("nations", {
                                    initialValue: "a10",
                                    rules: [
                                        {
                                            required: true,
                                            message: "Please input your E-mail!"
                                        }
                                    ]
                                })(
                                    <Select
                                        mode="multiple"
                                        placeholder="Please select"
                                    >
                                        <Option key="a10">1</Option>
                                        <Option key="b10">b10</Option>
                                        <Option key="c10">c10</Option>
                                        <Option key="d10">d10</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={7} push={1} className="form_item_tip">
                            系统支持的国家
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
export default connect(mapStateToProps)(Form.create()(BaseInfo));
