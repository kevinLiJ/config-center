import React, { Component } from "react";

import CommonHeader from "./../../common/header";
import CommonSider from "./../../common/sider";
import HomeRoute from "./route";
import { Layout } from "antd";

const { Content } = Layout;
class Home extends Component {
    render() {
        return (
            <Layout
                style={{
                    minWidth: "1366px",
                    overflowX: "auto",
                    overflowY: "hidden"
                }}
            >
                <CommonHeader />
                <Layout style={{ height: "calc(100vh - 64px)" }}>
                    <CommonSider />
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Content
                            style={{
                                marginTop: 24
                            }}
                        >
                            <HomeRoute />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default Home;
