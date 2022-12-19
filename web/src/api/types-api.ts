import Type from "@/models/Type";
import axios from "axios";

const baseUrl = `http://localhost:7777/api/v1/types`
export const api = {
  async getTypes() {
    return (await axios.get<Type[]>(baseUrl)).data
  },

  async updateType(id: number, data: Partial<Type>) {
    return axios.put<Type>(baseUrl + `/types/${id}`, {data})
  },

  async getType(id: number) {
    return axios.get<Type>(baseUrl + `/types/${id}`)
  },

  async createType(data: Omit<Type, 'id'>) {
    return axios.post<Type>(baseUrl + `/types`, {data})
  },

  async deleteType(id: number) {
    return axios.delete<void>(baseUrl + `/types/${id}`)
  }
}