import db from "../../db/MySqlConnect.js"
export const PostLabelTable = () => {
    db.query(`CREATE TABLE postLabel 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
        post_id INT  NOT NULL,
        label_id INT NOT NULL,
        FOREIGN KEY (post_id) REFERENCES post(Id) ON DELETE CASCADE,
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
export default PostLabelTable