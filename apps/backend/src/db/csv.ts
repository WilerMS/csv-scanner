import { Schema, model, connect } from 'mongoose'

const csvSchema = new Schema({
  data: { type: Schema.Types.Mixed, required: true }
})

export const CsvModel = model('CsvModel', csvSchema)
