const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb+srv://Admin:123@cluster0.9femo.mongodb.net/messagess';

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true}).then(() => {
    console.log("DB Connection success");
  }).catch((err) => {
    console.log(err);
  });
//schema
const noteSchema = mongoose.Schema({
  
    message:{
        type: String,
       
    }

})
const Message = new mongoose.model("Message", noteSchema);


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/about-us', (req, res) => {
    res.render("about");
   
});

app.post('/', (req, res) => {
    let newNote = new Message({
        message : req.body.messages,
    });
    newNote.save().then(item =>{
        console.log("Data saved");
     });
     
     res.redirect('/');
     
});




// listen functions
const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(' Server is up and running on port : ' + port));