import { Request, Response } from 'express'
import getConnection from '../db/database'

import esPosibleUtil from '../utils/esPosibleUtil'
import { Products } from '../models/products.models'

const esPosible = async (req: Request, res: Response) => {
    try {
        const connection = await getConnection()
        const allProducts = await connection.query('SELECT * FROM `products`')
        const response = esPosibleUtil(req.body, allProducts[0] as Array<Products>)
        return res.json(response)
    }
    catch (err: any) {
        return res.sendStatus(400).json({ message: 'Ups, ocurrió un error', err })
    }
}

export default { esPosible }