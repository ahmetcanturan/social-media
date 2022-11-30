import db from "../../db/MySqlConnect.js"
export const ChatTable = () => {
    db.query(`CREATE TABLE chat 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
        user1_id INT NOT NULL,
        user2_id INT NOT NULL
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
export default ChatTable