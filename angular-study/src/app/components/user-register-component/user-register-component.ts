import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {passwordValidator} from "../../validators/password-validator";
import {passwordIsEqual} from "../../validators/password-is-equal";

@Component({
  selector: 'app-user-register-component',
  imports: [ReactiveFormsModule],
  templateUrl: './user-register-component.html',
  styleUrl: './user-register-component.css',
})
export class UserRegisterComponent {
  userForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    cpf: new FormControl("", [Validators.required]),
    birthDate: new FormControl(""),
    password: new FormControl("", [Validators.required, Validators.minLength(8), passwordValidator]),
    confirmPassword: new FormControl("", [Validators.required]),
    profile: new FormControl("", [Validators.required]),
  }, [passwordIsEqual])

  get name(){
    return this.userForm.get("name");
  }

  get email(){
    return this.userForm.get("email");
  }

  get cpf(){
    return this.userForm.get("cpf");
  }

  get birthDate(){
    return this.userForm.get("birthDate");
  }

  get password(){
    return this.userForm.get("password");
  }

  get confirmPassword(){
    return this.userForm.get("confirmPassword");
  }

  get profile(){
    return this.userForm.get("profile");
  }

  onSubmit(){
    if(this.userForm.valid){
      console.log("Formulário válido:", this.userForm.value)
      this.userForm.reset();
    }else{
      console.log("Formulário inválido:", this.userForm.value)
    }
  }
}

