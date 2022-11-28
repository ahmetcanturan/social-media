import db from "../../db/MySqlConnect.js"
export const CommentPostTable = () => {
    db.query(`CREATE TABLE commentpost 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
        post_id INT NOT NULL,
        username VARCHAR(35) NOT NULL,
        content VARCHAR(100) NOT NULL,
        created_time INT NOT NULL ,
        FOREIGN KEY (post_id) REFERENCES post(Id) ON DELETE CASCADE,
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
export default CommentPostTable