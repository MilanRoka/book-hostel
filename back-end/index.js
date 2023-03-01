const express=require("express");
const app=express();

app.get("/milan", (req, res) =>{
    res.send("this is nodejs")
})












app.listen(3000, () =>{
    console.log("Port:");
});
