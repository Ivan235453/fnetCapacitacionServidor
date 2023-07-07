import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-ejemplo-servicio',
  templateUrl: './ejemplo-servicio.component.html',
  styleUrls: ['./ejemplo-servicio.component.css']
})
export class EjemploServicioComponent {

    ejemplo:any='';
  actor:any;
  actores:any;
  
  actorObject={
    name:'',
    lastname:'',
  }
  constructor(private service:ServicioService){}


    /*ngOnInit():void{
   this.ejemplo=this.service.funcionActores().subscribe(res=>{
    console.log(res)
   });
    } */

    getActor(){
      this.ejemplo=this.service.funcionActores(this.ejemplo).subscribe((res:any)=>{
        
       if(res["success"])
       this.actor=res['data'][0];
       this.ejemplo="";

      });
    }

    getAllActors(){
      this.ejemplo=this.service.funcionAllActors(this.ejemplo).subscribe((res:any)=>{
        if(res["success"])
        this.actores=res['data'][0];
       });
    }

    insertActor(){
      this.service.funcionInsertar(this.actorObject).subscribe((res:any)=>{
        if(res['success']==true)  this.getActor()
        alert("si funciona");
       });
    }



}