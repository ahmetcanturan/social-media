import PostTable from "../models/MySqlModels/postModel.js";
import UserTable from "../models/MySqlModels/userModel.js";
import LabelTable from "../models/MySqlModels/labelModel.js";
import MentionTable from "../models/MySqlModels/mentionModel.js";
import SharedLabelTable from "../models/MySqlModels/sharedLabelModel.js";
import CommentMentionTable from "../models/MySqlModels/commentMentionModel.js";
import CommentPostTable from "../models/MySqlModels/commentPostModel.js"
const start = () => {
    try {
        UserTable()
        PostTable()
        LabelTable()
        MentionTable()
        SharedLabelTable()
        CommentMentionTable()
        CommentPostTable()
    } catch (error) {
        console.log(error)
    }

}
export default start