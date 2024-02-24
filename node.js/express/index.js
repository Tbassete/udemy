import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    res.send("hello world jessuus");
})

app.get("/about", (req, res) =>{
    res.send("about")
})

app.get("/home", (req, res) =>{
    res.send("home")
})


app.post("/register", (req, res)=>{
    res.sendStatus(201);
})

app.put("/user/angela", (req, res)=>{
    res.sendStatus(200);

})

app.patch("/user/angela", (req, res)=>{
    res.sendStatus(200);

})

app.delete("/user/angela", (req, res)=> {
    res.sendStatus(200)
})

app.listen(port, ()=>{
    console.log(`the server as running on port ${port}`)
})

//use this code to show you how or wich port is empty
//netstat -ano | findstr "LISTENING"


//use this on case powershell block the nodemon
//Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser