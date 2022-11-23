import User from "../dal/userDal.js"

const getAllUsers = async () => {
    const users = await User.getAll()
    return users
}
const getUserById = async (id) => {
    const user = await User.getById(id)
    const json = (user == null) ? { data: "null", message: "No Data" } : user
    return json
}
const createUser = async (data) => {
    const { username, password, email } = data
    const user = await User.create({ username, password, email })
    return user
}
const updateUser = async (id, data) => {
    const { username, email } = data
    const user = await User.updateById(id, { username, email })
    return user
}
const deleteUser = async (id) => {
    const user = await User.deleteById(id)
    return user
}


export { getAllUsers, getUserById, createUser, updateUser, deleteUser }