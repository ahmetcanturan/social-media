import redis from "../redis/connection.js"
import { exception } from "../logger/index.js"
import Database from "./DependencyInversion.js"
import { EventEmitter } from "events"
var emitter = new EventEmitter()
var table;
const writeCacheFromDB = async () => {
    const database = new Database(table)
    const data = await database.db().getAll()
    redis.set(table, JSON.stringify(data))
        .then(e => console.log(e))
        .catch(err => exception(err))
}
emitter.addListener("reCreate", writeCacheFromDB)

class cache {
    constructor(key) {
        this.key = key
    }
    async create(data) {
        redis.set(this.key, JSON.stringify(data))
            .then(e => console.log(e))
            .catch(err => exception(err))
    }
    async getAll() {
        return redis.get(this.key)
            .then(e => {
                if (e) {
                    console.log("Cache de var")
                    return JSON.parse(e)
                }
                else {
                    console.log("Cache de yok")
                    return null
                }
            })
            .catch(err => exception(err))
    }
    async getById(id) {
        return redis.get(this.key)
            .then(e => {
                if (e) {
                    console.log("Cache de var")
                    for (const data of JSON.parse(e)) {
                        if (data.Id == id) {
                            return data
                        }
                    }
                    return null
                }
                else {
                    console.log("Cache de yok")
                    return null
                }
            })
            .catch(err => exception(err))
    }
    async reCreate() {
        table = this.key
        emitter.emit("reCreate")
    }
    async findWhere(json) {
        return redis.get(this.key)
            .then(e => {
                if (e) {
                    console.log("Cache de var")
                    const _key = Object.keys(json)[0]
                    const _value = Object.values(json)[0]
                    const list = []
                    for (const data of JSON.parse(e)) {
                        if (data[_key] == _value) {
                            list.push(data)
                        }
                    }
                    const result = (list.length == 0) ? null : list
                    return result
                }
                else {
                    console.log("Cache de yok")
                    return null
                }
            })
            .catch(err => exception(err))
    }

}

export default cache