/*console.log("hola mundo");
const os=require('os');
console.log(os.cpus());
console.log(os.freemem());
console.log(os.release());
const fs = require('fs');
var cron=require('node-cron'); */


const rest=require("./config");
const cors=require("cors");
const bodyParser=require('body-parser')

var express = require("express");
const app=express().use(cors());



app.use(bodyParser.json({limit:"6mb"}))
app.get("/", async function (req,res){
  await rest.executeQuery('select * from actor').then((data)=>{
    res.json(data)
  })
});

//insert

 app.post("/",async function (req,res){
	let body=req.body;
	await rest.executeQuery(
    `insert into actor(first_name, last_name, last_update) values ('${body.name}','${body.lastname}',GETDATE())`).then((data)=>{
	res.json(data)
  })
}) 

//check user
app.post("/checkU", async function (req,res){
  let body=req.body;

	await rest.executeQuery(
    `select * from users where username='${body.username}' and password='${body.password}'`).then((data)=>{
	res.json(data)
  })
 
   
});
//-checkuserfin

app.post("/getUD", async function (req,res){
  console.log("ENTRA A LA PETICION");
  console.log(req.body);
  
  let body=req.body;
  console.log(body.username);
	await rest.executeQuery(
    `select * from users  where username='${body.username}'`).then((data)=>{
	res.json(data)
  })
});



//

app.get("/:id", async function (req,res){
    const recuperar=req.params.id || ''
    await rest.executeQuery(`select * from actor where actor_id=${recuperar}`).then((data)=>{
      res.json(data)
    })
  });

app.listen(8000, function(){
    console.log("port 8080");

})
