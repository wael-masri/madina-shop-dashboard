import { Axios,AxiosFormData } from "./Axios";


const ProductApi = {
    create:    params => Axios.post(`/products/`,params),
    createImage:    (params) => AxiosFormData.post(`/products/uploadImage`,params),
    getAll:    () => Axios.get('/products/'),
    getOne:    id => Axios.get(`/products/${id}`),
    update:    (id,params) => Axios.put(`/products/${id}`,params),
    delete:    id => Axios.delete(`/products/${id}`),
}

export default ProductApi;