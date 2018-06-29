import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Layout, Select, Row, Col, Button, Avatar } from "antd";

import { logout } from "./../../actions/login";
import { changeCurrBrand, getBrandlist } from "./../../actions/brand";

import AddBrand from "./addBrand";
const { Header } = Layout;
const { Option } = Select;
class CommonHeader extends Component {
    componentWillMount() {
        this.props.getBrandlist();
    }
    render() {
        return (
            <Header className="header" style={{ height: "64px" }}>
                <Row>
                    <Col span={4}>
                        <div
                            style={{
                                width: "100px",
                                display: "inline-block",
                                marginRight: "16px"
                            }}
                        >
                            {/* 等redux有了currBrand值再渲染
                            解决Select defaultValue属性问题 */}
                            {this.props.currBrand === "" ? null : (
                                <Select
                                    style={{ width: "100%" }}
                                    defaultValue={this.props.currBrand}
                                    onSelect={value =>
                                        this.props.changeCurrBrand(value)
                                    }
                                >
                                    {this.props.brandList.map(brand => (
                                        <Option key={brand.name}>
                                            {brand.name}
                                        </Option>
                                    ))}
                                </Select>
                            )}
                        </div>
                        <AddBrand />
                    </Col>
                    <Col span={2} push={18}>
                        <Avatar
                            style={{
                                verticalAlign: "middle"
                            }}
                            size="large"
                        >
                            {this.props.loginInfo.account}
                        </Avatar>
                        <Button
                            style={{ marginLeft: "16px" }}
                            size="small"
                            ghost
                            onClick={() => {
                                this.props.logout();
                            }}
                        >
                            登出
                        </Button>
                    </Col>
                </Row>
            </Header>
        );
    }
}
function mapstateToProps(state) {
    return {
        brandList: state.BrandList,
        currBrand: state.CurrBrand,
        loginInfo: state.LoginInfo
    };
}
function mapDispatchToProps(dispatch) {
    return {
        logout: bindActionCreators(logout, dispatch),
        changeCurrBrand: bindActionCreators(changeCurrBrand, dispatch),
        getBrandlist: bindActionCreators(getBrandlist, dispatch)
    };
}

export default connect(mapstateToProps, mapDispatchToProps)(CommonHeader);
