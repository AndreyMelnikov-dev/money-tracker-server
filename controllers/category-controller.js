import categoryService from '../services/category-service.js'

class CategoryController {

    async getCategories(req, res, next) {
        try {
            const userId = req.user.id
            const categoriesList = await categoryService.getCategories(userId)
            res.json(categoriesList)
        } catch (e) {
            next(e)
        }
    }

    async getOneCategory(req, res, next) {
        try {
            const userId = req.user.id
            const catId = req.params.id
            const categoriesList = await categoryService.getOneCategory(userId, catId)
            res.json(categoriesList)
        } catch (e) {
            next(e)
        }
    }

    async createCategory(req, res, next) {
        try {
            const userId = req.user.id
            const { title, icon } = req.body
            const newCategory = await categoryService.createCategory(userId, title, icon)
            res.json(newCategory)
        } catch (e) {
            next(e)
        }
    }

    async updateCategory(req, res, next) {
        try {
            const userId = req.user.id
            const payload = req.body
            const catId = req.params.id
            const updatedCategory = await categoryService.updateCategory(userId, catId, payload)

            res.json(updatedCategory)
        } catch (e) {
            next(e)
        }
    }

    async deleteCategory(req, res, next) {
        try {
            const userId = req.user.id
            const catId = req.params.id
            const deletedCategory = await categoryService.deleteCategory(userId, catId)
            res.json(deletedCategory)
        } catch (e) {
            next(e)
        }
    }
}

export default new CategoryController()