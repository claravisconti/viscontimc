import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Users
  usuarios: any = []

  //Variable de tipo FormGroup
  loginForm: FormGroup;

  //instancia de formBuilder (Ex. fb: new FormBuilder)
  constructor(private fb: FormBuilder, private userServ: UsuariosService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })

    //Necesito VALIDAR que el usuario y la contrasena esten correctas a la BD

    // this.userServ.getAll()
    //   .subscribe(data => {
    //     console.log(data);
    //     this.usuarios = data;
    //   
  }

  //Metoodo: mostrar en consola los valores
  login() {
    console.log(this.loginForm.value);
  }

  ngOnInit(): void {
  }

}
