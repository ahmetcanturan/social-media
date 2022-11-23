import Post from "../dal/postDal.js"

const getAllPosts = async () => {
    const posts = await Post.getAll()
    return posts
}
const createPost = async (data) => {
    const json = { user_id: data.user_id, title: data.title, content_path: data.content_path, created_time: Date.now() }
    const post = await Post.create(json)
    return post
}
const updatePost = async (id, data) => {
    const json = { title: data.title }
    const post = await Post.updateById(id, json)
    return post
}
const deletePost = async (id) => {
    const post = await Post.deleteById(id)
    return post
}


export { getAllPosts, createPost, updatePost, deletePost }