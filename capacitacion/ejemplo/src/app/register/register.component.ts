import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service:ServicioService){}
passwd=''
  user= {
    username: '',
    password:'',
    firstName:'',
    lastName:'',
    email:''
  }

 

  hola(){
    
  }
}
