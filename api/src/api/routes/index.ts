import 'express-async-errors'
import { Router } from 'express'
import typesRouter from './types'

const router = Router()

router.use('/types', typesRouter)

export default router
