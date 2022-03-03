const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const client = require('./database.js')
app.use(bodyParser.json());




    // let insertQuery = `insert into users (email,firstName,lastName,age) 
    //                    values(${user.email}, '${user.firstName}', '${user.lastName}',${user.age})`

    app.post('/users', (req, res)=> {
        const user = req.body;
        let insertQuery = `insert into users (email,firstName,lastName,age) 
                            values(${user.email}, '${user.firstName}', '${user.lastName}',${user.age})`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Insertion was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    })

// Alters table (inserting columns)
// const addColumn = async () => {
// 	const query = `ALTER TABLE "users"
// 				   ADD "createTime" VARCHAR(255);`;
//     try {
//         // await client.connect();    // gets connection
//         await client.query(query); // sends query
//     } catch (error) {
//         console.error(error.stack);
//     } finally {
//         await client.end();        // closes connection
//     }
// };

// addColumn(); 

// Creating Table
// const query = `
//  CREATE TABLE users (
//      email varchar,
//      firstName varchar,
//      lastName varchar,
//      age int,
//      createTime
//  );
//  `;
//  client
//      .query(query)
//      .then(res => {
//          console.log('Table is successfully created');
//      })
//      .catch(err => {
//          console.error(err);
//      })
//      .finally(() => {
//                   client.end();
//      });


client.connect();
app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})