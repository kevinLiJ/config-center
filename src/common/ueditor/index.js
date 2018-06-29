import React, { Component } from "react";
class Ueditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ue: null
        };
    }
    componentDidMount() {
        this.setState({
            ue: window.UE.getEditor(this.props.id)
        });
    }
    componentWillUnmount() {
        window.UE.delEditor(this.props.id);
    }
    // 获取文本
    getContentTxt = () => {
        return this.state.ue.getContentTxt();
    };
    // 获取html
    getContent = () => {
        return this.state.ue.getContent();
    };
    render() {
        return (
            <div>
                <script
                    id={this.props.id}
                    type="text/plain"
                    style={{ width: "100%", height: "200px" }}
                />
            </div>
        );
    }
}

export default Ueditor;
