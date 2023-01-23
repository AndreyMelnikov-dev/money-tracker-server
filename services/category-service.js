import categoryModel from '../models/category-model.js'

class CategoryService {

    async createCategory(userId, title, icon) {
        const createdDate = new Date()
        return await categoryModel.create({
            user: userId,
            title: title,
            icon: icon,
            created_at: createdDate,
            modified_at: createdDate
        })
    }

    async getCategories(userId) {
        return await categoryModel.find({ user: userId })
    }

    async getOneCategory(userId, catId) {
        return await categoryModel.findOne({ user: userId, _id: catId })
    }

    async updateCategory(userId, catId, payload) {

        const modifiedDate = new Date()

        return await categoryModel.findOneAndUpdate({ user: userId, _id: catId }, {
            title: payload.title,
            icon: payload.icon,
            modified_at: modifiedDate
        }, { new: true })
    }

    async deleteCategory(userId, catId) {
        return await categoryModel.findOneAndDelete({ user: userId, _id: catId })
    }
}

export default new CategoryService()