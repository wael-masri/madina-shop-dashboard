import {Axios} from "./Axios";

const SubCategoryApi = {
    create:    params => Axios.post(`/subCategories/`,params),
    getAllWithPopulate:    () => Axios.get('/subCategories/withPopulate'),
    getAll:    () => Axios.get('/subCategories/'),
    getOne:    id => Axios.get(`/subCategories/${id}`),
    update:    (id,params) => Axios.put(`/subCategories/${id}`,params),
    delete:    id => Axios.delete(`/subCategories/${id}`),
}

export default SubCategoryApi;