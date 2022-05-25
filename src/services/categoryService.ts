import { Category } from "../models"

export const categoryService = {
    findAllPaginated: async (page: number, perPage: number) => {
        const offset = (page - 1) * perPage

        const { count, rows } = await Category.findAndCountAll({
            attributes: ['id', 'name', 'position'],
            order: [['position', 'ASC']],
            limit: perPage,
            offset
        })

        return {
            categories: rows,
            page,
            perPage,
            total: count
        }
    }
}