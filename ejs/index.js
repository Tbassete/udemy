import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = " it is time to work hard and find a job";

    if(day === 0 || day ===6){
        let type = "the weekend";
        let adv = " its time to have a some fun"
    }

    res.render("index.ejs", {
        dayType: type, advice: adv,
    })
})

app.listen(port, ()=>{
console.log(`servidor rodando na porta ${port}. `);
})