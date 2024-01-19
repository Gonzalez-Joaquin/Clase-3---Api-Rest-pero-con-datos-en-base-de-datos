import { Request, Response } from 'express'

import getConnection from '../db/database'

// import { Categories } from '../models/categories.models'

// import categories from '../mocks/categories.data.json'
// const AllCategories: Array<Categories> = categories

const getAll = async (_req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    const response = await connection.query('SELECT * FROM categories')

    return res.json(response[0])
  } catch (err: any) {
    return res.sendStatus(400).json({ message: 'Ups, algo falló', err })
  }
}

const newCategory = async (req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    await connection.query('INSERT INTO `categories` SET ?', [req.body])

    return res.json({ message: 'Nueva categoría agregada' })
  } catch (err: any) {
    return res.sendStatus(400).json({ message: 'Ups, ocurrió un error', err })
  }
}

export default { getAll, newCategory }
