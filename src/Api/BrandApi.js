import {Axios,AxiosFormData} from "./Axios";

const BrandApi = {
    create:    params => Axios.post(`/brands/`,params),
    createImage:    (params) => AxiosFormData.post(`/brands/uploadImage`,params),
    getAll:    () => Axios.get('/brands/'),
    getOne:    id => Axios.get(`/brands/${id}`),
    update:    (id,params) => Axios.put(`/brands/${id}`,params),
    delete:    id => Axios.delete(`/brands/${id}`),
}

export default BrandApi;