import db from "../../db/MySqlConnect.js"
export const LabelTable = () => {
    db.query(`CREATE TABLE label 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        UNIQUE (name)
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
export default LabelTable