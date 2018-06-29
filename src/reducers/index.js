import { combineReducers } from "redux";
import LoginInfo from "./login";
import { BrandList, CurrBrand } from "./brand";

export default combineReducers({
    LoginInfo,
    BrandList,
    CurrBrand
});
