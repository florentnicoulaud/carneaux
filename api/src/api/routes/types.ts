import { Request, Response, Router } from 'express'
import * as typeDal from '../../db/dal/type'
import Type from '../../db/models/Type'
import { typeValidator } from '../validation/type'

const typesRouter = Router()

typesRouter.get(':/id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const result = await typeDal.getById(id)
  return res.status(200).send(result)
})
typesRouter.put('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const payload: Type = req.body

  const result = await typeDal.update(id, payload)
  return res.status(201).send(result)
})
typesRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const result = await typeDal.deleteById(id)
  return res.status(204).send({
    success: result
  })
})
typesRouter.post('/', async (req: Request, res: Response) => {
  const payload: Type = req.body
  const validationResult = typeValidator.validate(payload)
  if (validationResult.error != null) {
    throw validationResult.error
  }
  const result = await typeDal.create(payload)
  return res.status(200).send(result)
})
typesRouter.get('/', async (req: Request, res: Response) => {
  const results = await typeDal.getAll()
  return res.status(200).send(results)
})

export default typesRouter
