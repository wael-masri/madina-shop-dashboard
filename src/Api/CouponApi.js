import {Axios} from "./Axios";

const CouponApi = {
    create:    params => Axios.post(`/coupons/`,params),
    getAll:    () => Axios.get('/coupons/'),
    getOne:    id => Axios.get(`/coupons/${id}`),
    update:    (id,params) => Axios.put(`/coupons/${id}`,params),
    delete:    id => Axios.delete(`/coupons/${id}`),
}

export default CouponApi;