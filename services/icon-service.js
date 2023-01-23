import iconModel from '../models/icon-model.js'
import fileService from './file-service.js'

class IconService {

    async getIcons(userId) {
        return await iconModel.find({ user: userId })
    }

    async getOneIcon(userId, iconId) {
        return await iconModel.findOne({ _id: iconId, user: userId })
    }

    async createIcon(userId, icon) {
        const iconPath = fileService.saveIcon(icon)
        const createdDate = new Date()
        return await iconModel.create({
            user: userId,
            link: iconPath,
            created_at: createdDate,
            modified_at: createdDate
        })
    }

    async deleteIcon(userId, iconId) {
        return await iconModel.findOneAndDelete({ user: userId, _id: iconId })
    }

}

export default new IconService()