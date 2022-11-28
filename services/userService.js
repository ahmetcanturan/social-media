import Database from "../dal/DependencyInversion.js"

const database = new Database("user")

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
    const user = await database.db().create({ username, password, email })
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


export { getAllUsers, getUserById, createUser, updateUser, deleteUser }