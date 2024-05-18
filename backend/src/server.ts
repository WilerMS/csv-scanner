import { PORT } from '@/constants/env'
import express from 'express'
import morgan from 'morgan'

import { errorMiddleware } from '@/middlewares'
import csvRouter from '@/api/csv'

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

//* API ROUTES
app.use('/api', csvRouter)

// Error handling
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
