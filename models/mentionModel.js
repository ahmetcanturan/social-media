import db from "../db/connect.js"
export const MentionTable = () => {
    db.query(`CREATE TABLE mention 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        content VARCHAR(1250),
        created_time INT NOT NULL,
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
export default MentionTable