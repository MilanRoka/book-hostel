const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const propertyRoute = require('./routes/property')
const packageRoute = require('./routes/package')



require("dotenv/config")
const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};

const app = express(); 
app.use(cors(corsOptions));
app.use(express.json())



const usersRoute = require('./routes/users');

app.use('/users', usersRoute);
app.use('/property', propertyRoute)
app.use("/package", packageRoute)
app.get("/post",(req,res)=>{
    res.json("Hello")
})


app.listen(3000,()=>{
    console.log("Port running on 3000.");

})
mongoose.connect(process.env.dbConnect, {useNewUrlParser:true}, ()=>{
    console.log("db connected");
})


// const postsRoute = require("./routes/posts");
// const usersRoute = require('./routes/users');

// // MIDDLEWAWRES
// app.use("/posts", postsRoute);
// app.use('/users', usersRoute);

// app.get("/", (req, res) => {
//   res.send("We are on home");
// });

// // FOR RUNNING ON SPECIFIC PORT
// app.listen(3000);

// mongoose.connect(
//   process.env.DB_CONNECTION,
//   { useNewUrlParser: true},
//   () => {
//     console.log("Connected to DB");
//   }
// );