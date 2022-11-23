import PostTable from "../models/postModel.js";
import UserTable from "../models/userModel.js";
import LabelTable from "../models/labelModel.js";
import MentionTable from "../models/mentionModel.js";
import SharedLabelTable from "../models/sharedLabelModel.js";
import SharedCommentTable from "../models/sharedComment.js";
const start = () => {
    try {
        UserTable()
        PostTable()
        LabelTable()
        MentionTable()
        SharedLabelTable()
        SharedCommentTable()
    } catch (error) {
        console.log(error)
    }

}
export default start