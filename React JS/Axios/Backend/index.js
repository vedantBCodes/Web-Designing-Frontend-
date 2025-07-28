const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


app.get("/users",(req,res)=>{
    res.json([{
        _id :1,
        name:"Vedant",
        age : 24,
        gender : "male"
    },{
        _id :2,
        name:"Suraj",
        age : 25,
        gender : "male"
    },
    {
        _id :3,
        name:"Rutuja",
        age : 23,
        gender : "female"
    },
    {
        _id :4,
        name:"Vinod",
        age : 27,
        gender : "male"
    }])
});

app.listen(3000,()=>{
    console.log("App is listening on port 3000"); 
});