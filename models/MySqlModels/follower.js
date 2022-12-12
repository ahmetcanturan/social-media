import db from "../../db/MySqlConnect.js"
export const FollowerTable = () => {
    db.query(`CREATE TABLE follower 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        followed_id INT NOT NULL,
        created_time bigint NOT NULL,
        FOREIGN KEY (user_id) REFERENCES user(Id) ON DELETE CASCADE,
        FOREIGN KEY (followed_id) REFERENCES user(Id) ON DELETE CASCADE
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
export default FollowerTable