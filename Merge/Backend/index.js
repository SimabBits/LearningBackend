import express from 'express';
const app = express()
const port = process.env.PORT||3000;
app.get("/home",(req , res)=>{
    res.send("Home");
})

app.listen (port, ()=>{
    console.log("Listening at port " + port);
})


console.log("hello");