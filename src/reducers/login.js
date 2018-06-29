import { saveToken, removeToken } from "./../utils/userInfo";

export default function(state = { status: null }, action) {
    switch (action.type) {
        case "LOGIN":
            saveToken(action.accountInfo.token);
            return Object.assign({}, state, {
                ...action.accountInfo,
                status: true
            });

        case "LOGOUT":
            removeToken();
            return { status: false };

        case "TO_LOGIN_PAGE":
            return { status: false };

        default:
            return state;
    }
}
