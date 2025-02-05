class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

function registerUser(username, password) {
    const user = new User(username, password)
    console.log(user)
}

function loginUser(username, password) {
    const user = {
        username: username,
        password: password
    }
    console.log(user)
}

export default function sendDataToAuth(username, password, type) {
    if (!username || !password) {
        alert("Username and password are required!");
        return;
    }

    if (type === "login") {
        loginUser(username, password)
    }
    if (type === "reg") {
        registerUser(username, password)
    }
}