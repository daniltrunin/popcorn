export default function getUserFromLocalStorage() {
    const userStr = localStorage.getItem("userData");
    const userStr2 = JSON.parse(userStr);
    const userJSON = JSON.parse(userStr2);
    const user = {
        username: userJSON.username,
        password: userJSON.password,
    };
    return user
}