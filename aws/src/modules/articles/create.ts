import { Article } from '@/src/db'

export default async (title: string, text: string) => {
  const article = await Article.create({
    title,
    text
  })
  article.get()
}
