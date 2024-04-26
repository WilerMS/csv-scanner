import { PORT } from '@/constants/env'
import express from 'express'
import multer from 'multer'
import morgan from 'morgan'
import csvToJson from 'convert-csv-to-json'

import { errorHandler, errorMiddleware } from '@/middlewares'
import { InternalServerError } from '@/errors'

const storage = multer.memoryStorage()
const upload = multer({ storage })

const csvStorage: Record<number, any[]> = {}

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

    const jsonKey = new Date().getTime()

    csvStorage[jsonKey] = json

    return res.json({
      message: 'El archivo se cargó correctamente',
      data: {
        key: jsonKey,
        data: json
      }
    })
  })

)

app.get('/api/users', (req, res) => {
  res.send('HELLO WORLD')
})

// Error handling
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
