// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12573257",
  password: "ML8YlpPCeZ",
  database: "sql12573257"
});

// let queryResult;
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("MySQL DB Connected!");
//   //let sql = 'SELECT * FROM `accounts` WHERE username = "songsakdi"'
//   let sql = 'SELECT id, username, password, isActive FROM accounts'
//   con.query(sql, function (err, result, fields) {
//       if (err) throw err;
//       let i = 0;
//       for (const elm of result) {
//           i++;
//           console.log("Query Result" + i + ": " + elm.id + "," + elm.userName + "," + elm.userPwd + "," + elm.isActive);
//       }
//       queryResult = result;
//   });
// });

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan('combined'));



// defining an endpoint to return all ads

// app.get('/hello', (req, res) => {
//   let message = {title:"Hello World from Express."} ;
//   res.send(message);
// });
// app.get('/checkUser', (req, res) => {
//     console.log(req.query.name);
//     if(req.query.name === 'songsakdi' &&  req.query.pwd=== '1234'){
// res.send("Successful Login");
// } else{  res.send("Error on Log In"); }
// });



// starting the server
// app.listen(3001, () => {
//  console.log('listening on port 3001');
// });











