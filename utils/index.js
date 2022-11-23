import { validationResult } from "express-validator"


const forUpdate = (keys) => {
    const list = []
    for (const key of Object.keys(keys)) {
        list.push(key + "=?")
    }
    return list
}



const validate = (req, res) => {
    try {
        const validationErrors = validationResult(req)
        if (validationErrors.isEmpty() === false) {
            return res.status(401).json({
                data: null, error: true, validationErrors: validationErrors.array(),
                success: false, message: "Geçersiz Veri", timestamp: Date.now(),
            })
        }
    } catch (error) {
        console.log("içeride hata var")
    }

}

export { forUpdate, validate }