import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variable de tipo FormGroup
  loginForm: FormGroup;

  //instancia de formBuilder (Ex. fb: new FormBuilder)
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });
  }

  //Metoodo: mostrar en consola los valores
  login() {
    console.log(this.loginForm.value);
  }

  ngOnInit(): void {
  }

}
