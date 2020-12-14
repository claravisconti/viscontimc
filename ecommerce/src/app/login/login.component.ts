import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//1 

export class LoginComponent implements OnInit {

  usuarios_async;

  //Variable de tipo FormGroup
  loginForm: FormGroup;

  //instancia de formBuilder (Ex. fb: new FormBuilder)
  constructor(private fb: FormBuilder, private userServ: UsuariosService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    }),
    this.usuarios_async = this.userServ.getAll();
  }


  //Metoodo: mostrar en consola los valores
  login() {
    console.log(this.loginForm.value);
  }

  ngOnInit(): void {
  }

}


