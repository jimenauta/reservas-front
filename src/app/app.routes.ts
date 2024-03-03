import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import path from 'path';
import { DisponibilidadComponent } from './disponibilidad/disponibilidad.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path: 'nav', component :  NavComponent},
    {path: 'Disponibilidad', component: DisponibilidadComponent},
    {path: 'Iniciar-sesion', component: LoginComponent}

];
