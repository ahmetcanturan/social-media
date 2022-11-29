import db from "../../db/MySqlConnect.js"
export const UserTable = () => {
    db.query(`CREATE TABLE user 
        (Id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(35),
        password NVARCHAR(35),
        created_time bigint NOT NULL,
        email VARCHAR(50),
        UNIQUE (username,email)
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
export default UserTable