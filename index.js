import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routers/user-router.js'
import accountRouter from './routers/account-router.js'
import cookieParser from 'cookie-parser'
import errorMiddleware from './middlewares/error-middleware.js'
import authMiddleware from './middlewares/auth-middleware.js'

const server = express()
const PORT = process.env.PORT || 8001

// middlewares
server.use(express.json())
server.use(cookieParser())
server.use('/api', userRouter)
server.use('/api', authMiddleware, accountRouter)
server.use(errorMiddleware)


const startApp = async() => {
    try {

        // data base
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.DB_URL, {}, () => {
            console.log('Connected to DB')
        })

        // server listening
        server.listen(PORT, () => {
            console.log(`Server starts on ${PORT}`)
        })

    } catch (e) {
        console.log(e)
    }
}

startApp()