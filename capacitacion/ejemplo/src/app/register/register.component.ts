import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service:ServicioService, private router:Router){}
passwd=''
  user= {
    username: '',
    password:'',
    firstName:'',
    lastName:'',
    email:''
  }

 

  register(){
    this.service.insertUser(this.user).subscribe((res:any)=>{
      //res['success']==true
      if(res['success']==true){
        alert("exito");
        this.router.navigate(['/login'])
      }else{
      alert(res['message']);
      }
     });
  }
    
  }

