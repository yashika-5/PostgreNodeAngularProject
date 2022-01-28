const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
  
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            //res.send(result.rows);
            // console.log(result.rows);
            res.status(200).json(result.rows);
        }
    });
    client.end;
});

app.get('/users/:id', (req, res)=>{
    client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
});

app.post('/users', (req, res)=> {  
    const user = req.body;
    console.log(user)
    let insertQuery = `insert into users( "firstName", "lastName", email, mobile, location) values( '${user.firstName}', '${user.lastName}', '${user.email}', ${user.mobile}, '${user.location}')`;
    // console.log(insertQuery);
    console.log(insertQuery)
    
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
});

app.put('/users/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update users
                       set "firstName" = '${user.firstName}',
                       "lastName" = '${user.lastName}',
                       email = '${user.email}',
                       mobile = ${user.mobile},
                       location = '${user.location}'
                       where id = ${user.id}`   

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
});

app.delete('/users/:id', (req, res)=> {
    let insertQuery = `delete from users where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

client.connect();

