// const { profileController } = require('.')
const {kegiatan} = require('../models')

class kegiatanController{
    static async getKegiatan(req,res){
        try{
            const kegiatans = await kegiatan.findAll({
            })
            // res.render('kegiatan.ejs',{kegiatans})
            res.status(200).json(kegiatans);

        }
        catch(err){
            res.status(500).json(err)
        }
        
        
    }
    static async createKegiatan(req,res){
        try{
            const {tanggal,tipe,shift,jam,namaMesin,namaSparepart,proses} = req.body
            const result = await kegiatan.create({
                tanggal,tipe,shift,jam,namaMesin,namaSparepart,proses
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = kegiatanController
