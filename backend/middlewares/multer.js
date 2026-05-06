import multer from "multer"
import fs from "fs"

// ✅ Create folder if it doesn't exist
if (!fs.existsSync("./public")) {
    fs.mkdirSync("./public")
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname) // ✅ avoid name conflicts
    }
})

export const upload = multer({ storage })