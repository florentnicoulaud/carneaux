import * as dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import { validationErrorHandler } from './middleware/error-handler'
import express from 'express'
import routes from './api/routes'
import dbInit from './db/init'

// App Variables
dotenv.config()
const PORT = process.env.PORT ?? 7777

// db init
dbInit()

// App Configuration
const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())

// routes
app.use('/api/v1', routes)

// error handlers
app.use(validationErrorHandler)

// Server Activation
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
