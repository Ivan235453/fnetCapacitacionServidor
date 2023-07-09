import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaComponent } from './pagina/pagina.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { EjemploServicioComponent } from './ejemplo-servicio/ejemplo-servicio.component';
import { GuardianGuard } from './guardian.guard';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { RegisterComponent } from './register/register.component';
import { LoggedGuardGuard } from './logged-guard.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[GuardianGuard]},
  {path:'pagina',component:PaginaComponent},
  {path:'',component:HotelesComponent},
  {path:'hoteles',component:HotelesComponent},
  {path:'ejemplo',component:EjemploServicioComponent},
  {path:'login',component:LoginComponent,canActivate:[LoggedGuardGuard]},
  {path:'register',component:RegisterComponent,canActivate:[LoggedGuardGuard]},
  {path:'panel',component:PanelComponent,canActivate:[GuardianGuard]},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
