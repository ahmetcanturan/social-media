import db from "../db/connect.js"
import { forUpdate } from "../utils/index.js"
//* Table Name
const table = "label"
//* Keys of Table
const keys = ["name"]


const DataAccess = {
    async create(data) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO ${table} (${keys}) VALUES (?)`
            db.query(query, [Object.values(data)], (err, result) => {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                else resolve(result)
            })
        })
    },
    async getAll() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${table}`
            db.query(query, (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    },
    async getById(id) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${table} WHERE Id=?`
            db.query(query, [id], (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    },
    async getByWhere(value, where) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${table} WHERE ${where}=?`
            db.query(query, [value], (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    },
    async updateById(id, data) {
        return new Promise((resolve, reject) => {
            const query = `UPDATE ${table} SET ${forUpdate(keys)} WHERE Id=${id}`
            db.query(query, [Object.values(data)], (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    },
    async deleteById(id) {
        return new Promise((resolve, reject) => {
            const query = `Delete FROM ${table} WHERE Id=${id}`
            db.query(query, (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    },

}


export default DataAccess
