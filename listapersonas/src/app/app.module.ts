import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Modulo/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutenticacionComponent } from './Modulo/autenticacion/autenticacion.component';
import { PersonaComponent } from './Modulo/persona/persona.component';
import { ModalPersonaComponent } from './Modulo/persona/modal-persona/modal-persona.component';
import { RegistroPersonaComponent } from './Modulo/persona/registro-persona/registro-persona.component';
import { TelefonoPipe } from './Modulo/telefono.pipe';
import { HeaderComponent } from './Modulo/header/header.component';
import { HomeComponent } from './Modulo/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutenticacionComponent,
    PersonaComponent,
    ModalPersonaComponent,
    RegistroPersonaComponent,
    TelefonoPipe,
    HeaderComponent,
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
