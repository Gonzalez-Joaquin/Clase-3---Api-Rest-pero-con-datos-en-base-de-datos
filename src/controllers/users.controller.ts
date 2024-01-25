import { Request, Response } from 'express'

import getConnection from '../db/database'


const getAll = async (_req: Request, res: Response) => {
    try {
      const connection = await getConnection()
      const response = await connection.query('SELECT * FROM users')
  
      return res.json(response[0])
    } catch (err: any) {
      return res.sendStatus(400).json({ message: 'Ups, algo falló', err })
    }
  }
  
  const create = async (req: Request, res: Response) => {
    try {
      const connection = await getConnection()
      await connection.query('INSERT INTO `users` SET ?', [req.body])
  
      return res.json({ message: 'Nuevo usuario agregado' })
    } catch (err: any) {
      return res.sendStatus(400).json({ message: 'Ups, ocurrió un error', err })
    }
  }
  
  const getEntry = async (req: Request, res: Response) => {
    try {
      const connection = await getConnection()
      const entry = await connection.query('SELECT * FROM users WHERE idUser = ?', [+req.params.id])
  
      return res.json(entry[0])
    }
    catch (err: any) {
      return res.sendStatus(400).json({message: 'Ups, ocurrió un error', err})
    }
  }
  
  const deleteEntry = async (req: Request, res: Response) => {
    try {
      const connection = await getConnection()
      await connection.query('DELETE FROM users WHERE idUser = ?', [+req.params.id])
     
      return res.json({message: `El usuario con el id ${+req.params.id} fue eliminado`})
    }
    catch (err: any) {
      return res.sendStatus(400).json({message: 'Ups, ocurrió un error', err})
    }     
  }
  
  const updateEntry = async (req: Request, res: Response) => {
    try {
      const connection = await getConnection()
      await connection.query('UPDATE users SET ? WHERE idUser = ?', [req.body, +req.params.id])
      
      return res.json({message: `El usuario con el id ${+req.params.id} fue actualizado`})
    }
    catch (err: any) {
      return res.sendStatus(400).json({message: 'Ups, ocurrió un error', err})
    }
  }
  
  export default { getAll, create, getEntry, deleteEntry, updateEntry }
  