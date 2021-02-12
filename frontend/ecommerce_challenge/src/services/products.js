import { http } from './axiosConfig'

export default {
  findAll: () => {
    return http.get(`products`)
  },
  findOne: id => {
    return http.get(`products/${id}`)
  },
  create: body => {
    return http.post(`products`, body)
  },
  update: body => {
    return http.put(`products`, body)
  },
  delete: id => {
    return http.delete(`products/${id}`)
  }
}