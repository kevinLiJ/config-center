import React, { PureComponent } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
class CommonSider extends PureComponent {
    constructor() {
        super();
        this.state = {
            routerList: [
                "/",
                "/baseInfo",
                "/brandSetting",
                "/openAccountSetting"
            ],
            defaultSelectedKey: ["0"]
        };
    }
    componentWillMount() {
        // 页面刷新后，更新导航active的位置
        const currentPath = this.props.location.pathname;
        this.state.routerList.map((val, idx) => {
            if (val === currentPath) {
                this.setState({ defaultSelectedKey: [idx.toString()] });
            }
            return true;
        });
    }
    render() {
        return (
            <Sider width={200} style={{ background: "#fff" }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={this.state.defaultSelectedKey}
                    style={{ height: "100%", borderRight: 0 }}
                >
                    <Menu.Item key="0">
                        <NavLink to="/" exact>
                            控制台
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <NavLink to="/baseInfo">基础信息</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/brandSetting">品牌设置</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to="/openAccountSetting">开户设置</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default withRouter(CommonSider);
