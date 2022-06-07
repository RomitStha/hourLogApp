const express = require('express')
const cors = require ('cors')
const app = express()
// const bodyParser = require('body-parser')

let corOptions = {
    origin: 'https://localhost:8081'
}


//models
require('./models')

//middlewares
app.use(cors(corOptions))

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json());
app.use(express.urlencoded({extended: true  }))


//routes
const route = require('./routes/routes')
app.use('/',route)

const PORT = process.env.PORT || 6000
app.listen(PORT, ()=>{
console.log(`Listening to port number: ${PORT}`)
})

