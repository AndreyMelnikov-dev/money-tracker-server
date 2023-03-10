import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routers/user-router.js'
import accountRouter from './routers/account-router.js'
import iconRouter from './routers/icon-router.js'
import categoryRouter from './routers/category-router.js'
import transactionRouter from './routers/transaction-router.js'
import cookieParser from 'cookie-parser'
import errorMiddleware from './middlewares/error-middleware.js'
import authMiddleware from './middlewares/auth-middleware.js'
import fileUpload from 'express-fileupload'

const server = express()
const PORT = process.env.PORT || 8001

// middlewares
server.use(express.json())
server.use(express.static('static'))
server.use(fileUpload())
server.use(cookieParser())
server.use('/api', userRouter)
server.use('/api', authMiddleware, accountRouter)
server.use('/api', authMiddleware, iconRouter)
server.use('/api', authMiddleware, categoryRouter)
server.use('/api', authMiddleware, transactionRouter)
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