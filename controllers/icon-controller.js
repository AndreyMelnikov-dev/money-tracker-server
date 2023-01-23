import iconService from '../services/icon-service.js'

class IconController {
    async getIcons(req, res, next) {
        try {
            const userId = req.user.id
            const iconsList = await iconService.getIcons(userId)
            res.json(iconsList)
        } catch (e) {
            next(e)
        }
    }

    async getOneIcon(req, res, next) {
        try {
            const userId = req.user.id
            const iconId = req.params.id
            const icon = await iconService.getOneIcon(userId, iconId)
            res.json(icon)
        } catch (e) {
            next(e)
        }
    }

    async createIcon(req, res, next) {
        try {
            const iconFile = req.files.icon
            const userId = req.user.id
            const newIcon = await iconService.createIcon(userId, iconFile)
            res.json(newIcon)
        } catch (e) {
            next(e)
        }
    }

    async deleteIcon(req, res, next) {
        try {
            const userId = req.user.id
            const iconId = req.params.id
            const deletedIcon = await iconService.deleteIcon(userId, iconId)
            res.json(deletedIcon)
        } catch (e) {
            next(e)
        }
    }
}

export default new IconController()