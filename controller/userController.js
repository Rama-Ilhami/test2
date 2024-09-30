const {user} = require('../models')

class userController{
    static async getUser(req,res){
        try{
            const users = await user.findAll({

            })
            res.render('user.ejs',{users})
            // res.json(users)
        }
        catch(err){
            res.status(404).json(err)

        }
    }
    static async create(req, res) {
        try {
          const { username, email, password, image, age } =
            req.body;
          // const blurPassword =bcrypt.hashSync(password,5)
          let result = await user.create({
            username,
            email,
            password,
            image,
            age,
          });
          res.redirect('/user')
          // console.log(req.body)
          // bcrypt.hashSync((password),5)
        } catch (err) {
          res.status(500).json(err);
        }
      }

    static async tambah(req,res){
      try{
          const users = await user.findAll({

          })
          res.render('tambah.ejs',{users})
          // res.json(users)
      }
      catch(err){
          res.status(404).json(err)

      }
  }
}
module.exports = userController