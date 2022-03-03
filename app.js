const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const client = require('./database.js')
app.use(bodyParser.json());


app.get('/users', (req,res) =>{
    client.query('SELECT * from users', (err,result)=> {
        if(!err){
            res.send(result.rows)

        }
    });
    client.end
})


app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `INSERT into users(id,email, firstname,lastname, createdat) 
                       values('${user.id}','${user.email}', '${user.firstname}','${user.lastname}','${user.createdat}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})



app.get('/admin', (req,res) =>{
    client.query('SELECT * from admin', (err,result)=> {
        if(!err){
            res.send(result.rows)

        }
    });
    client.end
})



   
app.post('/admin', (req, res)=> {
    const user = req.body;
    let insertQuery = `INSERT into admin(id,name)
                       values('${user.id}','${user.name}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
   
 


client.connect();
app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})