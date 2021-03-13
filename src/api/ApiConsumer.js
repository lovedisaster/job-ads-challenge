export const Login = (clients, userName) => {
    return new Promise((res, rej) => {
        res(clients.includes(userName));
        rej(new Error("Log in error"));
    })
}