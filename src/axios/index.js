import axios from "axios";
import { logout } from "./../actions/login";
import { store } from "./../store";
import { message } from "antd";

// 全局ajax拦截，
axios.interceptors.response.use(
    function(resp) {
        // 是否登录
        const isLogin = store.getState().LoginInfo.status;
        if (resp.data.code === "1002" && isLogin) {
            // 接口返回code为1002 && 登录情况下
            // 会话超时 ===> 登出
            store.dispatch(logout());
        } else if (resp.data.msg === "error") {
            // 全局接口失败提示
            message.error("操作失败");
        }
        return resp;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default axios;
