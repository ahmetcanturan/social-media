import multer from "multer"
import { VIDEO_MIME_TYPES, IMAGE_MIME_TYPES } from "../consts/index.js"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.mimetype.includes("video")) cb(null, './uploads/videos')
        else cb(null, './uploads/images')
    },
    filename: function (req, file, cb) {
        if (file.mimetype.includes("video")) {
            const randomName = `${Date.now()}_${Math.random().toString(36)}_${file.fieldname}_${file.originalname[0]}.mp4`
            cb(null, randomName)
        }
        else {
            const randomName = `${Date.now()}_${Math.random().toString(36)}_${file.fieldname}_${file.originalname[0]}.png`
            cb(null, randomName)
        }
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype.includes("video")) {
        if (VIDEO_MIME_TYPES.includes(file.mimetype)) {
            cb(null, true)
            return
        }
        return cb(({ message: "Sadece video olan 'mp4','MPEG' 'mov' ve 'mkv' formatları desteklenir!" }), false)
    }
    else {
        if (IMAGE_MIME_TYPES.includes(file.mimetype)) {
            cb(null, true)
            return
        }
        return cb(({ message: "Sadece image olan 'jpg','jpeg' ve 'png' formatları desteklenir!" }), false)
    }

}
const imageUpload = multer({ storage, fileFilter, limits: { fileSize: "50MB" } }).single('image')
const videoUpload = multer({ storage, fileFilter, limits: { fileSize: "100MB" } }).single('video')
export { imageUpload, videoUpload }