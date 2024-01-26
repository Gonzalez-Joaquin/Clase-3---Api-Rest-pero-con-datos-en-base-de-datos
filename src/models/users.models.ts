export default interface User {
    id: number,
    name: string,
    username: string
    email: string,
    password: string
    permissions: 'user' | 'admin'
}

export type UsernameAndPassowrdModel = Pick<User, 'username' | 'password'>