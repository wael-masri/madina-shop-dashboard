import { Axios,AxiosFormData } from "./Axios";

const CategoryApi = {
  create: (params) => Axios.post(`/categories/`, params),
  createImage:    (params) => AxiosFormData.post(`/categories/uploadImage`,params),
  getAll: () => Axios.get("/categories/"),
  getOne: (id) => Axios.get(`/categories/${id}`),
  update: (id, params) => Axios.put(`/categories/${id}`, params),
  delete: (id) => Axios.delete(`/categories/${id}`),
  getByCategory: (id) => Axios.get(`/categories/${id}/subCategories`),
};

export default CategoryApi;
