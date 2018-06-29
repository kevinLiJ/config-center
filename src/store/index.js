import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./../reducers";

// 单分出文件来定义store
// 是为了能在组件外触发action
// 比如axios全局配置中，触发logout
export const store = createStore(
    reducers,
    applyMiddleware(thunk)
    // compose(
    //     applyMiddleware(thunk),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //         window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
);
