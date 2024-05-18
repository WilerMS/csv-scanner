import { Router } from 'express'
import multer from 'multer'
import csvToJson from 'convert-csv-to-json'

import { errorHandler } from '@/middlewares'
import { BadRequestError, InternalServerError } from '@/errors'

type CsvStorageType = Record<string, Array<Record<any, any>>>

const router = Router()
const upload = multer({ storage: multer.memoryStorage() })

const csvStorage: CsvStorageType = {}

router.post('/csv',
  upload.single('file'),
  errorHandler((req, res) => {
    const { file } = req
    const { fileId } = req.body

    if (!fileId) throw new InternalServerError('Debes proporcionar un fileId')
    if (!file || file.mimetype !== 'text/csv') {
      throw new InternalServerError('Debes proporcionar un archivo csv.')
    }

    const csv = Buffer.from(file.buffer).toString('utf-8')
    const json = csvToJson.fieldDelimiter(',').csvStringToJson(csv)

    csvStorage[fileId] = json

    return res.json({
      message: 'El archivo se cargó correctamente',
      data: json
    })
  })
)

interface QueryParams {
  q: string
  fileId: string
}

router.get('/csv', errorHandler((req, res) => {
  const { q, fileId } = req.query as unknown as QueryParams

  if (!fileId) throw new BadRequestError('Por favor, indique un csv (fileId) o suba uno.')
  if (!csvStorage[fileId]) throw new BadRequestError('El archivo ya no existe, vuelva a subirlo')

  if (!q) return res.json({ data: csvStorage })

  const data = csvStorage[fileId]
    .filter((obj) => {
      return Object.values(obj).some(val => (
        val.toLowerCase().includes(q.toLowerCase())
      ))
    })

  return res.json({ data })
}))

export default router
