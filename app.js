const express = require('express');
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render("home");
});







// listen functions
const port = process.env.PORT || 5000
app.listen(port , ()=> console.log(' Server is up and running on port : ' + port));