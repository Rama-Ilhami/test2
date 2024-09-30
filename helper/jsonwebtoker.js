const jwt = require ('jsonwebtoken')
const secretCode = process.env.SECRET_CODE || 'bebas'

const tokenGenerator = (data)=>{
    const {id,name,userName} = data
    return jwt.sign({
        id,name,userName
    },secretCode)
}
const verifyGenerator = (data)=>{
    return jwt.verify(data,secretCode)
}

module.exports = {
    tokenGenerator,verifyGenerator
}