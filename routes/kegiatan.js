const { Router } = require('express')
const kegiatanRoute = Router()
const {kegiatanController} = require('../controller')

kegiatanRoute.get('/',kegiatanController.getKegiatan)
kegiatanRoute.post('/create/kegiatan',kegiatanController.createKegiatan)

module.exports = kegiatanRoute