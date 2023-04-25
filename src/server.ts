import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import { adminJs, adminJsRouter } from "./adminjs"
import { sequelize } from "./database"
import { router } from "./routes"

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

app.use(adminJs.options.rootPath, adminJsRouter)

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('DB connection successfull')
    })

    console.log(`Server started successfuly at port ${PORT}`)
})