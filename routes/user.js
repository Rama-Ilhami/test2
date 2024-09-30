// const { Router } = require('express')
// const userRoute = Router()
// const {userController} = require('../controller')

// userRoute.get('/',userController.getUser)
// userRoute.post('/create',userController.create)
// userRoute.get('/login',userController.login)

// module.exports = userRoute

const { Router } = require('express')

const userRoute = Router()
const {userController} = require('../controller')

userRoute.get('/',userController.getUser)
userRoute.post('/create',userController.create)
userRoute.get('/tambah',userController.tambah)

module.exports = userRoute