import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutenticacionComponent } from './Modulo/autenticacion/autenticacion.component';
import { PersonaComponent } from './Modulo/persona/persona.component';
import { HomeComponent } from './Modulo/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AutenticacionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'persona', component: PersonaComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }