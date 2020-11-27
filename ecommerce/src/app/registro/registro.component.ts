import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //Variable de tipo FormGroup
  registerForm: FormGroup;

  //instancia de formBuilder (Ex. fb: new FormBuilder)
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });
  }

  //Metoodo: mostrar en consola los valores
  register() {
    console.log(this.registerForm.value);
  }

  ngOnInit(): void {
  }

}
