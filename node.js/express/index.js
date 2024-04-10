import express from "express";
const app = express();
const port = 5550;
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) =>{
    res.sendFile(__dirname +"/index.html");
})

app.post("/submit", (req, res) =>{
    console.log(req.body)
})
/*
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



//use this code to show you how or wich port is empty
//netstat -ano | findstr "LISTENING"


//use this on case powershell block the nodemon
//Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser*/

app.listen(port, ()=>{
    console.log(`the server as running on port ${port}`)
})