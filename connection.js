const { lstat } = require('fs');
const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client  = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db('Assignment');
    return db.collection('Users');
}

module.exports=dbConnect;

// vm1 to vm2 

// ifconfig
// ls
// touch dd .txt
// nano dd.txt

//cat dd.txt
//scp dd.txt vagrant@172/222/add:


// google cloud command
// >py google-cloud-sdk\bin\dev\app_server.py "path file"

//curd
//npm init
//npm i mongodb
//npm i express
//node index.js

//angular
//npm install -g @angular/cli@ latest
//ng new part-c
// ng g c register(all compo use)
//ng serve


//node
//npm init
//in public folder create index.index
//create index.js
//npm install express --save
//node index.js

