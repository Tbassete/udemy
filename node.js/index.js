const fs = require("fs");

fs.writeFile("messege.text", "hello from nodejs", (err)=>{//The function takes one parameter, err, which represents any error that might occur during the file-saving operation.
    if (err) throw err;//Inside the function, there's an if statement that checks if err exists and is not null or undefined.
    console.log("the file has been saved")
})