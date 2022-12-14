import * as typeDal from '../../dal/type'
import Type, {TypeInput} from '../../models/Type'

export const create = (payload: TypeInput): Promise<Type> => {
  return typeDal.create(payload)
}
export const update = (id: number, payload: Partial<TypeInput>): Promise<Type> => {
  return typeDal.update(id, payload)
}
export const getById = (id: number): Promise<Type> => {
  return typeDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
  return typeDal.deleteById(id)
}
export const getAll = (): Promise<Type[]> => {
  return typeDal.getAll()
}