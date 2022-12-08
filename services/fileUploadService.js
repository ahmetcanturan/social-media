import multer from "multer"
import { IMAGE_MIME_TYPES } from "../consts/index.js"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/images')
    },
    filename: function (req, file, cb) {
        const randomName = `${Date.now()}_${Math.random().toString(36)}_${file.fieldname}_${file.originalname[0]}.png`
        cb(null, randomName)
    }
})

const fileFilter = (req, file, cb) => {
    if (IMAGE_MIME_TYPES.includes(file.mimetype)) {
        cb(null, true)
        return
    }
    return cb(({ message: "Sadece image olan 'jpg','jpeg' ve 'png' formatları desteklenir!" }), false)
}
const upload = multer({ storage, fileFilter, limits: { fileSize: "5MB" } }).single('image')
export default upload