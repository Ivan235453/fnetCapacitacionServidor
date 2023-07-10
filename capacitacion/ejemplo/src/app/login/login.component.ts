import { Component} from '@angular/core';
import { ServicioService } from '../servicio.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';




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
      //res['success']==true
      if(res['success']==true){
        alert("bienvenido")
        console.log(res['data']['0']);
        sessionStorage.setItem("bandera","true");
        sessionStorage.setItem("username",this.user.username);
        this.router.navigate(['/panel'])
      }else{
        console.log(res['data']);


        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: res['message'],
          footer: 'Verifique los datos ingresados'
        })
      
      }
     });
  }
  
}
