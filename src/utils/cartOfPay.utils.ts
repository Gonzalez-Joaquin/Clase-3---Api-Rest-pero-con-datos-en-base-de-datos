import {Products} from "../models/products.models"

let cart: Products[] = []

export const addElement = (product: Products, quantity: number = 1) => {
    const existInCart = cart.find((element) => element.id === product.id)

    if(existInCart) {
        existInCart.quantity += quantity
    }
    else {
        cart.push({ ...product, id: Math.random(), quantity });
    }
}

export const getElements =  () => {
    const stockCart = cart.find((element) => element.stock < 1)

    if(stockCart){
        return false
    }
    else {
        return cart  
    }
}