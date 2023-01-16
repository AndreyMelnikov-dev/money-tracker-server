import { Router } from 'express'
import userController from '../controllers/user-controller.js'

const userRouter = Router()

userRouter.post('/register', userController.registerUser)
userRouter.post('/login', userController.loginUser)
userRouter.post('/logout', userController.logoutUser)
userRouter.get('/activate/:link', userController.activateUser)
userRouter.post('/refresh', userController.refreshUser)

// delete on release
userRouter.get('/user-test', userController.testUser)

export default userRouter