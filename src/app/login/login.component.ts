import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Aquí puedes agregar la lógica para validar las credenciales
    if (this.username === 'admin' && this.password === 'admin123') {
      // Redirigir al panel de administración
      this.router.navigate(['/admin']);
    } else {
      alert('Credenciales inválidas');
    }
  }
}