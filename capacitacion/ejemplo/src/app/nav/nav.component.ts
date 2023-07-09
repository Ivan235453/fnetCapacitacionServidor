import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})



export class NavComponent {


isLogged(){
  if(sessionStorage.getItem('bandera')=='true')
    return true;
    else return false;
}

whoI(){
  return sessionStorage.getItem('username')
}
}
