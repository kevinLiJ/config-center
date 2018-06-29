export function saveToken(token) {
    window.sessionStorage.setItem("token", token);
}

export function getToken(token) {
    return window.sessionStorage.getItem("token");
}

export function removeToken(token) {
    return window.sessionStorage.removeItem("token");
}
