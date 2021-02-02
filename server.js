
const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");



 const path = __dirname + '/app/views/';

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

 //db.sequelize.sync({ force: true }).then(() => {
 //  console.log("Drop and re-sync db.");});
  
// simple route
//app.get("/", (req, res) => {
 // res.json({ message: "Welcome to bezkoder application." });
//});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
}
require('./app/routes/auth.router')(app);
require('./app/routes/user.router')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




/*
const express = require('express')
http = require('http')
const cors = require('cors');
const path = require('path');
const fs = require('fs');
var session = require('express-session');


//to upload images
const fileUpload = require('express-fileupload');

const app = express()
//port of your server
const port = 3000 


app.use(cors());

app.use(fileUpload());


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse requests of content-type - application/json
app.use(express.json());

app.use('/public', express.static('public'));


 app.get('/', (req, res) => {
  res.sendFile('e:/vs files/node/node_js/Archive/face.html')
})
app.get('/signin.html', (req, res) => {
  res.sendFile('e:/vs files/node/node_js/Archive/signin.html')
})
app.get('/home.html', function(req, res) {
  if (req.session.loggedin) {
      res.send('Welcome back, ' + req.session.fname + '!');
  } else {
      res.send('Please login to view this page!');
  }
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
require('./modules/router.js')(app);
const db = require('./config/db.js');
*/