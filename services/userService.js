import User from "../dal/userDal.js"

const getAllUsers = async () => {
    const users = await User.getAll()
    return users
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


export { getAllUsers, createUser, updateUser, deleteUser }