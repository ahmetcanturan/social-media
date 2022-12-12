import Database from "../dal/DependencyInversion.js"
import { hashToPassword, createToken } from "../utils/index.js"
const database = new Database("user")

const login = async (data) => {
    const { username, password } = data
    const user = await database.db().findOne({ username: username })
    if (user == null) return { status: false, message: "Invalid username" }
    if (user.password != hashToPassword(password)) return { status: false, message: "Invalid password" }
    const token = createToken(user.id, user.username)
    return token
}
const getAllUsers = async () => {
    const users = await database.db().getAll()
    return users
}
const getUserById = async (id) => {
    const user = await database.db().getById(id)
    const json = (user == null) ? { data: "null", message: "No Data" } : user
    return json
}
const createUser = async (data) => {
    const { username, password, email } = data
    const user = await database.db().create({ username, password: hashToPassword(password), email, created_time: Date.now() })
    return user
}
const updateUser = async (id, data) => {
    const { username, email } = data
    const user = await database.db().updateById(id, { username, email })
    return user
}
const deleteUser = async (id) => {
    const user = await database.db().deleteById(id)
    return user
}


export { login, getAllUsers, getUserById, createUser, updateUser, deleteUser }