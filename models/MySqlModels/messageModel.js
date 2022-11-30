import db from "../../db/MySqlConnect.js"
export const MessageTable = () => {
    db.query(`CREATE TABLE message 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
        sender_id INT NOT NULL,
        receiver_id INT NOT NULL,
        chat_id INT NOT NULL,
        content VARCHAR(1250),
        is_seen BOOLEAN DEFAULT FALSE,
        created_time bigint NOT NULL,
        FOREIGN KEY (receiver_id) REFERENCES user(Id) ON DELETE CASCADE,
        FOREIGN KEY (sender_id) REFERENCES user(Id) ON DELETE CASCADE,
        FOREIGN KEY (chat_id) REFERENCES chat(Id) ON DELETE CASCADE
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
export default MessageTable