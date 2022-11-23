import db from "../db/connect.js"
export const SharedCommentTable = () => {
    db.query(`CREATE TABLE sharedComment 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
        post_id INT DEFAULT 0,
        mention_id INT DEFAULT 0,
        username VARCHAR(35) NOT NULL,
        FOREIGN KEY (post_id) REFERENCES post(Id) ON DELETE CASCADE,
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
export default SharedCommentTable