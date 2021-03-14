import axios from "axios"

export const Login = (userName) => {
    return axios.get(`/api/login/${userName}`);
}

export const GetRules = (userName) => {
    return axios.get(`/api/rules/${userName}`);
}