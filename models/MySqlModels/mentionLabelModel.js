import db from "../../db/MySqlConnect.js"
export const MentionLabelTable = () => {
    db.query(`CREATE TABLE mentionLabel 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
        mention_id INT  NOT NULL,
        label_id INT NOT NULL,
        FOREIGN KEY (mention_id) REFERENCES mention(Id) ON DELETE CASCADE,
        FOREIGN KEY (label_id) REFERENCES label(Id) ON DELETE CASCADE
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
export default MentionLabelTable