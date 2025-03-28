import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Error de login:', error);
        alert('Credenciales incorrectas. Verifica usuario y contraseña.');
      }
    });
  }
}