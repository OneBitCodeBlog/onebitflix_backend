import { Favorite } from "../models"

export const favoriteService = {
  findByUserId: async (userId: number) => {
    const favorites = await Favorite.findAll({
      attributes: [['user_id', 'userId']],
      where: { userId },
      include: {
        association: 'Course',
        attributes: [
          'id',
          'name',
          'synopsis',
          ['thumbnail_url', 'thumbnailUrl']
        ]
      }
    })

    return {
      userId,
      courses: favorites.map(favorite => favorite.Course)
    }
  },

  create: async (userId: number, courseId: number) => {
    const favorite = Favorite.create({
      courseId,
      userId
    })

    return favorite
  },

  delete: async (userId: number, courseId: number) => {
    await Favorite.destroy({
      where: {
        userId,
        courseId
      }
    })
  }
}