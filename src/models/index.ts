import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";

Category.hasMany(Course)

Course.belongsTo(Category)
Course.hasMany(Episode)

Episode.belongsTo(Course)


export {
    Category,
    Course,
    Episode
}