import express, { Application } from 'express'
import morgan from 'morgan'

import categoriesRoutes from './Routes/categories.routes'
import productsRoutes from './Routes/products.routes'
import userRoutes from './Routes/user.routes'
import commentsRoutes from './Routes/comments.routes'
import cartRoutes from './Routes/cart.routes'

class App {
  private App: Application

  constructor(private PORT?: number | string) {
    this.App = express()
    this.Settings()
    this.MiddleWares()
    this.Routes()
  }

  Settings() {
    this.App.set('port', this.PORT || process.env.PORT || 5000)
  }

  MiddleWares() {
    this.App.use(morgan('dev'))
    this.App.use(express.json())
  }

  Routes() {
    this.App.use('/users', userRoutes)
    this.App.use('/products', productsRoutes)
    this.App.use('/categories', categoriesRoutes)
    this.App.use('/comments', commentsRoutes)
    this.App.use('/cart', cartRoutes)
  }

  async Listen() {
    await this.App.listen(this.App.get('port'))
    console.log('Server running in Port', this.App.get('port'))
  }
}

export default App
