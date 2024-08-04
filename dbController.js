let mongo = require('mongodb')
// import mongo from 'mongodb'
let {MongoClient} = mongo
let mongoUrl = "mongodb+srv://vandana:vandana@cluster0.tfjhvav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

let client = new MongoClient(mongoUrl)
// database connectivity 
async function dbConnect(){
    await client.connect()
    console.log("connection successful")
}
let db = client.db('products');


// generic code for getting data which will be use whenever getData require 
async function getData(colName,query){
   let output = [];
   try{
    const cursor = db.getCollection(colName).find(query)
    for await(const data of cursor ){
        output.push(data)
    }
    cursor.close();

   } 
   catch(err){
    output.push({"Error":"Error in get Data"})
   }
   return output
}

module.exports = {
    dbConnect,
    getData
}