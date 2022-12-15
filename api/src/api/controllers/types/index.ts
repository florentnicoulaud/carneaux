import * as service from '../../../db/services/type'
import Type from '../../../db/models/Type'

export const create = async (payload: Type): Promise<Type> => {
  return await service.create(payload)
}
export const update = async (id: number, payload: Type): Promise<Type> => {
  return await service.update(id, payload)
}
export const getById = async (id: number): Promise<Type> => {
  return await service.getById(id)
}
export const deleteById = async (id: number): Promise<boolean> => {
  return await service.deleteById(id)
}
export const getAll = async (): Promise<Type[]> => {
  return await service.getAll()
}
