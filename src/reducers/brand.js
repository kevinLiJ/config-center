// 品牌列表
export function BrandList(state = [], action) {
    switch (action.type) {
        case "GET_BRAND_LIST":
            return action.brandList;
        case "CLEAR_BRAND":
            return [];
        default:
            return state;
    }
}
// 当前品牌
export function CurrBrand(state = "", action) {
    switch (action.type) {
        case "CHANGE_CURR_BRAND":
            return action.brand;
        case "CLEAR_BRAND":
            return "";
        default:
            return state;
    }
}
