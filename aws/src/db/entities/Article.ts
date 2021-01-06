import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
class Article {
  @PrimaryKey()
  id!: number

  @Property()
  createdAt = new Date()

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date()

  @Property()
  title!: string

  constructor (title: string) {
    this.title = title
  }
}

export default Article
