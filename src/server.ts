import express from "express"
import { sequelize } from "./database"

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('DB connection successfull')
    })

    console.log(`Server started successfuly at port ${PORT}`)
})