import React, { Component } from "react";
import { Card, Icon, Button } from "antd";
import "./index.less";
class Console extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Card title="控制台" type="inner" className="main_card console">
                <div className="title">
                    <div className="vertical_line" />
                    <div className="title_info">基本信息</div>
                </div>
                <div className="base_info">
                    <ul>
                        <li>
                            <label>访问地址：</label>
                        </li>
                        <li>
                            <label className="space_label" />
                            ●{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://tad5e2qz.tw.lwork.com"
                            >
                                tad5e2qz.tw.lwork.com
                            </a>
                            （系统默认）
                        </li>
                        <li>
                            <label className="space_label" />
                            ●{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://trader.lwork.com"
                            >
                                trader.lwork.com
                            </a>
                            （自定义）
                        </li>
                        <li>
                            <label>产品版本：</label>
                            线上 Demo 版
                        </li>
                        <li>
                            <label>功能模块：</label>
                            <div>
                                <label className="space_label" />
                                用户管理、账户管理-MT4、账户管理-MT5、Trader
                                Work API、直播投教、移动端兼容、账户管理-CTRADER
                            </div>
                        </li>
                        <li>
                            <label>基础用户数：</label>
                            100
                        </li>
                        <li>
                            <label>MT manage已使用数：</label>
                            4
                        </li>
                        <li>
                            <label className="space_label" />
                            <label>● Mt4 ：</label>
                            Demo 1台，live2台
                        </li>
                        <li>
                            <label className="space_label" />
                            <label>● Mt4 ：</label>
                            Demo 1台，live2台
                        </li>
                        <li>
                            <label>创建时间：</label>
                            2017-01-16 00:00:00
                        </li>
                        <li>
                            <label>到期时间：</label>
                            2018-04-16 23:59:59
                        </li>
                        <li>
                            <label>租户编号：</label>
                            T001160
                        </li>
                        <li>
                            <label>
                                API &nbsp;KEY{" "}
                                <Icon title="用于API验签" type="info-circle" />{" "}
                                ：
                            </label>
                            Qc1mtdMtnWXP1Mwo &nbsp;&nbsp;<Button
                                size="small"
                                type="primary"
                                ghost
                            >
                                重置
                            </Button>
                        </li>
                        <li>
                            <label>租户公钥</label>
                            最近更新时间&nbsp;&nbsp; 2017-09-05 15:02:50
                            &nbsp;&nbsp;<Button
                                ghost
                                type="primary"
                                size="small"
                            >
                                更新公钥
                            </Button>
                        </li>
                    </ul>
                </div>
            </Card>
        );
    }
}

export default Console;
