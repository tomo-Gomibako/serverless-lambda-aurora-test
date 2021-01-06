import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core'

export const migrate = async (db: MikroORM<IDatabaseDriver<Connection>>) => {
  console.log('migrating...')
  const migrator = db.getMigrator()
  await migrator.createMigration()
    .then((result) => {
      console.log(result)
    })
  await migrator.up()
  await db.close()
  console.log(`
    =================
    Database is ready
    =================
  `)
}
