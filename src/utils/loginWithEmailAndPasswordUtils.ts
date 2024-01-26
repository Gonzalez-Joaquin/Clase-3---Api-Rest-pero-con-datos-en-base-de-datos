import User, { UsernameAndPassowrdModel } from "../models/users.models"

const loginWithEmailAndPasswordUtils = ({ username, password }: UsernameAndPassowrdModel, users: Array<User>): User | void => {
    const user = users.find(user => user.username.toLowerCase() === username.toLowerCase())


    
    if (!user || user.password.toLowerCase() !== password.toLowerCase()) {
        throw new Error("Username o password incorrecto")
    }

    return user
}

export default loginWithEmailAndPasswordUtils