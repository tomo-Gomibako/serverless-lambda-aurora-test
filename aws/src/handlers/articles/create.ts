import { Request, Response } from 'express'

type Body = {
  title: string
  text: string
}

export default (req: Request, res: Response) => {
  const body = req.body as Body

  res.send('pong')
}
