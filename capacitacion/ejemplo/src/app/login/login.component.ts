import { Component,OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  


  constructor(private service:ServicioService, private router:Router){}

  user= {
    username: '',
    password:''
  }


  
  getUser(){
    this.service.checkUser(this.user).subscribe((res:any)=>{
      if(res['data']!=""){
        console.log(res['data']['0']);
        sessionStorage.setItem("bandera","true");
        sessionStorage.setItem("username",this.user.username);
        this.router.navigate(['/panel'])
      }else{
      alert("error");
      }
     });
  }
  
}
