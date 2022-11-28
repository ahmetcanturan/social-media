import db from "../db/MySqlConnect.js"
import { forUpdate } from "../utils/index.js"


class DbManager {

    constructor(tableName) {
        this.table = tableName
    }

    async create(data) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO ${this.table} (${Object.keys(data)}) VALUES (?)`
            db.query(query, [Object.values(data)], (err, result) => {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                else resolve(result)
            })
        })
    }
    async getAll() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${this.table}`
            db.query(query, (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    }
    async getById(id) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${this.table} WHERE Id=?`
            db.query(query, [id], (err, result) => {
                if (err) reject(err)
                else (result[0]?.Id) ? resolve(result[0]) : resolve(null)
            })
        })
    }
    async findOne(data) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${this.table} WHERE ${Object.keys(data)}=?`
            db.query(query, [Object.values(data)], (err, result) => {
                if (err) reject(err)
                else {
                    (result[0]?.Id) ? resolve(result[0]) : resolve(null)
                }
            })
        })
    }
    async findWhere(data) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${this.table} WHERE ${Object.keys(data)}=?`
            db.query(query, [Object.values(data)], (err, result) => {
                if (err) reject(err)
                else {
                    (result[0]?.Id) ? resolve(result) : resolve(null)
                }
            })
        })
    }
    async updateById(id, data) {
        return new Promise((resolve, reject) => {
            const query = `UPDATE ${this.table} SET ${forUpdate(data)} WHERE Id=${id}`
            db.query(query, Object.values(data), (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    }
    async deleteById(id) {
        return new Promise((resolve, reject) => {
            const query = `Delete FROM ${this.table} WHERE Id=${id}`
            db.query(query, (err, result) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    }
}

export default DbManager