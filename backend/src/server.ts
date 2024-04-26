import { PORT } from '@/constants/env'
import express, { type Request } from 'express'
import multer from 'multer'
import morgan from 'morgan'
import csvToJson from 'convert-csv-to-json'

import { errorHandler, errorMiddleware } from '@/middlewares'
import { InternalServerError } from '@/errors'

const storage = multer.memoryStorage()
const upload = multer({ storage })

let csvStorage: Array<Record<any, any>> = []

const app = express()

app.use(morgan('dev'))

app.post(
  '/api/files',
  upload.single('file'),
  errorHandler((req, res) => {
    const { file } = req

    if (!file || file.mimetype !== 'text/csv') {
      throw new InternalServerError('Debes proporcionar un archivo csv.')
    }

    const csv = Buffer.from(file.buffer).toString('utf-8')
    const json = csvToJson.fieldDelimiter(',').csvStringToJson(csv)

    csvStorage = json

    return res.json({
      message: 'El archivo se cargó correctamente',
      data: json
    })
  })

)

type RequestWithQueryParams = Request<Record<any, any>, any, any, { q: string }, Record<string, any>>

app.get('/api/users', (req: RequestWithQueryParams, res) => {
  const { q } = req.query

  if (!q) return res.json({ data: csvStorage })

  const data = csvStorage
    .filter((obj) => {
      return Object.values(obj).some(val => (
        val.toLowerCase().includes(q.toLowerCase())
      ))
    })

  return res.json({ data })
})

// Error handling
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
