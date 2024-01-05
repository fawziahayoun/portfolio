const dotenv = require("dotenv");
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());

dotenv.config({path : '.env'})

mongoose.connect(`${process.env.MONGO_CNX}?retryWrites=true&w=majority`);

const UserModel = require("./models/Users");

app.get('/', async(req,res)=> {
  const users = await UserModel.find();
  res.send(users);

});

app.post("/create" , async(req,res) => {
 const nweUser = new UserModel(req.body);
 await nweUser.save();
 res.json(req.body);

});


app.listen(3005, ()=> {
  console.log("good");
});

 /* const db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "",
    database : "profulio"
 });


   app.post("/createc", (req , res) => {
    const id = req.body.id;
    const firstName= req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    
   
    db.query('INSERT INTO sender (id, firstName,lastName,email,phone,message) VALUES (?,?,?,?,?,?)'
     ,[id,firstName, lastName, email, phone, message]), (err, result) => {
   
       if(err){
           console.log(err)
       }else{
           res.send("inserted")
       }
     }
   
   })
*/
   
 
  
