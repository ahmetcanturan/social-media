import { createClient } from "redis"
import { exception } from "../logger/index.js"
const client = createClient()
client.connect().then(e => {
    console.log("Connected To Redis")
}).catch(r => exception(r))
export default client