import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

edad='50';


  ngOnInit(): void{

    sessionStorage.setItem('edad',this.edad)
    let varEdad = sessionStorage.getItem(this.edad)
    console.log("hola mundo");
    console.log(this.edad)
    
  }
  
}


