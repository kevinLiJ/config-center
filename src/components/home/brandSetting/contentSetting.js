import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "./../../../axios";
// import "./index.less";
import Ueditor from "./../../../common/ueditor";
import { Form, Col, Row, Button } from "antd";
const FormItem = Form.Item;

class ContentSetting extends Component {
    constructor() {
        super();
        this.state = {};
    }
    handleSubmit = e => {
        e.preventDefault();

        axios
            .post("/v1/config/content_setting", {
                type: "content",
                brand: this.props.currBrand,
                "sys_trader_foot.html": this.foot.getContent(),
                "sys_trader_navstyle.css": this.navStyle.getContent(),
                "sys_trader_company.html": this.firm.getContent(),
                "sys_trader_downloadinfo.html": this.tradingTool.getContent()
            })
            .then(resp => {
                console.log(resp);
            });
    };
    render() {
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

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={16}>
                        <FormItem {...formItemLayout} label="trader登录页foot">
                            <Ueditor
                                id="1"
                                ref={editor => {
                                    this.foot = editor;
                                }}
                            />
                        </FormItem>
                    </Col>
                    <Col span={7} push={1} className="form_item_tip">
                        显示在页面左上角（推荐尺寸：240*42
                        px[像素]，格式：jpg/png/bmp）
                    </Col>
                </Row>
                <Row>
                    <Col span={16}>
                        <FormItem {...formItemLayout} label="公司信息">
                            <Ueditor
                                id="2"
                                ref={editor => {
                                    this.firm = editor;
                                }}
                            />
                        </FormItem>
                    </Col>
                    <Col span={7} push={1} className="form_item_tip">
                        登陆后，交易工具页面，富文本框，可以编辑html代码
                    </Col>
                </Row>
                <Row>
                    <Col span={16}>
                        <FormItem {...formItemLayout} label="导航样式">
                            <Ueditor
                                id="3"
                                ref={editor => {
                                    this.navStyle = editor;
                                }}
                            />
                        </FormItem>
                    </Col>
                    <Col span={7} push={1} className="form_item_tip">
                        显示在页面左上角（推荐尺寸：240*42
                        px[像素]，格式：jpg/png/bmp）
                    </Col>
                </Row>
                <Row>
                    <Col span={16}>
                        <FormItem {...formItemLayout} label="交易工具页面">
                            <Ueditor
                                id="4"
                                ref={editor => {
                                    this.tradingTool = editor;
                                }}
                            />
                        </FormItem>
                    </Col>
                    <Col span={7} push={1} className="form_item_tip">
                        登陆后，交易工具页面，富文本框，可以编辑html代码
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
export default connect(mapStateToProps)(Form.create()(ContentSetting));
