import {Axios} from "./Axios";

const AuthApi = {
    signin:         params => Axios.post(`/auth/login`,params),
    verifyToken:    () => Axios.post('/auth/verifyToken'),
    forgetPassword: params => Axios.post(`/auth/forgotPassword`,params),
    verifyPassword: params => Axios.post(`/auth/verifyPassword`,params),
    resetPassword:  params => Axios.post(`/auth/resetPassword`,params),
}

export default AuthApi;