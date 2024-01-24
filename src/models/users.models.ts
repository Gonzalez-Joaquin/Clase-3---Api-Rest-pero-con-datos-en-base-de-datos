export interface User {
    id: number,
    name: string,
    username: string
    email: string,
    password: string
    permissions: 'user' | 'admin'
}