import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { 

  }


  funcionEjemplo(){
    return 'Hola papus';
  }

  funcionActores(id:number){
    return this.http.get(`http://127.0.0.1:8000/${id}`)
  }

  funcionAllActors(id:number){
    return this.http.get(`http://127.0.0.1:8000/`)
  }

  funcionInsertar(body:any){
    return this.http.post(`http://127.0.0.1:8000/`,body)
  }

  checkUser(user:any){
      //console.log(user.username+"  "+user.password);
    return this.http.post(`http://127.0.0.1:8000/checkU`,user);

  }

  getUserData(username:any){
    //console.log("asd"+ username);
  return this.http.post(`http://127.0.0.1:8000/getUD`,username);

}


}