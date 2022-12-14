import Type, {TypeInput} from '../models/Type'

export const create = async (payload: TypeInput): Promise<Type> => {
  return await Type.create(payload)
}

export const update = async (id: number, payload: Partial<TypeInput>): Promise<Type> => {
  const type = await Type.findByPk(id)
  if (!type) {
    // @todo throw custom error
    throw new Error('not found')
  }
  return await (type as Type).update(payload)
}

export const getById = async (id: number): Promise<Type> => {
  const type = await Type.findByPk(id)
  if (!type) {
    // @todo throw custom error
    throw new Error('not found')
  }
  return type
}

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedTypeCount = await Type.destroy({
    where: {id}
  })
  return !!deletedTypeCount
}

export const getAll = async (): Promise<Type[]> => {
  return Type.findAll()
}
