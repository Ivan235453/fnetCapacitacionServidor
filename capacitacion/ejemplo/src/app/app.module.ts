import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaginaComponent } from './pagina/pagina.component';
import { NavComponent } from './nav/nav.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { EjemploServicioComponent } from './ejemplo-servicio/ejemplo-servicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaComponent,
    NavComponent,
    HotelesComponent,
    EjemploServicioComponent,
    LoginComponent,
    PanelComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
