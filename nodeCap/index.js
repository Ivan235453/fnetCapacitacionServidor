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
const bcrypt = require('bcrypt');


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


//newUser
//  const hashedPassword = await bcrypt.hash(body.password, 10);

app.post("/newUser",async function (req,res){
	let body=req.body;
  //console.log("ENTRA AL SERVICIO");
  //console.log(body)
  //crypt
    const hashedPassword = await bcrypt.hash(body.password,10);
	await rest.executeQuery(
    `insert into users(lastName, firstName, username, password, email) values ('${body.lastName}','${body.firstName}','${body.username}','${hashedPassword}','${body.email}')`).then((data)=>{
	res.json(data)
  })
}) 
//endnewuser

app.post("/checkU", async function (req, res) {
  let body = req.body;

  await rest.executeQuery(
    `select * from users where username='${body.username}'`
  ).then(async (data) => {
    //console.log(data['data'][0])
    if (data['data'][0].length > 0) {
      const hashedPassword = data['data'][0][0].password; // Obtener el hash almacenado en la base de datos
      const passwordMatch = await bcrypt.compare(body.password, hashedPassword);

      if (passwordMatch) {
        res.json({ success: true, message: "Contraseña correcta" });
      } else {
        res.json({ success: false, message: "Contraseña incorrecta" });
      }
    } else {
      res.json({ success: false, message: "Usuario no encontrado" });
    }
  });
});


/*
//check user
app.post("/checkU", async function (req,res){
  let body=req.body;

	await rest.executeQuery(
    `select * from users where username='${body.username}' and password='${body.password}'`).then((data)=>{
	res.json(data)
  })
 
   
});
//-checkuserfin*/

app.post("/getUD", async function (req,res){
 // console.log("ENTRA A LA PETICION");
  //console.log(req.body);
  
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
    console.log("port 8000");

})
