import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credenciales = {
    email: '',
    password: ''
  };

  onSubmit() {
    if (this.credenciales.email && this.credenciales.password) {
      console.log('Credenciales enviadas:', this.credenciales);
    } else {
      console.log('Formulario no válido');
    }
  }
}