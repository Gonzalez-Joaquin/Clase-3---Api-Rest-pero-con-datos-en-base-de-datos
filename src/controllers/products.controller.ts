import { Request, Response } from 'express'

// import { Products } from '../models/products.models'

// import categories from '../mocks/products.data.json'
// const AllProducts: Array<Products> = categories

const getAllProducts = (_req: Request, res: Response) => {
  try {
    


  } catch (err: any) {
    res.sendStatus(400).json({ message: 'Algo salio mal', err })
  }
}

export default { getAllProducts }
