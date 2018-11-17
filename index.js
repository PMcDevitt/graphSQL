import express from 'express'
import expressGraphQL from 'express-graphql'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import schema from './graphql/'

dotenv.config()

const app = express()
const PORT = process.env.PORT || '4000'
const USER = process.env.mongoUser
const PASS = process.env.mongoPass
const DB = process.env.mongoDB
const db = `mongodb://${USER}:${PASS}@${DB}`

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
