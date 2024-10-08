const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const route = require('./routes')
app.use(route)

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})