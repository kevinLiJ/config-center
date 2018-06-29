import axios from "./../axios";
// 获取品牌列表
export function getBrandlist() {
    return (dispatch, getState) => {
        axios.post("/v1/brand/list").then(resp => {
            if (resp.data.msg === "success") {
                const brandlist = resp.data.data.brandList;
                // 更新品牌列表
                dispatch({
                    type: "GET_BRAND_LIST",
                    brandList: brandlist
                });
                // 并更新当前品牌
                dispatch(changeCurrBrand(brandlist[0].name));
            }
        });
    };
}
// 更改当前品牌
export function changeCurrBrand(brand) {
    return {
        type: "CHANGE_CURR_BRAND",
        brand: brand
    };
}

// 清空品牌
export function clearBrand(brand) {
    return {
        type: "CLEAR_BRAND"
    };
}
