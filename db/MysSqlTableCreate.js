import PostTable from "../models/MySqlModels/postModel.js";
import UserTable from "../models/MySqlModels/userModel.js";
import LabelTable from "../models/MySqlModels/labelModel.js";
import MentionTable from "../models/MySqlModels/mentionModel.js";
import PostLabelTable from "../models/MySqlModels/PostLabelModel.js";
import CommentMentionTable from "../models/MySqlModels/commentMentionModel.js";
import CommentPostTable from "../models/MySqlModels/commentPostModel.js"
import ChatTable from "../models/MySqlModels/chatModel.js";
import MessageTable from "../models/MySqlModels/messageModel.js";
const start = () => {
    try {
        UserTable()
        PostTable()
        LabelTable()
        MentionTable()
        PostLabelTable()
        CommentMentionTable()
        CommentPostTable()
        ChatTable()
        MessageTable()
    } catch (error) {
        console.log(error)
    }

}
export default start