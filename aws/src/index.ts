import * as express from 'express'
import * as cors from 'cors'
import * as serverless from 'serverless-http'
import * as bodyParser from 'body-parser'

import ping from '@/handlers/ping'

const app: express.Application = express()

app.use(bodyParser.json({ strict: false }))
app.use(cors())

app.get('/ping', ping)

export const handler = serverless(app)
