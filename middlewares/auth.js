const { verifyGenerator } = require('../helper/jsonwebtoken')


const authentication = (req,res,next)=>{
    const access_token = req.headers.access_token
    if(access_token){
        console.log("ada token")
        try{
            let tokenVerify = verifyGenerator(access_token)
            req.userData = tokenVerify
            next()
        }
        catch(err){
            res.status(404).json({
                message : "token tidak terauthenticated"
            })
        }
    }
    else{
        res.status(404).json({
            message :"token ga ada"
        })
    }
    
}
module.exports = {authentication}