import { Request, Response } from 'express'

import getConnection from '../db/database'

const getAll = async (_req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    const response = await connection.query('SELECT * FROM products')
    return res.json(response[0])
  } catch (err: any) {
    return res.sendStatus(400).json({ message: 'Error de consulta ', err })
  }
}

const create = async (req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    await connection.query('INSERT INTO `products` SET ?', [req.body])
    return res.json({ message: 'Se añadió un nuevo producto' })
  } catch (err: any) {
    return res.sendStatus(400).json({ message: 'Error de consulta', err })
  }
}

const getEntry = async (req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    const entry = await connection.query('SELECT * FROM products WHERE 	idProducts = ?', [+req.params.id])
    return res.json(entry[0])
  } catch (err: any) {
    return res.sendStatus(400).json({ message: 'Ups, ocurrió un error', err })
  }
}

const deleteEntry = async (req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    await connection.query('DELETE FROM products WHERE 	idProducts = ?', [+req.params.id])
    return res.json({ message: `El elemento con id -> ${+req.params.id} fue eliminado` })
  }
  catch (err: any) {
    return res.sendStatus(400).json({ message: 'Ups, ocurrió un error', err })
  }
}

const updateEntry = async (req: Request, res: Response) => {
  try {
    const connection = await getConnection()
    const entryUpdated = req.body
    await connection.query('UPDATE products set ? WHERE idProducts = ?', [entryUpdated, +req.params.id])
    return res.json({ message: `El elemento con id -> ${+req.params.id} fue editado ` })
  }
  catch (err: any) {
    return res.sendStatus(400).json({ message: 'Ups, ocurrió un error', err })
  }
}

export default { getAll, create, getEntry, deleteEntry, updateEntry }