import { Category } from "./Category";
import { Course } from "./Course";

Category.hasMany(Course)

Course.belongsTo(Category)

export {
    Category,
    Course
}