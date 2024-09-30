const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    res.render('index.ejs')
})

const userRoute = require('./user')
const kegiatanRoute = require('./kegiatan')


route.use('/user',userRoute)
route.use('/kegiatan',kegiatanRoute)


module.exports = route