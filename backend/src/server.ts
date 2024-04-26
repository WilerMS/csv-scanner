import { PORT } from '@/constants/env'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('HELLO WORLD')
})

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
