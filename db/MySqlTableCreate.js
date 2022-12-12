import PostTable from "../models/MySqlModels/postModel.js";
import UserTable from "../models/MySqlModels/userModel.js";
import LabelTable from "../models/MySqlModels/labelModel.js";
import MentionTable from "../models/MySqlModels/mentionModel.js";
import PostLabelTable from "../models/MySqlModels/postLabelModel.js";
import MentionLabelTable from "../models/MySqlModels/mentionLabelModel.js";
import CommentMentionTable from "../models/MySqlModels/commentMentionModel.js";
import CommentPostTable from "../models/MySqlModels/commentPostModel.js"
import ChatTable from "../models/MySqlModels/chatModel.js";
import MessageTable from "../models/MySqlModels/messageModel.js";
import FollowerTable from "../models/MySqlModels/follower.js";
import likePostTable from "../models/MySqlModels/likePostModel.js"
import likeMentionTable from "../models/MySqlModels/likeMentionModel.js"
const start = () => {
    try {
        UserTable()
        PostTable()
        LabelTable()
        MentionTable()
        PostLabelTable()
        MentionLabelTable()
        CommentMentionTable()
        CommentPostTable()
        ChatTable()
        MessageTable()
        FollowerTable()
        likePostTable()
        likeMentionTable()
    } catch (error) {
        console.log(error)
    }

}
export default start