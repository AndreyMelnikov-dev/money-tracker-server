import { Router } from 'express'
import userController from '../controllers/user-controller.js'
import authMiddleware from '../middlewares/auth-middleware.js'

const userRouter = Router()

userRouter.post('/register', userController.registerUser)
userRouter.get('/activate/:link', userController.activateUser)
userRouter.post('/login', userController.loginUser)
userRouter.get('/logout', userController.logoutUser)
userRouter.get('/refresh', userController.refreshUser)

// delete on release
userRouter.get('/users', authMiddleware, userController.testUser)

export default userRouter