import { Axios,AxiosFormData } from "./Axios";


const UserApi = {
    create:    params => Axios.post(`/users/`,params),
    getAll:    () => Axios.get('/users/'),
    getOne:    id => Axios.get(`/users/${id}`),
    update:    (id,params) => Axios.put(`/users/${id}`,params),
    updateImage:    (params) => AxiosFormData.post(`/users/uploadImage`,params),
    delete:    id => Axios.delete(`/users/${id}`),
}

export default UserApi;