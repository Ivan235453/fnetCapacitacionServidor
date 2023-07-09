import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {Router} from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})


export class PanelComponent {

userN={
  username:sessionStorage.getItem("username"),
  empty:""
}
  
usernew:any

  constructor(private service:ServicioService, private router:Router){}


    ngOnInit() : void{
    this.getUserInfo();
    }

    
    getUserInfo(){
      console.log("Entra a la funcion");
      this.service.getUserData(this.userN).subscribe((res:any)=>{
        if(res['data']!=""){
         console.log(res['data'][0]);
         this.usernew=res['data'][0][0];
         console.log(this.usernew.firstName);
         console.log("hola papus")
        }else{
        alert("error en panel");
        }
       });
    }
    

  closeSession(){
    sessionStorage.setItem("bandera","false");
    sessionStorage.setItem("username","");
    this.router.navigate(['/hoteles']);
  }

}
