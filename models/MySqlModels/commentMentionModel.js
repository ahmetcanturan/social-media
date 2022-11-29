import db from "../../db/MySqlConnect.js"
export const CommentMentionTable = () => {
    db.query(`CREATE TABLE commentmention 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
        mention_id INT NOT NULL,
        username VARCHAR(35) NOT NULL,
        content VARCHAR(100) NOT NULL,
        created_time bigint NOT NULL ,
        FOREIGN KEY (mention_id) REFERENCES mention(Id) ON DELETE CASCADE,
        FOREIGN KEY (username) REFERENCES user(username) ON DELETE CASCADE
        )
        `, (err, result) => {
        if (!err) {
            console.log("Table is Created.")
        }
        else {
            if (!err.message.includes("already exists")) throw new Error('Table Create Error:', err)
        }
    })
}
export default CommentMentionTable