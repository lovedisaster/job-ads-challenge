export const Login = (userName) => {
    return new Promise((res, rej) => {
        res(["SB", "ACR", "MY"].includes(userName));
        rej(new Error("Log in error"));
    })
}