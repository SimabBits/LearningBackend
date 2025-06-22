const express = require('express') 
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get ('/mail', (req, res)=>{
    res.send("dealwithsimab@gmail.com");
})

app.get ('/name', (req, res)=>{
    res.send("<h1>Shoaib</h1>");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

