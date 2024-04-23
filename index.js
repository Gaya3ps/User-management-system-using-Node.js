const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");
   

const express=require("express");
const app = express();
 
// for user route
const userRoute = require("./routes/userRoute");
app.use('/',userRoute);

//for admin route
const adminRoute = require("./routes/adminRoute");
app.use('/admin',adminRoute);

app.listen(4000,function(){
    console.log("Server is running...Registration Page at http://localhost:4000/register");
    console.log("Server is running...Login Page at http://localhost:4000/login");
    console.log("Server is running...Admin Page at http://localhost:4000/admin");
})