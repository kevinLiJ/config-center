import React, { Component } from "react";
import ContentSetting from "./contentSetting.js";
import PersonalizedSetting from "./personalizedSetting.js";
import { Tabs, Card } from "antd";
const TabPane = Tabs.TabPane;

class BrandSetting extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Card title="品牌设置" type="inner" className="main_card">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="kv setting" key="1">
                        <PersonalizedSetting />
                    </TabPane>
                    <TabPane tab="content setting" key="2">
                        <ContentSetting />
                    </TabPane>
                </Tabs>
            </Card>
        );
    }
}

export default BrandSetting;
