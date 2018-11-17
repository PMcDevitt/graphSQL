import express from 'express'
import expressGraphQL from 'express-graphql'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
const dotenv = require('dotenv')
dotenv.config()

import schema from './graphql/'

const app = express()
const PORT = process.env.PORT || '4000'
const USER = process.env.mongoUser
const PASS = process.env.mongoPass

const db = `mongodb://${USER}:${PASS}@ds135917.mlab.com:35917/pmcde_mongodb`

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    db,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

