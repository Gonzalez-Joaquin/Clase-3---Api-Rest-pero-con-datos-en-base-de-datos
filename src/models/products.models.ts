export interface Products {
  id: number
  img: string
  title: string
  description: string
  price: number
  stock: number
  type: "product" | "service"
  category_id: number
}