import db from "../../db/MySqlConnect.js"
export const PostTable = () => {
    db.query(`CREATE TABLE post 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
        title VARCHAR(100),
        content_path VARCHAR(100) DEFAULT "default",
        created_time bigint NOT NULL,
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
export default PostTable