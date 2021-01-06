import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core'

import { Article } from '@/db/entities'
import { migrate } from '@/db/migrate'

const database = process.env.DATABASE_NAME
const username = process.env.DATABASE_USER
const password = process.env.DATABASE_PASSWORD

const host = process.env.NODE_ENV === 'production'
  ? ''
  : 'db'

if (!database) {
  throw new Error('database name is not provided')
}

let orm: MikroORM<IDatabaseDriver<Connection>> | undefined

export const getDB = async () => {
  if (!orm) {
    orm = await MikroORM.init({
      entities: [Article],
      dbName: database,
      user: username,
      password: password,
      host,
      type: 'mysql'
    })
  }
  return orm
}

export const init = async () => {
  const db = await getDB()
  await migrate(db)
}

export const connect = async () => {
  const db = await getDB()
  await db.em.find(Article, {})
    .then(console.log).catch((err: Error) => {
      console.error(err.message)
    })
}
