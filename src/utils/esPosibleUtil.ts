//import getConnection from "../db/database"
import { Products } from "../models/products.models"

const esPosibleUtil = /*async*/ (body: any, allProducts: Array<Products>) => {

    //const connection = await getConnection()

    if (!Array.isArray(body)) {
        const { id, quantity } = body 
        const product = allProducts.find(product => product.id === id)

        if (!product) {
            return { message: 'No se encontró el producto con id ' + id }
        }
        if (quantity <= product.stock) {
            //await connection.query('UPDATE `products` SET stock = stock - ? WHERE id = ?', [quantity, product.id])
            return { price: (product.price * quantity) }
        }

        return { products: [{ id, stock: product.stock }] }
    }

    const result: { price: number, products: boolean | Array<{ id: number, stock: number }> } = {
        price: 0,
        products: false
    }

    body.map(async (item: { id: number, quantity: number }) => {
        const product = allProducts.find(product => product.id === item.id)

        if (!product) {
            return { message: 'No se encontró el producto con id ' + item.id }
        }
        if (item.quantity <= product.stock) {
            result.price = result.price + (product.price * item.quantity)
            result.products = true

            //await connection.query('UPDATE `products` SET stock = stock - ? WHERE id = ?', [item.quantity, item.id])
        } else {
            result.products =
                Array.isArray(result.products)
                    ? [...result.products, { id: item.id, stock: product.stock }]
                    : [{ id: item.id, stock: product.stock }]
        }

        return item
    })

    return result
}

export default esPosibleUtil