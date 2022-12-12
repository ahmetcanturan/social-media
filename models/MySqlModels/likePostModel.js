import db from "../../db/MySqlConnect.js"
export const LikePostTable = () => {
    db.query(`CREATE TABLE likepost 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
        post_id INT NOT NULL,
        user_id INT NOT NULL,
        created_time bigint NOT NULL ,
        FOREIGN KEY (post_id) REFERENCES post(Id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES user(Id) ON DELETE CASCADE
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
export default LikePostTable