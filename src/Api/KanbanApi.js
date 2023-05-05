import {Axios} from "./Axios";

const kanbanApi = {
    create:    params => Axios.post(`/kanbans/`,params),
    getAll:    () => Axios.get('/kanbans/'),
    getOne:    id => Axios.get(`/kanbans/${id}`),
    update:    (params) => Axios.put(`/kanbans/`,params),
    delete:    id => Axios.delete(`/kanbans/${id}`),
}

export default kanbanApi;