import Database from "../dal/DependencyInversion.js"

const database = new Database("post")



const getAllPosts = async () => {
    const posts = await database.db().getAll()
    return posts
}
const getPostById = async (id) => {
    const post = await database.db().getById(id)
    const json = (post == null) ? { data: "null", message: "No Data" } : post
    return json
}
const getAllPostsOfUserByUserId = async (id) => {
    const post = await database.db().findWhere({ user_id: id })
    const json = (post == null) ? { data: "null", message: "No Data" } : post
    return json
}
const createPost = async (data) => {
    const json = { user_id: data.user_id, title: data.title, content_path: data.content_path, created_time: Date.now() }
    const post = await database.db().create(json)
    return post
}
const updatePost = async (id, data) => {
    const json = { title: data.title }
    const post = await database.db().updateById(id, json)
    return post
}
const deletePost = async (id) => {
    const post = await database.db().deleteById(id)
    return post
}


export { getAllPosts, getPostById, getAllPostsOfUserByUserId, createPost, updatePost, deletePost }