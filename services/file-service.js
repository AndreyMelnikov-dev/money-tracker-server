import ErrorApi from '../exceptions/error-api.js'
import { v4 } from 'uuid'
import path from 'path'

class FileService {
    saveIcon(icon) {
        try {
            const fileName = v4() + path.parse(icon.name).ext
            const filePath = path.resolve('static', fileName)
            icon.mv(filePath)
            return `${process.env.SERVER_URL}:${process.env.PORT}/${fileName}`
        } catch (e) {
            ErrorApi.FileError()
        }
    }
}

export default new FileService()