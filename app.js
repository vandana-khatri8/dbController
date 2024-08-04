let express = require('express');
let app = express();
let port = 9110 ; 
let cors = require('cors');
let {dbConnect , getData} = require('./controller/dbController');

app.use(cors())

// creat routes
app.get('/',(req,res)=>{
    res.send('hii from express')
});

app.get('/cotegorylist',async (req,res) => {

    let query = {};
    let collection = "cotegorylist"
    let output = await getData(collection,query)
    res.send(output)
});

app.get('/quickSearch',(req,res)=>{
    res.send('hii from quickSearch')
});

// create server

app.listen(port,(err)=>{
    dbConnect()
    if(err) throw err;
    console.log(`server is running on port ${port}`)
})

