import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaComponent } from './pagina/pagina.component';
import { NavComponent } from './nav/nav.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { EjemploServicioComponent } from './ejemplo-servicio/ejemplo-servicio.component';
import { GuardianGuard } from './guardian.guard';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[GuardianGuard]},
  {path:'home',component:HomeComponent},
  {path:'pagina',component:PaginaComponent},
  {path:'nav',component:NavComponent},
  {path:'hoteles',component:HotelesComponent},
  {path:'ejemplo',component:EjemploServicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
