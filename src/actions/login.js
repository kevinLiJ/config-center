// import  from 'react-thunk'
import axios from "./../axios";
import { getToken } from "./../utils/userInfo";
import { clearBrand } from "./brand";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

/**
 * 验证是否登录
 */
export function VerificationLogin() {
    return (dispatch, getState) => {
        if (getToken()) {
            axios
                .post("/v1/auth/isLogin", { token: getToken() })
                .then(({ data }) => {
                    if (data.msg === "success") {
                        dispatch({
                            type: LOGIN,
                            accountInfo: data.data
                        });
                    } else {
                        dispatch({ type: LOGOUT });
                    }
                });
        } else {
            dispatch({ type: LOGOUT });
        }
    };
}

/**
 * 登录
 * @param {account, password, remember} loginData
 */
export function login(loginData) {
    return (dispatch, getState) => {
        axios.post("/v1/auth/login", loginData).then(({ data }) => {
            if (data.msg === "success") {
                dispatch({
                    type: LOGIN,
                    accountInfo: data.data
                });
            }
        });
    };
}
/**
 * 登出
 */
export function logout() {
    return (dispatch, getState) => {
        // 用户名
        const accountName = getState().LoginInfo.account;
        axios
            .post("/v1/auth/logout", { account: accountName })
            .then(({ data }) => {
                if (data.msg === "success") {
                    // 登出
                    dispatch({
                        type: LOGOUT
                    });
                    // 清空品牌信息
                    dispatch({
                        type: clearBrand
                    });
                }
            });
    };
}
