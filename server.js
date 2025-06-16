// var http = require('http');
// http.createServer(function(request, response){
// 	response.write("Hello World!");
// 	response.end(); //close connection
// }).listen(80); //http port
var express = require("express");
var server = express();

var bodyParser = require("body-parser");

server.use(express.static(__dirname +"/public"));
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

const Datastore = require('nedb-promises')
let GameDB_1 = Datastore.create(__dirname+'/game1.db')
let GameDB_2 = Datastore.create(__dirname+'/game2.db')
let GameDB_3 = Datastore.create(__dirname+'/game3.db')

// server.get("/", function (req, res) { //web root
//     res.send("Hello, World!"); //回傳固定內容
// });
server.get("/score", function (req, res) { //other pages
    //url?user=md&score=1000
    console.log(req.query);
     res.send("req /md");
 });

server.post("/rank", (req,res)=>{})

server.post("/postlscore1", (req, res) => {
    console.log(req.body);
    //save to db
    GameDB_1.insert(req.body).then(doc => {
       //find and sort and limit
       GameDB_1.find({level:req.body.level}).sort({ "RankScore": -1 }).limit(3).then((docs) => {
          if (docs != null) {
             res.send(docs);
          }
       })
    });
});
server.post("/postscore2", (req, res) => {
    console.log(req.body);
    //save to db
    GameDB_2.insert(req.body).then(doc => {
       //find and sort and limit
       GameDB_2.find({level:req.body.level}).sort({ "RankScore": -1 }).limit(3).then((docs) => {
          if (docs != null) {
             res.send(docs);
          }
       })
    });
});
server.post("/postscore3", (req, res) => {
    console.log(req.body);
    //save to db
    GameDB_3.insert(req.body).then(doc => {
       //find and sort and limit
       GameDB_3.find({level:req.body.level}).sort({ "RankScore": -1 }).limit(3).then((docs) => {
          if (docs != null) {
             res.send(docs);
          }
       })
    });
});
server.post("/resetscore", (req, res) => {
   // 清空所有資料
   GameDB_1.remove({}, { multi: true });
   GameDB_2.remove({}, { multi: true });
   GameDB_3.remove({}, { multi: true });
   // 壓縮釋放空間
   GameDB_1.persistence.compactDatafile();
   GameDB_2.persistence.compactDatafile();
   GameDB_3.persistence.compactDatafile();
});
server.listen(80);

//  server.post("/postscore", (req,res)=>{
//     console.log(req.body);
//     //save to db
//     GameDB.insert(req.body);
//     //find and sort and limit
//     res.send([{name:"MD", level:1, score:9000}]);
//  });