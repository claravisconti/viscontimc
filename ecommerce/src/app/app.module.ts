import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, OnInit, Input, ViewChild } from '@angular/core'; //https://stackoverflow.com/questions/61308517/angular-compile-error-ng6001-the-class-is-listed-in-the-declarations-of-the-ng

//Imports 
import { FormsModule,ReactiveFormsModule} from '@angular/forms'; //Forms
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //Bootstrap
import { HttpClientModule } from '@angular/common/http'; //GET/Post...

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    RegistroComponent,
    LoginComponent,
    DetalleComponent    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
