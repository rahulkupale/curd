const express=require("express");
const app = express();

const dbConnect = require('./connection');
const mongoObjectId = require('mongodb').ObjectId;

app.use(express.json());

app.listen(3000,(req,res)=>{
    console.log(`listening.....`);
})

app.get('/',async(req,res) => {
    let db = await dbConnect();
    let data = await db.find().toArray();
    res.send(data);
})

app.get('/:name',async(req,res) => {
    
    let db = await dbConnect();
    let data = await db.find({name:req.params.name}).toArray();
    res.send(data);
})


app.post('/',async(req,res) => {
    let db = await dbConnect();
    let data = await db.insertOne(req.body);
    res.send("Data inserted successfully");
})

app.put('/:name',async(req,res) => {
    let db = await dbConnect();
    let data = await db.updateOne(
        {
            name:req.params.name
        },
        {
            $set:req.body
        }
    )
    res.send("Data updated successfully");
})

app.delete('/:name',async(req,res) => {
    console.log(req.params.name)
    let db = await dbConnect();
   let data = await db.deleteOne(
        {
            // _id: new mongoObjectId(req.params.id)
            name:req.params.name
        });

//  let data = await db.deleteOne({_id: req.params.id})

    res.send("Data deleted sucessfully");
})


//
