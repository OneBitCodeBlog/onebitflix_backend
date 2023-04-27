require("dotenv").config()

module.exports = {
    development: {
        url: process.env.DATABASE_URL
    },
    production: {
        url: process.env.DATABASE_URL
    }
}