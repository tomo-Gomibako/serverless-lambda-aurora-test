import express from 'express'
import cors from 'cors'
import serverless from 'serverless-http'
import bodyParser from 'body-parser'

import ping from '@/handlers/ping'

const app: express.Application = express()

app.use(bodyParser.json({ strict: false }))
app.use(cors())

app.get('/ping', ping)

export const handler = serverless(app)
