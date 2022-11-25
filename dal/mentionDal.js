import db from "../db/connect.js"
import { forUpdate } from "../utils/index.js"
//* Table Name
const table = "mention"

const DataAccess = {
    async create(data) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO ${table} (${Object.keys(data)}) VALUES (?)`
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
                else (result[0]?.Id) ? resolve(result[0]) : resolve(null)
            })
        })
    },
    async findOne(data) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${table} WHERE ${Object.keys(data)}=?`
            db.query(query, [Object.values(data)], (err, result) => {
                if (err) reject(err)
                else {
                    (result[0]?.Id) ? resolve(result[0]) : resolve(null)
                }
            })
        })
    },
    async findWhere(data) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${table} WHERE ${Object.keys(data)}=?`
            db.query(query, [Object.values(data)], (err, result) => {
                if (err) reject(err)
                else {
                    (result[0]?.Id) ? resolve(result) : resolve(null)
                }
            })
        })
    },
    async updateById(id, data) {
        return new Promise((resolve, reject) => {
            const query = `UPDATE ${table} SET ${forUpdate(data)} WHERE Id=${id}`
            db.query(query, Object.values(data), (err, result) => {
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
