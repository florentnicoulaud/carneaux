import * as typeDal from '../dal/type'
import Type from '../models/Type'

export const create = async (payload: Type): Promise<Type> => {
  return await typeDal.create(payload)
}
export const update = async (id: number, payload: Partial<Type>): Promise<Type> => {
  return await typeDal.update(id, payload)
}
export const getById = async (id: number): Promise<Type> => {
  return await typeDal.getById(id)
}
export const deleteById = async (id: number): Promise<boolean> => {
  return await typeDal.deleteById(id)
}
export const getAll = async (): Promise<Type[]> => {
  return await typeDal.getAll()
}
