import { Request, Response } from 'express'

import { addElement, getElements } from '../utils/cartOfPay.utils'

const addToCart = async (req: Request, res: Response) => {
    try {
        const {product_id, quantity} = req.body

        if(!product_id || !quantity || quantity < 1){
            return res.sendStatus(400).json({message: 'Error. Parámetros inválidos'})
        }
        
        await addElement(product_id, quantity)
        return res.json({message: 'Se agregó un producto al carrito'})
    }
    catch (err: any) {
        return res.sendStatus(400).json({message: 'Ups, ocurrió un error', err})
    }
}

const getAllElementsToCart = async (_req: Request, res: Response) => {
    try {
        const cart = await getElements()
        return cart
    }
    catch (err: any) {
        return res.sendStatus(400).json({message: 'Ups, ocurrió un error', err})
    }
}

export default { addToCart, getAllElementsToCart }