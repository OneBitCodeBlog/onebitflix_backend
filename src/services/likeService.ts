import { Like } from "../models"

export const likeService = {
  create: async (userId: number, courseId: number) => {
    const like = await Like.create({
      userId,
      courseId
    })

    return like
  },

  delete: async (userId: number, courseId: number) => {
    await Like.destroy({
      where: {
        userId,
        courseId
      }
    })
  },

  isLiked: async (userId: number, courseId: number) => {
    const like = await Like.findOne({
      where: {
        userId,
        courseId
      }
    })

    return like !== null ? true : false
  }
}