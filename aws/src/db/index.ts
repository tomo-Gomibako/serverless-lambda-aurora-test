import { resolve } from 'path'
import { Sequelize } from 'sequelize'
import { config } from 'dotenv'
import * as models from '@/src/db/models'

const envFilePath = process.env.NODE_ENV === 'production'
  ? '../../../../.env'
  : '../../../../../mysql/.env'
config({
  path: resolve(__dirname, envFilePath)
})

if (!process.env.DATABASE_NAME) {
  throw new Error('database name is not set')
}

const host = process.env.NODE_ENV === 'production'
  ? ''
  : 'db:3306'

const sequelize = new Sequelize({
  host,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  dialect: 'mysql'
})

export default sequelize

export const Article = models.Article
