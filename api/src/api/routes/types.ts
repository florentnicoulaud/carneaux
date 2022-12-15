import { Request, Response, Router } from 'express'
import * as typeController from '../controllers/types'
import Type from '../../db/models/Type'

const typesRouter = Router()

typesRouter.get(':/id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const result = await typeController.getById(id)
  return res.status(200).send(result)
})
typesRouter.put('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const payload: Type = req.body

  const result = await typeController.update(id, payload)
  return res.status(201).send(result)
})
typesRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const result = await typeController.deleteById(id)
  return res.status(204).send({
    success: result
  })
})
typesRouter.post('/', async (req: Request, res: Response) => {
  const payload: Type = req.body
  const result = await typeController.create(payload)
  return res.status(200).send(result)
})
typesRouter.get('/', async (req: Request, res: Response) => {
  const results = await typeController.getAll()
  return res.status(200).send(results)
})

export default typesRouter
