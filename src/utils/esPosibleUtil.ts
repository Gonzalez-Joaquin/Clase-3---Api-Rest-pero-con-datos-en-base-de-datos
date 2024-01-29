import { Products } from "../models/products.models"

const esPosibleUtil = (body: any, allProducts: Array<Products>) => {
    if (!Array.isArray(body)) {
        const { id, quantity } = body

        const product = allProducts.find(product => product.id === id)

        if (!product) {
            return { meessage: 'No se encontró el producto con id ' + id }
        }

        if (quantity <= product.stock) {
            return { price: (product.price * quantity) }
        }

        return { products: [{ id, stock: product.stock }] }
    }

    const result: { price: number, products: boolean | Array<{ id: number, stock: number }> } = {
        price: 0,
        products: false
    }

    body.map((item: { id: number, quantity: number }) => {

        const product = allProducts.find(product => product.id === item.id)

        if (!product) {
            return { meessage: 'No se encontró el producto con id ' + item.id }
        }

        if (item.quantity <= product.stock) {
            result.price = result.price + (product.price * item.quantity)
            result.products = true
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