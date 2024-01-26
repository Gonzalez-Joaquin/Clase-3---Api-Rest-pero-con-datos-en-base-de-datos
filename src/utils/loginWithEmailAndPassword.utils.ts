import User, { UsernameAndPassowrdModel } from "../models/users.models"

const loginWithEmailAndPasswordUtils = ({ username, password }: UsernameAndPassowrdModel, users: Array<User>): User | void => {
    const findUsername = users.find(user => user.username.toLowerCase() === username.toLowerCase())
    const findPassword = users.find(user => user.password.toLowerCase() === password.toLowerCase())
    
    if (!findUsername || !findPassword) {
        throw new Error("Username o password incorrecto")
    }

    return findUsername
}

export default loginWithEmailAndPasswordUtils