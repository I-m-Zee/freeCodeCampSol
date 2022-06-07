let express = require('express');
var bodyParser = require("body-parser");
let app = express();

/*Seventh Assignment*/
// app.use((req, res, next) => {

//  let string = `${req.method} ${req.path} - ${req.ip}`
//  console.log(string) 
   
//   next();

// });
/*First Assignment*/
// console.log("Hello World");
/*Second Assignment*/
// app.get("/",(req,res)=>{
//   res.send('Hello Express');
// });
/*Third Assignment*/
// app.get("/",(req,res)=>{
//   res.sendFile(__dirname +"/views/index.html");
// });
/*Fourth Assignment*/
// app.get("/",(req,res)=>{
//   res.sendFile(__dirname +"/views/index.html");
// });
// app.use("/public",express.static(__dirname + "/public"));
/*Fifth Assignment*/
// app.get("/json",(req,res)=>{
//   res.json({"message": "Hello json"});
// });
// app.use("/public",express.static(__dirname + "/public"));
/*Sixth Assignment*/
// const mySecret = process.env['MESSAGE_STYLE']
// app.use("/public",express.static(__dirname + "/public"));
// app.get('/json', (req, res) => {
//   let message = 'Hello json'
// if (process.env.MESSAGE_STYLE === "uppercase") {
//   message = "Hello json".toUpperCase();
// } else {
//   message = "Hello json";
// }
//   res.json({"message": message})
// })
/*Eightth Assignment*/
// app.get('/now', function(req, res, next){
//   req.time = new Date().toString()
//   console.log(req.time)
//   next()
// }, function(req, res){
//   res.send({time: req.time})
// })
/*Ninth Assignment*/
// app.get('/:word/echo', function(req, res){
//   const { word } = req.params;
//   res.json({
//     echo: word
//   });
// })
/*Tenth Assignment*/
// app.get('/name', function(req, res){
//   var firstName = req.query.first;
//   var lastName = req.query.last;
//   // OR you can destructure and rename the keys
//   //var { first: firstName, last: lastName } = req.query;
//   // Use template literals to form a formatted string
//   res.json({
//     name: `${firstName} ${lastName}`
//   });
// })
/*Eleventh Assignment*/
// app.use(bodyParser.urlencoded({ extended: true }));
// app.post('/name', (req, res)=>{
//   console.log(req.body)
//   var { first: firstName, last: lastName } = req.body;
//   res.json({
//     name: `${firstName} ${lastName}`
//   });
// })


 module.exports = app;
